import { combineReducers } from 'redux';
import UserReducer from './reducer_user';
import ItemsReducer from './reducer_items';
import PageReducer from './reducer_page';

const rootReducer = combineReducers({
  user: UserReducer,
  items: ItemsReducer,
  page: PageReducer
});

export default rootReducer;
