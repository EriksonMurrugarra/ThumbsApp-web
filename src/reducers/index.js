import { combineReducers } from 'redux';
import TestsReducer from './reducer_tests';
import TestReducer from './reducer_test';
import FriendsReducer from './reducer_friends';


const rootReducers = combineReducers({
  tests: TestsReducer,
  test: TestReducer,
  friends: FriendsReducer
});

export default rootReducers;