// Mocking window and document object:
require('./dom-mock')('<html><body></body></html>');

import jsdom from 'mocha-jsdom';
import chai, { assert } from 'chai';
import spies from 'chai-spies';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

chai.use(spies);

var should = chai.should();

describe('Testing Dashboard Component', function() {
  jsdom({ skipWindowCheck: true });
  
  before('Render component', function(){
    var Dashboard = require('../../src/components/dashboard.jsx').default;
    this.dashboard = Dashboard;
    this.clicked = function(){};
    this.spy = chai.spy(this.clicked);
    this.rendered = TestUtils.renderIntoDocument(
      <Dashboard handleSidebarClick={this.spy}/>
    );
  });

  it('should contain sidebar class', function() {
    var item = TestUtils.scryRenderedDOMComponentsWithClass(this.rendered, 'sidebar');
    assert.equal(item.length, 1);
  });
  
  it('should contain main class', function() {
    var item = TestUtils.scryRenderedDOMComponentsWithClass(this.rendered, 'main');
    assert.equal(item.length, 1);
  });
  
  it('should contain two sidebar items', function() {
    var item = TestUtils.scryRenderedDOMComponentsWithTag(this.rendered, 'li');
    assert.equal(item.length, 2);
    assert.equal(item[0].textContent, 'Home');
    assert.equal(item[1].textContent, 'Items');
  });
  
  it('Home sidebar link should be active', function() {
    var item = TestUtils.scryRenderedDOMComponentsWithTag(this.rendered, 'li');
    assert.equal(item.length, 2);
    assert.equal(item[0].className, 'active');
  });
  
  it('should handle sidebar clicks', function() {
    var item = TestUtils.scryRenderedDOMComponentsWithTag(this.rendered, 'a');
    assert.equal(item.length, 2);
    this.spy.should.not.have.been.called;
    TestUtils.Simulate.click(item[1]);
    this.spy.should.have.been.called.once;
  });
  
  it('should have a header text', function() {
    var item = TestUtils.findRenderedDOMComponentWithTag(this.rendered, 'h1');
    assert.equal(item.textContent, 'Home');
  });
  
});