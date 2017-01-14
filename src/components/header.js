import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';

class Header extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Pantry</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <LinkContainer to="/">
              <NavItem eventKey={1}>Home</NavItem>
            </LinkContainer>
            <LinkContainer to="/diary">
              <NavItem eventKey={2}>My Log</NavItem>
            </LinkContainer>
            <LinkContainer to="/signin">
              <NavItem eventKey={3}>Sign In</NavItem>
            </LinkContainer>
            <LinkContainer to="/signout">
              <NavItem eventKey={4}>Sign Out</NavItem>
            </LinkContainer>
            <LinkContainer to="/signout">
              <NavItem eventKey={5}>Sign Up</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Header;
