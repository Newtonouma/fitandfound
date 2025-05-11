import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from '../../context/cartcontext';
import NavBar from '../../components/navbar/navbar';
import Shop from '../shop/shop';
import Product from '../product/product';
import Cart from '../cart/cart';
import Blog from '../blog/blog';
import Home from '../home/home'
import Ourservices from '../ourservices/ourservices';
import Footer from '../../components/Footer/Footer';
import ContactUs from '../contactUs/contactus';


function Store () {
  return (
    <CartProvider>
      <Router>
        <NavBar />
        <Routes>
        <Route path="/" element={<Home />} />
        
          <Route path="/shop" element={<Shop />} />
          <Route path="/ourservices" element={<Ourservices />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </Router>
      <Footer />
    </CartProvider>
  );
}

export default Store;