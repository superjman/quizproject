import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

import '../App.css'

class Home extends Component {

    handleSubmit = event => {
        const name = event.target.name
        this.props.history.push({
            pathname:'quiz/',
            search: 'id='+name
        })
    }

    render() {
        return (
            <div>
                <div className="homeBtns">
                    <Button name="1" onClick={this.handleSubmit}>Quiz 1</Button>
                    <Button name="2" onClick={this.handleSubmit}>Quiz 2</Button>
                </div>
            </div>
        )
    }
}

export default Home