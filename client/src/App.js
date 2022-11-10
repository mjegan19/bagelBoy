import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/layout/Layout';
import AboutUs from './pages/About';
import Register from './pages/Auth/Register';
import SignIn from './pages/Auth/SignIn';
import StoreDetails from './pages/Stores/StoreList';
import AddStore from './pages/Stores/AddStore';
import StoreDetailed from './pages/Stores/StoreDetailed';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="about" element={<AboutUs />} />
        <Route path="bagels">
          <Route path="stores" element={<StoreDetails />} />
          <Route path="stores/:id" element={<StoreDetailed />} />
          <Route path="stores/add" element={<AddStore />} />
        </Route>
        <Route path="register" element={<Register />} />
        <Route path="signin" element={<SignIn />} />   
      </Route>
    </Routes>
  );
}

export default App;
