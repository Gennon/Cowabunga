// Mocking window and document object:
require('./dom-mock')('<html><body></body></html>');

var jsdom = require('mocha-jsdom');
var assert = require('chai').assert;
var React = require('react');
var TestUtils = require('react-addons-test-utils');
var IntlProvider = require('react-intl').IntlProvider;

describe('Testing Greeting Component', function() {
  jsdom({ skipWindowCheck: true });
  
  const enMessages = {
    'greeting.greeting': 'Hello there!',
    'greeting.button': 'Learn more'
  };
  
  before('Render component', function(){
    var Greeting = require('../../src/components/greeting.jsx').default;
    this.greeting = Greeting;
    this.rendered = TestUtils.renderIntoDocument(
      <IntlProvider locale="en" messages={enMessages}>
        <Greeting />
      </IntlProvider>
    );
  });

  it('should contain header text: Cowabunga!', function() {
    var item = TestUtils.findRenderedDOMComponentWithTag(this.rendered, 'h1');
    assert.equal(item.textContent, 'Cowabunga!');
  });
  
  it('should have translated greeting', function() {
    var items = TestUtils.scryRenderedDOMComponentsWithTag(this.rendered, 'p');
    assert.equal(items[0].textContent, enMessages['greeting.greeting']);
  });
  
  it('should have translated button text', function() {
    var item = TestUtils.findRenderedDOMComponentWithTag(this.rendered, 'button');
    assert.equal(item.textContent, enMessages['greeting.button']);
  });
});