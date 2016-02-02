import { expect } from 'chai';
import reducer from '../../src/reducers/reducer_user';
import * as actions from '../../src/actions/index';


describe('Testing user reducer', () => {
  
  it('should return defult state when not using a defined action', () => {
    expect(reducer(undefined, {})).to.deep.equal({ current: null });
  });
  
  it('should handle LOG_IN', () => {
    const initialState = { current: null };
    
    const nextState = { 
      current: { username: 'John', id: 1 }
    };
    
    const action = {
      type: actions.LOG_IN,
      payload: { data: { username:'John', id: 1}}
    };
    
    expect(reducer(initialState, action)).to.deep.equal(nextState);
  });
  
  it('should handle LOG_OUT', () => {
      
    const initialState = { current: { id: 1} };
    
    const nextState = { 
      current: null
    };
    
    const action = {
      type: actions.LOG_OUT
    };
    
    expect(reducer(initialState, action)).to.deep.equal(nextState);
  });
  
});