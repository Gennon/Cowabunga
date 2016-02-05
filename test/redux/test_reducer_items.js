import { expect } from 'chai';
import reducer from '../../src/reducers/reducer_items';
import * as actions from '../../src/actions/index';


describe('Testing items reducer', () => {
  
  it('should return defult state when not using a defined action', () => {
    expect(reducer(undefined, {})).to.deep.equal({ all: [], current: null });
  });
  
  it('should handle FETCH_ALL_ITEMS', () => {
    const initialState = { all: [], current: null };
    
    const nextState = { 
      all: [
        { id: 1, title: 'Test1', created_by: 1, approved_by: 0, state: 1 },
        { id: 2, title: 'Test2', created_by: 2, approved_by: 0, state: 2 }
      ], 
      current: null
    };
    
    const action = {
      type: actions.FETCH_ALL_ITEMS,
      payload: { data: [
        { id: 1, title: 'Test1', created_by: 1, approved_by: 0, state: 1 },
        { id: 2, title: 'Test2', created_by: 2, approved_by: 0, state: 2 }
      ]}
    };
    
    expect(reducer(initialState, action)).to.deep.equal(nextState);
  });
  
  it('should handle FETCH_OWN_ITEMS', () => {
    const initialState = { all: [
        { id: 1, title: 'Test1', created_by: 1, approved_by: 0, state: 1 },
        { id: 2, title: 'Test2', created_by: 2, approved_by: 0, state: 2 }
    ], current: null };
    
    const nextState = { 
      all: [
        { id: 1, title: 'Test1', created_by: 1, approved_by: 0, state: 1 }
      ], 
      current: null
    };
    
    const action = {
      type: actions.FETCH_OWN_ITEMS,
      payload: { data: [
        { id: 1, title: 'Test1', created_by: 1, approved_by: 0, state: 1 }
      ]}
    };
    
    expect(reducer(initialState, action)).to.deep.equal(nextState);
  });
  
  
  it('should handle FETCH_ITEM', () => {
    const initialState = { all: [
        { id: 1, title: 'Test1', created_by: 1, approved_by: 0, state: 1 },
        { id: 2, title: 'Test2', created_by: 2, approved_by: 0, state: 2 }
    ], current: null };
    
    const nextState = { 
      all: [
        { id: 1, title: 'Test1', created_by: 1, approved_by: 0, state: 1 },
        { id: 2, title: 'Test2', created_by: 2, approved_by: 0, state: 2 }
      ], 
      current: { id: 1, title: 'Test1', created_by: 1, approved_by: 0, state: 1 }
    };
    
    const action = {
      type: actions.FETCH_ITEM,
      payload: { data: 
        { id: 1, title: 'Test1', created_by: 1, approved_by: 0, state: 1 }
      }
    };
    
    expect(reducer(initialState, action)).to.deep.equal(nextState);
  });
  
  it('should handle APPROVE_ITEM', () => {
    const initialState = { all: [], current:{ id: 1, title: 'Test1', created_by: 1, approved_by: 0, state: 1 } };
    
    const nextState = { 
      all: [], 
      current: { id: 1, title: 'Test1', created_by: 1, approved_by: 2, state: 2 }
    };
    
    const action = {
      type: actions.APPROVE_ITEM,
      payload: { data: 
        { id: 1, title: 'Test1', created_by: 1, approved_by: 2, state: 2 }
      }
    };
    
    expect(reducer(initialState, action)).to.deep.equal(nextState);
  });
  
  it('should handle ORDER_ITEM', () => {
    const initialState = { all: [], current: null };
    
    const nextState = { 
      all: [], 
      current: { id: 1, title: 'Test1', created_by: 1, approved_by: 0, state: 1 }
    };
    
    const action = {
      type: actions.ORDER_ITEM,
      payload: { data: 
        { id: 1, title: 'Test1', created_by: 1, approved_by: 0, state: 1 }
      }
    };
    
    expect(reducer(initialState, action)).to.deep.equal(nextState);
  });
  
});