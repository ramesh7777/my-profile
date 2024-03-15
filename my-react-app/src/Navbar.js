// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Navbar({ isLoggedIn }) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">Contact</Link>
        </li>
        {isLoggedIn ? (
          <li><Link to="/dashboard">Dashboard</Link></li>
        ) : (
          <li><Link to="/login">Login</Link></li>
        )}
        <li className="nav-item">
          <Link to="/register" className="nav-link">Register</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
