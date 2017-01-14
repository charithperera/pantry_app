import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../actions';

class Header extends Component {
  signOutUser() {
    this.props.signoutUser();
  }

  renderLinks() {
    if (this.props.authenticated) {
      return [
        <LinkContainer to="/diary" key={1}>
          <NavItem eventKey={1}>My Log</NavItem>
        </LinkContainer>,
        <NavItem eventKey={2} key={2} onClick={this.signOutUser.bind(this)}>Sign Out</NavItem>
      ]
    }
    else {
      return [
        <LinkContainer to="/signin" key={3}>
          <NavItem eventKey={3}>Sign In</NavItem>
        </LinkContainer>,
        <LinkContainer to="/signup" key={4}>
          <NavItem eventKey={4}>Sign Up</NavItem>
        </LinkContainer>
      ]
    }
  }
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">PANTRY Calorie Counter</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            {this.renderLinks()}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  }
}

// export default connect(mapStateToProps)(Header);
export default connect(mapStateToProps, actions)(Header);
