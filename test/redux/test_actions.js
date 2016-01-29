import { expect } from 'chai'
import * as actions from '../../src/actions/index'

describe('Testing actions', () => {
  it('should be able to authenticate', () => {
    const user_id = 1;
    const expectedAction = {
      type: actions.LOG_IN,
      payload: {}
    };
    expect(actions.logIn(user_id)).to.deep.equal(expectedAction);
  });
  
  it('should be able to log out', () => {
    const expectedAction = {
      type: actions.LOG_OUT,
      payload: {}
    };
    expect(actions.logOut()).to.deep.equal(expectedAction);
  });
  
  it('should be able to order an item', () => {
    const user_id = 1;
    const item = {
      name: 'Big item',
      type: 1,
      state: 0
    };
    const expectedAction = {
      type: actions.ORDER_ITEM,
      payload: {}
    };
    expect(actions.orderItem(user_id, item)).to.deep.equal(expectedAction);
  });
  
  it('should be able to fetch all items', () => {
    const expectedAction = {
      type: actions.FETCH_ALL_ITEMS,
      payload: {}
    };
    expect(actions.fetchAllItems()).to.deep.equal(expectedAction);
  });
  
  it('should be able to fetch own items', () => {
    const user_id = 1;
    const expectedAction = {
      type: actions.FETCH_OWN_ITEMS,
      payload: {}
    };
    expect(actions.fetchOwnItems(user_id)).to.deep.equal(expectedAction);
  });
  
  it('should be able to approve an item', () => {
    const user_id = 1;
    const item = {
      id: 1,
      state: 2
    };
    const expectedAction = {
      type: actions.APPROVE_ITEM,
      payload: {}
    };
    expect(actions.approveItem(user_id, item)).to.deep.equal(expectedAction);
  });
  
  
  it('should be able to fetch an item', () => {
    const user_id = 1;
    const item_id = 1;
    const expectedAction = {
      type: actions.FETCH_ITEM,
      payload: {}
    };
    expect(actions.fetchItem(user_id, item_id)).to.deep.equal(expectedAction);
  });
});