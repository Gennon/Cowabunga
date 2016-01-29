import { FETCH_ALL_ITEMS, FETCH_OWN_ITEMS, FETCH_ITEM } from '../actions/index';

const INITIAL_STATE = { all: [], current: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_ALL_ITEMS:
    return { ...state, all: action.payload.data };
  case FETCH_OWN_ITEMS:
    return { ...state, all: action.payload.data };
  case FETCH_ITEM:
    return { ...state, current: action.payload.data };
  default:
    return state;
  }
}