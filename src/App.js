import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Segment } from 'semantic-ui-react';

// components
import MenuBar from './components/menubar';
// pages
import TestsPage from './containers/pages/tests';
import FriendsPage from './containers/pages/friends';
import TestViewer from './containers/pages/test-viewer';

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
                <Route path="/pruebas" component={TestsPage}/>
                <Route path="/amigos" component={FriendsPage}/>
                <Route path="/prueba/:id" component={TestViewer}/>
              </Switch>
            </Segment>
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
