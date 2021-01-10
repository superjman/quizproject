import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route} from "react-router-dom"
import {Container} from 'react-bootstrap'

import Navbar from "./components/navbar.component"
import Home from "./components/home.component"
import Quiz from "./components/quiz-logic.component"
import Result from "./components/result.component"
import Login from "./components/login.component"
import Register from "./components/register.component"

function App() {
  return (
    <Router>
      <Container fluid>
        <Navbar />
        <br/>
        <Route path="/" exact component={Home} />
        <Route path="/quiz" component={Quiz}/>
        <Route path="/result" component={Result} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Register} />
      </Container>
    </Router>
  );
}

export default App;
