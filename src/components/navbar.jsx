import React, {Component} from 'react';
import { Glyphicon, Nav, Navbar, NavItem} from 'react-bootstrap';
 
class NavBar extends Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Cowabunga</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav pullRight>
                    <NavItem eventKey={1} href="#"><Glyphicon glyph="bell" /> Info</NavItem>
                    <NavItem eventKey={2} href="#"><Glyphicon glyph="user" /> Profile</NavItem>
                </Nav>
            </Navbar>
        );
    }
}

export default NavBar;