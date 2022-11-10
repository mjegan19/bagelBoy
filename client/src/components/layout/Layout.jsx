import React from 'react';
import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import Header from './Header';

const Layout = () => {
  return (
    <div className="app">
      <Header />
      <Container>
        <Outlet />
      </Container>
    </div>
  )
}

export default Layout;