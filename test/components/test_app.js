// Mocking window and document object:
require('./dom-mock')('<html><body></body></html>');

var jsdom = require('mocha-jsdom');
var assert = require('chai').assert;
var React = require('react');
var TestUtils = require('react-addons-test-utils');

describe('Testing App Component', function() {
    jsdom({ skipWindowCheck: true });

    it('should contain text: Cowabunga!', function() {
        var App = require('../../src/components/app.jsx').default;

        var myDiv = TestUtils.renderIntoDocument(
            <App />
        );

        var headerText = TestUtils.findRenderedDOMComponentWithTag(
            myDiv, 'h1');

        assert.equal(headerText.textContent, 'Cowabunga!');
    });
});