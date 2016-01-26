// Mocking window and document object:
require('./dom-mock')('<html><body></body></html>');

var jsdom = require('mocha-jsdom');
var assert = require('chai').assert;
var React = require('react');
var TestUtils = require('react-addons-test-utils');

describe('Testing App Component', function() {
    jsdom({ skipWindowCheck: true });
    
    before('Render component', function(){
        var App = require('../../src/components/app.jsx').default;
        this.app = App;
        this.rendered = TestUtils.renderIntoDocument(
            <App />
        );
    });

    it('should contain text: Cowabunga!', function() {
        var headerText = TestUtils.findRenderedDOMComponentWithTag(this.rendered, 'h1');
        assert.equal(headerText.textContent, 'Cowabunga!');
    });
});