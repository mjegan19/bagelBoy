import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Navbar, Nav, Container } from 'react-bootstrap';

import Bagel from '../../assets/images/header/bagel.png'

const StyledNavbar = styled(Navbar)`
    background-color: var(--dark-background);
    color: var(--light-font);
    
    .icon {
    transition: 1s ease-in-out;
    
    &:hover {
      transform: rotate(90deg);
    }
  } 
  
  .logo {
    margin-right: 2rem;
    font-family: var(--logo);
    font-size: 1.5rem;
  }

  Nav.Link {
    color: var(--light-white);
    text-decoration: none;
    margin: 0 0.6rem 0;

    &:hover {
      color: var(--light-white);\
    }
  }
  `;

const Header = () => {

  return (
    <StyledNavbar collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/" className="icon">
          <img
            alt="Bagel Icon"
            src={Bagel}
            width="40"
            height="40"
            className="d-inline-block align-top"
            />{' '}
        </Navbar.Brand>
        <Navbar.Brand href="/" className="logo">Bagel Boy</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
              <Nav.Link as={Link} to="/bagels/stores">Stores</Nav.Link>
              <Nav.Link as={Link} to="/bagels/stores/add">Add a Store</Nav.Link>
              <Nav.Link as={Link} to="/about">About Us</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/register" variant="outline-info">Create Account</Nav.Link>{' '}
            <Nav.Link as={Link} to="/signin" variant="warning">Sign In</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
}

export default Header;