import { LOAD_FRIENDS } from '../actions';

export default (state = [], action) => {
  switch(action.type) {
    case LOAD_FRIENDS: {
      return action.payload;
    }
    default: ;
  }
  return state;
}