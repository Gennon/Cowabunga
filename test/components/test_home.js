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
    var Home = require('../../src/components/home.jsx').default;
    this.home = Home;
    this.rendered = TestUtils.renderIntoDocument(
      <Home />
    );
  });

  it('should contain a panel', function() {
    var item = TestUtils.scryRenderedDOMComponentsWithClass(this.rendered, 'panel');
    assert.equal(item.length, 1);
  });
  
  it('should contain a panel title', function() {
    var item = TestUtils.scryRenderedDOMComponentsWithClass(this.rendered, 'panel-title');
    assert.equal(item.length, 1);
    assert.equal(item[0].textContent, 'News');
  });
  
  it('should contain some text in the panel body', function() {
    var item = TestUtils.scryRenderedDOMComponentsWithClass(this.rendered, 'panel-body');
    assert.equal(item.length, 1);
    assert.isAbove(item[0].textContent.length, 0);
  });
  
});