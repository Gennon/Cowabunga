// Mocking window and document object:
require('./dom-mock')('<html><body></body></html>');

import jsdom from 'mocha-jsdom';
import chai, { assert } from 'chai';
import spies from 'chai-spies';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

chai.use(spies);

var should = chai.should();

describe('Testing ItemsList Component', function() {
  jsdom({ skipWindowCheck: true });
  
  before('Render component', function(){
    var ItemsList = require('../../src/components/items_list.jsx').default;
    this.list = ItemsList;
    this.spy = chai.spy();
    this.items = [
      {_id: 1, title: 'Test1', created_by:1, state:1},
      {_id: 2, title: 'Test2', created_by:1, state:2},
      {_id: 3, title: 'Test3', created_by:1, state:3},
      {_id: 4, title: 'Test4', created_by:1, state:4}
    ];
    this.rendered = TestUtils.renderIntoDocument(
        <ItemsList items={this.items} fetchAllItems={this.spy} />
    );
  });

  it('should contain a table', function() {
    var item = TestUtils.scryRenderedDOMComponentsWithTag(this.rendered, 'table');
    assert.isAbove(item.length, 0);
  });
  
  it('should contain a thead and a tbody tag', function() {
    var item = TestUtils.scryRenderedDOMComponentsWithTag(this.rendered, 'thead');
    assert.equal(item.length, 1);
    item = TestUtils.scryRenderedDOMComponentsWithTag(this.rendered, 'tbody');
    assert.equal(item.length, 1);
  });
  
  it('should contain 4 headers', function() {
    var item = TestUtils.scryRenderedDOMComponentsWithTag(this.rendered, 'th');
    assert.equal(item.length, 4);
    assert.equal(item[0].textContent, '#');
    assert.equal(item[1].textContent, 'Title');
    assert.equal(item[2].textContent, 'Created By');
    assert.equal(item[3].textContent, 'State');
  });
  
  it('should contain an item which is submitted', function() {
    var item = TestUtils.scryRenderedDOMComponentsWithTag(this.rendered, 'td');
    assert.equal(item.length, 16);
    assert.equal(item[0].textContent, this.items[0]._id);
    assert.equal(item[1].textContent, this.items[0].title);
    assert.equal(item[2].textContent, this.items[0].created_by);
    assert.equal(item[3].textContent, this.items[0].state);
  });
  
  it('should contain an item which is approved', function() {
    var item = TestUtils.scryRenderedDOMComponentsWithTag(this.rendered, 'td');
    assert.equal(item[4].textContent, this.items[1]._id);
    assert.equal(item[5].textContent, this.items[1].title);
    assert.equal(item[6].textContent, this.items[1].created_by);
    assert.equal(item[7].textContent, this.items[1].state);
  });
  
  it('should contain an item which is produced', function() {
    var item = TestUtils.scryRenderedDOMComponentsWithTag(this.rendered, 'td');
    assert.equal(item[8].textContent, this.items[2]._id);
    assert.equal(item[9].textContent, this.items[2].title);
    assert.equal(item[10].textContent, this.items[2].created_by);
    assert.equal(item[11].textContent, this.items[2].state);
  });
  
  it('should contain an item which is rejected', function() {
    var item = TestUtils.scryRenderedDOMComponentsWithTag(this.rendered, 'td');
    assert.equal(item[12].textContent, this.items[3]._id);
    assert.equal(item[13].textContent, this.items[3].title);
    assert.equal(item[14].textContent, this.items[3].created_by);
    assert.equal(item[15].textContent, this.items[3].state);
  });
  
  
  describe('Testing empty list', function(){
    before('Render component', function(){
      var ItemsList = require('../../src/components/items_list.jsx').default;
      this.list = ItemsList;
      this.spy = chai.spy();
      this.rendered = TestUtils.renderIntoDocument(
          <ItemsList fetchAllItems={this.spy} />
      );
    });
    
    it('should not contain a table', function() {
      var item = TestUtils.scryRenderedDOMComponentsWithTag(this.rendered, 'table');
      assert.equal(item.length, 0);
    });
    
    it('should contain a text explaining there are no items', function() {
      var item = TestUtils.scryRenderedDOMComponentsWithTag(this.rendered, 'h2');
      assert.equal(item.length, 1);
      assert.equal(item[0].textContent, 'No items to display');
    });
    
    it('should tried to use fetchAllItems', function() {
      this.spy.should.have.been.called.once;
    });
  });
  
  
  
});