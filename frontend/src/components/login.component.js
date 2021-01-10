import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'

class Login extends Component {

    handleSubmit = event => {
        this.props.history.push({
            pathname:'home/'
        })
    }

    render() {
        return (
            <div>
                <Form >
                    <Form.Group controlId="loginEmail">
                        <Form.Label>Email Address:</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email address"/>
                    </Form.Group>
                    <Form.Group controlId="loginPassword">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="password" placeholder="Enter your password"/>
                    </Form.Group>
                    <Button type="submit">Log In</Button>
                </Form>
            </div>
        )
    }
}

export default Login