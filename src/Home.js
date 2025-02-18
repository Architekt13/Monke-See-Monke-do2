import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Update the path to your CSS file
import logo from './SPADELOGO.jpg'; // Update the path to your logo
import blogImage from './images/blog-image.jpg'; // Add the path to your blog image
import robotImage from './images/PROTO-1-ROBOT-BGR-UP.png'; // Add the path to your robot image
import sponsorsImage from './images/FIRST-RGB.png'; // Add the path to your sponsors image

function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [opacity, setOpacity] = useState(1);
  const [shrinkNav, setShrinkNav] = useState(false);
  let lastScrollPos = 0;

  // Countdown Timer Logic
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
      const opacityValue = 1 - scrollPosition / 600; // Adjust the fade effect based on scroll
      setOpacity(Math.max(opacityValue, 0)); // Prevent opacity from going below 0
      console.log(scrollPosition);
      // Shrink Navbar Logic
      if (scrollPosition > 150) {
        setShrinkNav(true);  // Shrink navbar after scrolling 10px
      } else {
        setShrinkNav(false); // Restore navbar if less than 10px
      }
      lastScrollPos = window.scrollY;
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
        <div className="countdown-timer curved-box">
          <p>
            {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
          </p>
        </div>
      </div>

      <div className="section fade-in-up" id="blog">
        <h2>Our Blog</h2>
        <p>Stay updated with the latest news and updates from our team.</p>
        <Link to="/blog">
          <img src={blogImage} alt="Blog" className="section-image" />
        </Link>
      </div>

      <div className="section fade-in-up" id="robot">
        <h2>Our Robot</h2>
        <p>Learn more about the technology and innovation behind our robot.</p>
        <Link to="/robot">
          <img src={robotImage} alt="Robot" className="section-image" />
        </Link>
      </div>

      <div className="section fade-in-up" id="sponsors">
        <h2>Our Sponsors</h2>
        <p>We are grateful for the support from our sponsors.</p>
        <Link to="/sponsors">
          <img src={sponsorsImage} alt="Sponsors" className="section-image" />
        </Link>
      </div>
    </div>
  );
}

export default Home;
