import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../../context/cartcontext';
import './navbar.css';

const NavBar = () => {
  const { totalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='navbar'>
      <div className='logo'>
        <Link to='/'>Fit&Found</Link>
      </div>

      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <Link to='/' onClick={toggleMenu}>Home</Link>
        <Link to='/ourservices' onClick={toggleMenu}>Our Services</Link>
        <Link to='/shop' onClick={toggleMenu}>Shop</Link>
        <Link to='/contactus' onClick={toggleMenu}>Contact Us</Link>
        <Link to='/blog' onClick={toggleMenu}>Blog</Link>
        <Link to="/cart" onClick={toggleMenu} className="cart-link">
        <FaShoppingCart className="cart-icon" />
          <span className="cart-count">({totalItems})</span>
        </Link>
        <button className='icon-button close-btn' onClick={toggleMenu}>
          <FaTimes />
        </button>
      </div>

      <button className='icon-button menu-btn' onClick={toggleMenu}>
        <FaBars />
      </button>
    </nav>
  );
};

export default NavBar;
