import React from 'react'
import { Form } from 'react-bootstrap'

function QuizVisuals(props) {
    return(
        <div>
            <p>Question: {props.item.question}</p>
            <Form>
                <Form.Check 
                    type="radio" 
                    label={props.item.option1} 
                    name="answerChosen" 
                    value={props.item.option1} 
                    onChange={event => props.handleChange(event, props.item.questionid, props.item.testid)}
                />
                <Form.Check 
                    type="radio" 
                    label={props.item.option2} 
                    name="answerChosen" 
                    value={props.item.option2}
                    onChange={event => props.handleChange(event, props.item._id, props.item.testid)}
                />
                <Form.Check 
                    type="radio" 
                    label={props.item.option3} 
                    name="answerChosen" 
                    value={props.item.option3}
                    onChange={event => props.handleChange(event, props.item._id, props.item.testid)}
                />
                <Form.Check 
                    type="radio" 
                    label={props.item.option4} 
                    name="answerChosen" 
                    value={props.item.option4}
                    onChange={event => props.handleChange(event, props.item._id, props.item.testid)}
                />
            </Form>
            <br />
        </div>
    )
}

export default QuizVisuals