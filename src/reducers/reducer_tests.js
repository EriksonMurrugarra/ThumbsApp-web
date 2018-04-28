import { LOAD_TESTS } from '../actions';

export default (state = [], action) => {
  switch(action.type) {
    case LOAD_TESTS: {
      return action.payload;
    }
    default: ;
  }
  return state;
}