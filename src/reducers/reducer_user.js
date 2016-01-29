import { LOG_IN, LOG_OUT } from '../actions/index';

const INITIAL_STATE = { user: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case LOG_IN:
    return { user: action.payload.data };
  case LOG_OUT:
    return { user: null };
  default:
    return state;
  }
}