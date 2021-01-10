import { React, Component } from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap'

import QuizVisuals from './quiz-visuals.component'

class Quiz extends Component {
    constructor(){
        super()
        
        this.state = {
            quiz: [],
            answerChosen: []
        }
    }

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search)
        const token = query.get('id')
        axios.get('http://localhost:5000/quiz/'+token)
            .then(res => {
                this.setState({ quiz: res.data })
                console.log("working")
            })
            .catch((err) => {
                console.log(err);
            })
    }

    handleChange = (event, questionid, testid) => {
        const {value} = event.target
        this.setState(state => {
            const answerChosen = state.answerChosen.concat({'answer': value, 'questionid': questionid, 'testid': testid})
            return { answerChosen }
        })
    }

    onSubmit = event => {
        event.preventDefault();
        let testAnswers = 1
        for(let i=0;i<this.state.answerChosen.length;i++){
            testAnswers = {
                answer: this.state.answerChosen[i].answer,
                testid: this.state.answerChosen[i].testid,
                questionid: this.state.answerChosen[i].questionid,
            }
            axios.post('http://localhost:5000/answers/add', testAnswers)
                .then(res => console.log(res.data));
        }
    
        //console.log(testAnswers);

        this.props.history.push({
            pathname:'/result',
            search: 'id='+testAnswers.testid
        })
    }

    render(){
        const quizList = this.state.quiz.map(currentquiz => <QuizVisuals item={currentquiz} key={currentquiz.questionid} handleChange={this.handleChange}/>)
        return (
            <div>
                {quizList}
                <Button onClick={this.onSubmit}>Submit Answers</Button>
            </div>
        )
    }
}

export default Quiz