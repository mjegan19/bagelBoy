import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/layout/Layout';
import Register from './pages/Auth/Register';
import SignIn from './pages/Auth/SignIn';
import StoreDetails from './pages/Stores/StoreDetails';
import AddStore from './pages/Stores/AddStore';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="bagels">
          <Route path="stores" element={<StoreDetails />} />
          <Route path="add" element={<AddStore />} />
        </Route>
        <Route path="register" element={<Register />} />
        <Route path="signin" element={<SignIn />} />        
      </Route>
    </Routes>
  );
}

export default App;
