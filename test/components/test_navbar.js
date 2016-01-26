// Mocking window and document object:
require('./dom-mock')('<html><body></body></html>');

var jsdom = require('mocha-jsdom');
var assert = require('chai').assert;
var React = require('react');
var TestUtils = require('react-addons-test-utils');

describe('Testing NavBar Component', function() {
    jsdom({ skipWindowCheck: true });
    
    before('Render component', function(){
        var NavBar = require('../../src/components/navbar.jsx').default;
        this.navbar = NavBar;
        this.rendered = TestUtils.renderIntoDocument(
            <NavBar />
        );
    });

    it('should contain nav element', function() {
        var nav = TestUtils.findRenderedDOMComponentWithTag(this.rendered, 'nav');
        assert.isNotNull(nav);
    });
    
    it('should contain a brand name', function() {
        var links = TestUtils.scryRenderedDOMComponentsWithTag(this.rendered, 'a');
        assert.isNotNull(links[0]);
        assert.equal('navbar-brand', links[0].className);
        assert.equal('Cowabunga', links[0].textContent);
    });
    
    it('should contain two links', function() {
        var links = TestUtils.scryRenderedDOMComponentsWithTag(this.rendered, 'a');
        assert.isNotNull(links[1]);
        assert.equal('Info', links[1].textContent.trim());
        assert.isNotNull(links[2]);
        assert.equal('Profile', links[2].textContent.trim());
    });
    
    it('should contain two icons', function() {
        var items = TestUtils.scryRenderedDOMComponentsWithClass(this.rendered, 'glyphicon');
        assert.lengthOf(items, 2);
    });
});