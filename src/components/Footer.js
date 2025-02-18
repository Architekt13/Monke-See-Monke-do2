// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="sponsor-logos">
          <img src="/images/sponsor1.png" alt="Sponsor 1" className="sponsor-logo" />
          <img src="/images/sponsor2.png" alt="Sponsor 2" className="sponsor-logo" />
          <img src="/images/FIRST-RGB.png" alt="Event" className="sponsor-logo" />
          {/* Add more logos as needed */}
        </div>
      </div>
      <div className="footer-bottom">
        <div className="logo-symbol">
          <img src="/images/SPADE-VECTOR-REVERSE-CROP.png" alt="Logo Symbol" />
        </div>
        <div className="copyright">
          <p>&copy; 2024 Ace Robotics. All rights reserved.</p>
        </div>
        <div className="footer-links">
          <a href="#about">About Us</a>
          <a href="#robot">Robot</a>
          <a href="#documentation">Documentation</a>
          <a href="#outreach">Outreach</a>
          <a href="#season-highlights">Season</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
