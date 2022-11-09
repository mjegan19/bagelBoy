import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

// import AuthButton from '../common/AuthButton';

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
              <Nav.Link as={Link} to="/bagels/stores">Stores</Nav.Link>
              <Nav.Link as={Link} to="/bagels/add">Add Store</Nav.Link>
              <Nav.Link as={Link} to="/about">About Us</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/register" variant="outline-info">Create Account</Nav.Link>{' '}
            <Nav.Link as={Link} to="/signin" variant="warning">Sign In</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;