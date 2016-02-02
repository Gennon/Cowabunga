import { combineReducers } from 'redux';
import UserReducer from './reducer_user';
import ItemsReducer from './reducer_items';

const rootReducer = combineReducers({
  user: UserReducer,
  items: ItemsReducer
});

export default rootReducer;
