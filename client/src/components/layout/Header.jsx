import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Navbar, Nav, Container } from 'react-bootstrap';

// import AuthButton from '../common/AuthButton';

import Bagel from '../../assets/images/header/bagel.png'


const Header = () => {

  const LogoAnimate = styled(Navbar.Brand)`
    transition: 1s ease-in-out;

    &:hover {
      transform: rotate(90deg);
    }
  `;

  const Logo = styled(Navbar.Brand)`
    margin-right: 2rem;
    font-family: var(--logo);
    font-size: 1.5rem;
  `;

  const StyledNavbar = styled(Navbar)`
    background-color: var(--dark-background);
    color: var(--light-font);
  `;

  const StyledLink = styled(Nav.Link)`
    color: var(--light-white);
    text-decoration: none;
    margin: 0 0.6rem 0;

    &:hover {
      colour: var(--light-white);
      /* text-decoration: underline; */
    }
  `;

  return (
    <StyledNavbar collapseOnSelect expand="lg" variant="dark">
      <Container>
        <LogoAnimate href="/">
          <img
            alt="Bagel Icon"
            src={Bagel}
            width="40"
            height="40"
            className="d-inline-block align-top"
            />{' '}
        </LogoAnimate>
        <Logo href="/">Bagel Boy</Logo>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
              <StyledLink as={Link} to="/bagels/stores">Stores</StyledLink>
              <StyledLink as={Link} to="/bagels/stores/add">Add a Store</StyledLink>
              <StyledLink as={Link} to="/about">About Us</StyledLink>
          </Nav>
          <Nav>
            <StyledLink as={Link} to="/register" variant="outline-info">Create Account</StyledLink>{' '}
            <StyledLink as={Link} to="/signin" variant="warning">Sign In</StyledLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
}

export default Header;