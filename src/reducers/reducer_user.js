import { LOG_IN, LOG_OUT } from '../actions/index';

const INITIAL_STATE = { current: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case LOG_IN:
    return { current: action.payload.data };
  case LOG_OUT:
    return { current: null };
  default:
    return state;
  }
}