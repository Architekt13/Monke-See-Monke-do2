import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Sponsors.css';
import logo from './SPADELOGO.jpg';

function Sponsors() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [opacity, setOpacity] = useState(1);
  const [shrinkNav, setShrinkNav] = useState(false);

  useEffect(() => {
    const targetDate = new Date('2025-07-01T00:00:00');
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const opacityValue = 1 - scrollPosition / 600;
      setOpacity(Math.max(opacityValue, 0));

      if (scrollPosition > 150) {
        setShrinkNav(true);
      } else {
        setShrinkNav(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <div className={`navbar ${shrinkNav ? 'shrink' : ''}`}>
        <div className="nav-links left">
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
        </div>
        <Link to="/" className="logo">
          <img src={logo} alt="ACE Robotics Logo" />
        </Link>
        <div className="nav-links right">
          <Link to="/robot">Our Robot</Link>
          <Link to="/sponsors">Sponsors</Link>
        </div>
      </div>

      <div className="banner fade-in-up" style={{ opacity }}>
        <h1>Welcome to the ACE Blog</h1>
        <h2>The next generation of innovators</h2>
      </div>

      <div className="countdown-section fade-in-up">
        <h2>Countdown to Regionals:</h2>
        <div className="countdown-timer">
          <p>
            {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
          </p>
        </div>
      </div>

      <div className="section fade-in-up" id="blog">
        <h2>Our Blog</h2>
        <p>Stay updated with the latest news and updates from our team.</p>
      </div>

      <div className="section fade-in-up" id="robot">
        <h2>Our Robot</h2>
        <p>Learn more about the technology and innovation behind our robot.</p>
      </div>

      <div className="section fade-in-up" id="sponsors">
        <h2>Our Sponsors</h2>
        <p>We are grateful for the support from our sponsors.</p>
        <Link to="/sponsors" className="sponsors-link">Meet Our Sponsors</Link>
      </div>
    </div>
  );
}

export default Sponsors;