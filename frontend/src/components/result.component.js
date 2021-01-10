import { React, Component } from 'react'
import axios from 'axios'

import ResultVisuals from './result-visuals.component'

class Result extends Component {
    constructor(){
        super()
        
        this.state = {
            score: []
        }
    }

    componentDidMount = () => {
        const query = new URLSearchParams(this.props.location.search)
        const token = query.get('id')
        axios.get('http://localhost:5000/answers/'+token)
            .then(res => {
                this.setState({ score: res.data })
                console.log(this.state.score)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        const results = this.state.score.map(currentresults => <ResultVisuals item={currentresults}/>)
        return(
            <div>{results}</div>
        )
    }
}

export default Result