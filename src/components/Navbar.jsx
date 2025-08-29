import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';  // keep CSS separate
import Logo from '../assets/logo.png'; // adjust path if needed

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={Logo} alt="NeuroFleet Logo" className="logo" />
        <span className="brand">NeuroFleetX</span>
      </div>

      <ul className="navbar-center">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
         <div className="navbar-right">
        <Link to="/login" className="login-btn">Login</Link>
      </div>
      </ul>
    </nav>
  );
};

export default Navbar;