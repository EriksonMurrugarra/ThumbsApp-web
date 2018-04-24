import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Segment } from 'semantic-ui-react';
import MenuBar from './components/menubar';
import TestsPage from './containers/tests-page';

class App extends Component {
  render() {
    return (
      <Container>
        <MenuBar/>
        <Segment>
          <Router>
            <Switch>
              <Route path="/tests" component={TestsPage}/>
            </Switch>
          </Router>
        </Segment>
      </Container>
    );
  }
}

export default App;
