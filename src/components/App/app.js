import React from 'react'
import { Header } from '../Header/header'
import { SessionLog } from '../SessionLog/sessionLog'
import { Evaluation } from '../Evaluation/evaluation'
import {
  BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Container, Row } from 'react-bootstrap'
import './app.css'


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Container>
          <Row className="justify-content-md-center">
            <Router>
              <Switch>
                <Route exact path="/">
                  <SessionLog />
                </Route>
                <Route exact path="/section/:id">
                  <Evaluation />
                </Route>
              </Switch>
            </Router>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
