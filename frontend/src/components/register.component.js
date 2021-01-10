import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'

class Register extends Component {

    handleSubmit = event => {
        this.props.history.push({
            pathname:'home/'
        })
    }

    render() {
        return (
            <div>
                <Form >
                    <Form.Group controlId="registerFirstName">
                        <Form.Label>First Name:</Form.Label>
                        <Form.Control type="text" placeholder="Enter your first name"/>
                    </Form.Group>
                    <Form.Group controlId="registerLastName">
                        <Form.Label>Last Name:</Form.Label>
                        <Form.Control type="text" placeholder="Enter your last name"/>
                    </Form.Group>
                    <Form.Group controlId="registerEmail">
                        <Form.Label>Email Address:</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email address"/>
                    </Form.Group>
                    <Form.Group controlId="registerPassword">
                        <Form.Label>New Password:</Form.Label>
                        <Form.Control type="password" placeholder="Enter your password"/>
                    </Form.Group>
                    <Form.Group controlId="confirmPassword">
                        <Form.Label>Confirm Password:</Form.Label>
                        <Form.Control type="password" placeholder="Confirm password"/>
                    </Form.Group>
                    <Button type="submit">Register</Button>
                </Form>
            </div>
        )
    }
}

export default Register