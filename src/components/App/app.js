import React from 'react'
import { Header } from '../Header/header'
import { SessionLog } from '../SessionLog/sessionLog'
import { QContainer } from '../Containers/qContainer'
import { RContainer } from '../Containers/rContainer'
import { AdminModel } from '../Admin/admin'
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
                <Route exact path="/session/:id">
                  <QContainer />
                </Route>
                <Route exact path="/result/:id">
                  <RContainer />
                </Route>
                <Route exact path="/management">
                  <AdminModel />
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
