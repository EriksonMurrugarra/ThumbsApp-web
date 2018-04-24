import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import TestList from '../components/test-list';

class TestsPage extends Component {

  render () {
    return (
      <div>
        <Header as="h2">Tests</Header>
        <TestList/>
      </div>
    );
  }

}

export default TestsPage;