import { LOAD_TEST } from '../actions';

export default (state = null, action) => {
  switch(action.type) {
    case LOAD_TEST: {
      return action.payload;
    }
    default: ;
  }
  return state;
}