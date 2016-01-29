import { expect } from 'chai';
import reducer from '../../src/reducers/reducer_user';
import * as actions from '../../src/actions/index';


describe('Testing user reducer', () => {
  
  it('should return defult state when not using a defined action', () => {
    expect(reducer(undefined, {})).to.deep.equal({ user: null });
  });
  
  xit('should handle LOG_IN', () => {
    return expext.pass();
    
    const initialState = { user: null };
    
    const nextState = { 
      user: { id: 1 }
    };
    
    const action = {
      type: actions.LOG_IN
    };
    
    expect(reducer(initialState, action)).to.deep.equal(nextState);
  });
  
  it('should handle LOG_OUT', () => {
      
    const initialState = { user: { id: 1} };
    
    const nextState = { 
      user: null
    };
    
    const action = {
      type: actions.LOG_OUT
    };
    
    expect(reducer(initialState, action)).to.deep.equal(nextState);
  });
  
});