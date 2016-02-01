import React, {Component} from 'react';
import { Glyphicon, Nav, Navbar, NavItem, NavDropdown} from 'react-bootstrap';
 
class NavBar extends Component {
    
  renderLoggedIn(){
    return (
      <Nav pullRight>
        <NavItem eventKey={1} href="#"><Glyphicon glyph="bell" /> Info</NavItem>
        <NavItem eventKey={2} href="#"><Glyphicon glyph="user" /> Profile</NavItem>
        <NavItem eventKey={3} href="#"><Glyphicon glyph="log-out" /> Logout</NavItem>
      </Nav>
    );
  }
  
  renderLoggedOut(){
    return (
      <Nav pullRight>
        <NavDropdown eventKey={1} title="Login" id="collapsible-navbar-dropdown">
          <NavItem eventKey={1.1} href="#">User</NavItem>
          <NavItem eventKey={1.2} href="#">Approver</NavItem>
        </NavDropdown>
      </Nav>
    );  
  }
  
  
  render() {
    return (
      <Navbar inverse fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Cowabunga</a>
          </Navbar.Brand>
        </Navbar.Header>
        {this.props.loggedIn ? this.renderLoggedIn() : this.renderLoggedOut()}  
      </Navbar>
    );
  }
}

export default NavBar;