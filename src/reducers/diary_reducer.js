import { SEARCH, VIEW } from '../actions/types';

export default function(state={}, action) {
  switch (action.type) {
    case SEARCH:
      return { ...state, results: action.payload  };
    case VIEW:
      return { ...state, viewFood: action.payload }
    default:
      return state;
  }
}
