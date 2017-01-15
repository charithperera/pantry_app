import { SEARCH, VIEW, CHANGE_DATE, ADD } from '../actions/types';

export default function(state={}, action) {
  switch (action.type) {
    case SEARCH:
      return { ...state, results: action.payload  };
    case VIEW:
      return { ...state, viewFood: action.payload };
    case CHANGE_DATE:
      return { ...state, date: action.payload };
    case ADD:
      return { ...state, entries: action.payload }
    default:
      return state;
  }
}
