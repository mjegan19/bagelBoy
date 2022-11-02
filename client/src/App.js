import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/layout/Layout.jsx';
import Register from './pages/Auth/Register.jsx';
import SignIn from './pages/Auth/SignIn.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="register" element={<Register />} />
        <Route path="signin" element={<SignIn />} />        
      </Route>
    </Routes>
  );
}

export default App;
