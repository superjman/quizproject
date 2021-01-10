import React, { Component } from 'react'
import { Button, Nav } from 'react-bootstrap'

class Navbar extends Component {
    render() {
        return (
            <Nav className="navbar navbar-dark bg-dark navbar-expand-lg">
              <Nav.Link href="/" className="navbar-brand">The Quiz Maker</Nav.Link>
              <Nav.Item className="collpase navbar-collapse">
                  <Nav.Link href="/" className="text-light">Home</Nav.Link>
                  <Nav.Link href="/result" className="text-light">Results</Nav.Link>
                  <Nav.Item className="d-flex ml-auto">
                    <Nav.Link href="/signup"><Button>Sign Up</Button></Nav.Link> 
                    <Nav.Link href="/login"><Button >Log In</Button></Nav.Link>
                  </Nav.Item>
              </Nav.Item>
            </Nav>
        )
    }
}

export default Navbar