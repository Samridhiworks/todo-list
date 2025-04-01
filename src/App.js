import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Store/Store';
import './App.css';

import Swiperslider from './components/Swiper';
import Subbar from './components/Subbar';
import Navbar from './components/Navbar';
import Popup from './Pages/Popup';
import Shop from './components/Shop';
import Productcard from './components/Productcard';
import BestSellers from './components/BestSellers';
import Banners from './components/Banners';
import Brands from './components/Brands';
import Instagram from './components/Instagram';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Checkout from './components/Checkout'

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        {/* Common Components (Visible on All Pages) */}
        <Subbar />
        <Navbar />

        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Swiperslider />
                <Popup />
                <Shop />
                <Productcard />
                <BestSellers />
                <Banners />
                <Brands />
                <Instagram />
              </>
            }
          />

          {/* Cart Page */}
          <Route path="/cart" element={<Cart />} />
          <Route path='/checkout' element={<Checkout/>} />
        </Routes>

        {/* Footer (Visible on All Pages) */}
        <Footer />
      </Provider>
    </BrowserRouter>
  );
};

export default App;
