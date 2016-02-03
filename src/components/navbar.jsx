import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { logIn, logOut } from '../actions/index';
import { Glyphicon, Nav, Navbar, NavItem, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router';
 
class NavBar extends Component {
  static contextTypes = {
    router: PropTypes.object
  };
    
  renderLoggedIn(){
    return (
      <Nav pullRight>
        <NavItem eventKey={1} href="#"><Glyphicon glyph="bell" /> Info</NavItem>
        <NavItem eventKey={2} href="#"><Glyphicon glyph="user" /> Profile</NavItem>
        <NavItem eventKey={3} onClick={(e) => this.logOut(e)}><Glyphicon glyph="log-out" /> Logout</NavItem>
      </Nav>
    );
  }
  
  renderLoggedOut(){
    return (
      <Nav pullRight>
        <NavDropdown eventKey={1} title="Login" id="collapsible-navbar-dropdown">
          <NavItem eventKey={1.1} onClick={() => this.loginUser()}>User</NavItem>
          <NavItem eventKey={1.2} onClick={() => this.loginApprover()}>Approver</NavItem>
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
  
  loginUser(){
    this.props.logIn({username: 'John', password: '12345'})
      .then(() => {
        this.context.router.push('/home');
      });
  }
  
  loginApprover(){
    this.props.logIn({username: 'Jane', password: '12345'})
      .then(() => {
        this.context.router.push('/home');
      });
  }
  
  logOut(e){
    e.preventDefault();
    this.props.logOut();
    this.context.router.push('/');
  }
  
}

function mapStateToProps(state) {
  return { loggedIn: state.user.current !== null && typeof(state.user.current) !== 'undefined' };
}

export default connect(mapStateToProps, { logIn, logOut })(NavBar);
export var TestNavBar = NavBar;