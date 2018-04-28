import React, { Component } from 'react';
import { Image, List } from 'semantic-ui-react';
import User from '../../images/user.jpg';
// redux
import { connect } from 'react-redux';
import { loadFriends } from '../../actions';

class FriendsPage extends Component {

  componentDidMount() {
    this.props.loadFriends();
  }

  render () {
    return (
      <div>
        {
          <List divided size='large'>
            {
              this.props.friends.map(friend => (
                <List.Item key={friend.name}>
                  <Image avatar src={User} />
                  <List.Content>
                    <List.Header as='a'>{ friend.name }</List.Header>
                  </List.Content>
                </List.Item>
              ))
            }
          </List>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    friends: state.friends
  };
}

export default connect(mapStateToProps, { loadFriends })(FriendsPage);