// Mocking window and document object:
require('./dom-mock')('<html><body></body></html>');

import jsdom from 'mocha-jsdom';
import { assert } from 'chai';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

describe('Testing NavBar Component', function() {
  jsdom({ skipWindowCheck: true });
    
  describe('Logged in', function(){
    
    before('Render component', function(){
      var NavBar = require('../../src/components/navbar.jsx').TestNavBar;
      this.navbar = NavBar;
      this.rendered = TestUtils.renderIntoDocument(
        <NavBar loggedIn />
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
    
    it('should contain three links when logged in', function() {
      var links = TestUtils.scryRenderedDOMComponentsWithTag(this.rendered, 'a');
      assert.isNotNull(links[1]);
      assert.equal('Info', links[1].textContent.trim());
      assert.isNotNull(links[2]);
      assert.equal('Profile', links[2].textContent.trim());
      assert.isNotNull(links[3]);
      assert.equal('Logout', links[3].textContent.trim());
    });
    
    it('should contain three icons when logged in', function() {
      var items = TestUtils.scryRenderedDOMComponentsWithClass(this.rendered, 'glyphicon');
      assert.lengthOf(items, 3);
    });
  });
    
  describe('Logged out', function(){
     
    before('Render component', function(){
      var NavBar = require('../../src/components/navbar.jsx').TestNavBar;
      this.navbar = NavBar;
      this.rendered = TestUtils.renderIntoDocument(
        <NavBar />
      );
    });
    
    it('should contain one link when logged out', function() {
      var links = TestUtils.scryRenderedDOMComponentsWithTag(this.rendered, 'a');
      assert.isNotNull(links[1]);
      assert.equal('Login', links[1].textContent.trim());
    });
    
    it('should contain one dropdown menu when logged out', function() {
      var items = TestUtils.scryRenderedDOMComponentsWithClass(this.rendered, 'dropdown');
      assert.lengthOf(items, 1);
    });
    
    describe('Dropdown tests', function(){
      
      before('Render', function(){
        var NavBar = require('../../src/components/navbar.jsx').TestNavBar;
        this.navbar = NavBar;
        this.rendered = TestUtils.renderIntoDocument(
          <NavBar />
        );
        this.links = TestUtils.scryRenderedDOMComponentsWithTag(this.rendered, 'a');
      });
      
      it('should have a dropdown with two links', function() {
        var items = TestUtils.scryRenderedDOMComponentsWithClass(this.rendered, 'dropdown');
        assert.isAbove(items.length, 0);
        assert.lengthOf(this.links, 4);
      });
      
      it('should have a login for User and Approver', function() {
        assert.equal('User', this.links[2].textContent.trim());
        assert.equal('Approver', this.links[3].textContent.trim());
      });
      
    });
  }); 
});