// Mocking window and document object:
require('./dom-mock')('<html><body></body></html>');

import jsdom from 'mocha-jsdom';
import { assert } from 'chai';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../../src/store/configure-store';
import TestUtils from 'react-addons-test-utils';

describe('Testing App Component', function() {
  jsdom({ skipWindowCheck: true });
  
  before('Render component', function(){
    var App = require('../../src/components/app.jsx').default;
    this.app = App;
    this.rendered = TestUtils.renderIntoDocument(
      <Provider store={configureStore()}>
        <App />
      </Provider>
    );
  });

  it('should contain nav tag from navbar', function() {
    var item = TestUtils.scryRenderedDOMComponentsWithTag(this.rendered, 'nav');
    assert.isAbove(item.length, 0);
  });
});