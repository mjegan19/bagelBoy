import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

import AuthButton from '../common/AuthButton';

import Bagel from '../../assets/images/header/bagel.png'


const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt="Bagel Icon"
            src={Bagel}
            width="40"
            height="40"
            className="d-inline-block align-top"
            />{' '}
          BagelBoy
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
              <Nav.Link href="#">Link</Nav.Link>
              <Nav.Link href="#">Link</Nav.Link>
              <Nav.Link href="#">Link</Nav.Link>
          </Nav>
          <Nav>
            <AuthButton sitePath="/register" variant="outline-info">Create Account</AuthButton>{' '}
            <AuthButton sitePath="/signin" variant="warning">Sign In</AuthButton>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;