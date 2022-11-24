import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Layout from './components/layout/Layout';
import AboutUs from './pages/About';
import Register from './pages/Auth/Register';
import SignIn from './pages/Auth/SignIn';
import StoreDetails from './pages/Stores/StoreList';
import AddStore from './pages/Stores/AddStore';
import StoreDetailed from './pages/Stores/StoreDetailed';
import AddRating from './pages/Stores/AddRating';
import NotFound from './pages/NotFound';
import EditRating from './pages/Stores/EditRating';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="bagels">
          <Route path="stores" element={<StoreDetails />} />
          <Route path="stores/:id" element={<StoreDetailed />} />
          <Route path="stores/add" element={<AddStore />} />
        </Route>
        <Route path="reviews/:id" element={<AddRating />} />
        <Route path="reviews/edit/:id" element={<EditRating />} />
        <Route path="register" element={<Register />} />
        <Route path="signin" element={<SignIn />} />

        {/* ERROR PAGES */}
        <Route path="*" element={<NotFound />} /> 
      </Route>
    </Routes>
  );
}

export default App;
