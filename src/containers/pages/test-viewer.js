import React, { Component } from 'react';
import { Header, Icon } from 'semantic-ui-react';
// tabs
import QuestionsList from '../../components/questions-list';
// redux
import { connect } from 'react-redux';
import { loadTest } from '../../actions';

class TestViewer extends Component {

  componentDidMount () {
    this.props.loadTest('ID');
  }

  render () {
    const { test } = this.props;

    if ( test == null) {
      return (<h1>Loading...</h1>)
    }

    return (
      <div>
        <Header as='h2'>
          <Icon name='book'/>
          <Header.Content>
            { test.title }
          </Header.Content>
        </Header>
        <QuestionsList questions={test.questions}/>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    test: state.test
  };
}

export default connect(mapStateToProps, { loadTest })(TestViewer);