import { expect } from 'chai';
import reducer from '../../src/reducers/reducer_page';
import * as actions from '../../src/actions/index';

describe('Testing items reducer', () => {
  
  it('should return defult state when not using a defined action', () => {
    expect(reducer(undefined, {})).to.deep.equal(
      { 
        items: [
          { name: 'Home', active: true, link: '/home'}, 
          { name: 'Items', active: false, link: '/items'}
        ],
        current: 0 
      });
  });
  
  it('should handle SHOW_PAGE Home => Items', () => {
    const initialState = { 
      items: [
        { name: 'Home', active: true, link: '/home'}, 
        { name: 'Items', active: false, link: '/items'}
      ],
      current: 0 
    };
    
    const nextState = { 
      items: [
        { name: 'Home', active: false, link: '/home'}, 
        { name: 'Items', active: true, link: '/items'}
      ],
      current: 1 
    };
    
    const action = {
      type: actions.SHOW_PAGE,
      payload: { selected: 1 }
    };
    
    expect(reducer(initialState, action)).to.deep.equal(nextState);
  });
  
  it('should handle SHOW_PAGE Items => Home', () => {
    const initialState = { 
      items: [
        { name: 'Home', active: false, link: '/home'}, 
        { name: 'Items', active: true, link: '/items'}
      ],
      current: 1 
    };
    
    const nextState = { 
      items: [
        { name: 'Home', active: true, link: '/home'}, 
        { name: 'Items', active: false, link: '/items'}
      ],
      current: 0 
    };
    
    const action = {
      type: actions.SHOW_PAGE,
      payload: { selected: 0 }
    };
    
    expect(reducer(initialState, action)).to.deep.equal(nextState);
  });
});