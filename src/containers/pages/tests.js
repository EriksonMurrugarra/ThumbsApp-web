import React, { Component } from 'react';
// components
import TestList from '../../components/test-list';
// redux
import { connect } from 'react-redux';
import { loadTests } from '../../actions';

class TestsPage extends Component {

  componentDidMount () {
    this.props.loadTests();
  }

  render () {
    return (
      <div>
        <TestList tests={this.props.tests}/>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    tests: state.tests
  };
}

export default connect(mapStateToProps, { loadTests })(TestsPage);