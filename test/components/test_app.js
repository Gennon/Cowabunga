// Mocking window and document object:
require('./dom-mock')('<html><body></body></html>');

var jsdom = require('mocha-jsdom');
var assert = require('chai').assert;
var React = require('react');
var TestUtils = require('react-addons-test-utils');
var IntlProvider = require('react-intl').IntlProvider;

describe('Testing App Component', function() {
    jsdom({ skipWindowCheck: true });
    
    const enMessages = {
        'app.greeting': 'Hello there!',
        'app.button': 'Learn more'
    };
    
    before('Render component', function(){
        var App = require('../../src/components/app.jsx').default;
        this.app = App;
        this.rendered = TestUtils.renderIntoDocument(
            <IntlProvider locale="en" messages={enMessages}>
                <App />
            </IntlProvider>
        );
    });

    it('should contain header text: Cowabunga!', function() {
        var item = TestUtils.findRenderedDOMComponentWithTag(this.rendered, 'h1');
        assert.equal(item.textContent, 'Cowabunga!');
    });
    
    it('should have translated greeting', function() {
        var items = TestUtils.scryRenderedDOMComponentsWithTag(this.rendered, 'p');
        assert.equal(items[0].textContent, enMessages['app.greeting']);
    });
    
    it('should have translated button text', function() {
        var item = TestUtils.findRenderedDOMComponentWithTag(this.rendered, 'button');
        assert.equal(item.textContent, enMessages['app.button']);
    });
});