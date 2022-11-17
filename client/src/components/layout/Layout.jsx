import React from 'react';
import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="app">
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </div>
  )
}

export default Layout;