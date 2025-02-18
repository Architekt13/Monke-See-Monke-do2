// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Ace Robotics #23335</Link>
      </div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/robot">Robot</Link></li>
          <li><Link to="/documentation">Documentation</Link></li>
          <li><Link to="/outreach">Outreach</Link></li>
          <li><Link to="/season">Season</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
