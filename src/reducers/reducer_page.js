import { SHOW_PAGE } from '../actions/index';

const INITIAL_STATE = { 
  items: [
    { name: 'Home', active: true}, 
    { name: 'Items', active: false}
  ],
  current: 0  
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case SHOW_PAGE:
    var newItems = state.items.map((item, index) => {
      return {
        ...item, 
        active: action.payload.selected === index
      }
    });
    return { 
      items: newItems,
      current: action.payload.selected
    };
  
  default:
    return state;
  }
}