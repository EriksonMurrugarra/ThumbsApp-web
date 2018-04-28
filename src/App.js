import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Segment } from 'semantic-ui-react';

// components
import MenuBar from './components/menubar';
// pages
import TestsPage from './containers/pages/tests';
import FriendsPage from './containers/pages/friends';
import TestViewerPage from './containers/pages/test-viewer';
import LoginPage from "./containers/pages/login";
import SignUpPage from "./containers/pages/signup";
import ProfilePage from "./containers/pages/profile";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <MenuBar/>
          <Container style={{marginTop: 70}}>
            <Segment>
              <Switch>
                <Route exact path="/" component={TestsPage}/>
                <Route path="/login" component={LoginPage}/>
                <Route path="/signup" component={SignUpPage}/>
                <Route path="/pruebas" component={TestsPage}/>
                <Route path="/amigos" component={FriendsPage}/>
                <Route path="/prueba/:id" component={TestViewerPage}/>
                <Route path="/profile" component={ProfilePage}/>
              </Switch>
            </Segment>
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
