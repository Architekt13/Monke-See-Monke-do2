import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Robot.css';
import logo from './SPADELOGO.jpg';
import robotImage from './images/PROTO-1-ROBOT-BGR-UP.png';
import regImage23 from './images/RegRobot23.JPG';
import APOC24 from './images/APOC24.jpg';
import placeholderImage from './images/member1.jpg'; // Add a placeholder image
import WaveBackground from './components/WaveBackground'; // Import the WaveBackground component

function Robot() {
  const [opacity, setOpacity] = useState(1);
  const [shrinkNav, setShrinkNav] = useState(false);
  const location = useLocation();
  let lastScrollPos = 0;

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const opacityValue = 1 - scrollPosition / 600; // Adjust the fade effect based on scroll
      setOpacity(Math.max(opacityValue, 0)); // Prevent opacity from going below 0

      // Shrink Navbar Logic
      if (scrollPosition > 150) {
        setShrinkNav(true);  // Shrink navbar after scrolling 150px
      } else {
        setShrinkNav(false); // Restore navbar if less than 150px
      }
      lastScrollPos = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isLinkActive = (path) => {
    return location.pathname === path;
  };

  const galleryItems = [
    { id: 1, title: "'23 Regionals", image: regImage23, tag: 'Regionals' },
    { id: 2, title: '2023 Nationals', image: robotImage, tag: 'Nationals' },
    { id: 3, title: "'24 APOC", image: APOC24, tag: 'APOC' },
    { id: 4, title: "'24 Regionals", image: robotImage, tag: 'Regionals' },
    { id: 5, title: "'24 Nationals", image: robotImage, tag: 'Nationals' },
    { id: 6, title: 'The Future', image: robotImage, tag: 'Future' },
  ];

  const additionalGalleryItems = [
    { id: 7, image: placeholderImage },
    { id: 8, image: placeholderImage },
    { id: 9,  image: placeholderImage },
    { id: 10,  image: placeholderImage },
    { id: 11, image: placeholderImage },
    { id: 12,  image: placeholderImage },
    { id: 13,  image: placeholderImage }
  ];

  return (
    <div>
      <div className={`navbar ${shrinkNav ? 'shrink' : ''}`}>
        <div className="nav-links left">
          <Link to="/" className={isLinkActive('/') ? 'active' : ''}>Home</Link>
          <Link to="/robot" className={isLinkActive('/robot') ? 'active' : ''}>Our Robot</Link>
        </div>
        <Link to="/" className="logo">
          <img src={logo} alt="ACE Robotics Logo" />
        </Link>
        <div className="nav-links right">
          <Link to="/blog" className={isLinkActive('/blog') ? 'active' : ''}>Blog</Link>
          <Link to="/sponsors" className={isLinkActive('/sponsors') ? 'active' : ''}>Sponsors</Link>
        </div>
      </div>

      <div className="banner fade-in-up" style={{ opacity }}>
        <WaveBackground />
        <h1>Our Robot</h1>
        <h2>Innovation in Motion</h2>
        <img src={robotImage} alt="Our Robot" className="hero-image" />
      </div>

      <div className="content-wrapper">
        <div className="section fade-in-up">
          <h2>ACE Robots Across The Years</h2>
        </div>

        <div className="gallery">
          {galleryItems.map(item => (
            <div key={item.id} className="gallery-item fade-in-up">
              <h2>{item.title}</h2>
              <img src={item.image} alt={item.title} className="gallery-image" />
            </div>
          ))}
        </div>

        <div className="section fade-in-up">
          <h2>Gallery</h2>
          <div className="gallery">
            {additionalGalleryItems.map(item => (
              <div key={item.id} className="gallery-item fade-in-up">
                <h2>{item.title}</h2>
                <img src={item.image} alt={item.title} className="gallery-image" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Robot;