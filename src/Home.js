import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Home.css';
import logo from './SPADELOGO.jpg';
import blogImage from './images/blog-image.jpg';
import robotImage from './images/PROTO-1-ROBOT-BGR-UP.png';
import sponsorsImage from './images/FIRST-RGB.png';
import WaveBackground from './components/WaveBackground';

function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [opacity, setOpacity] = useState(1);
  const [shrinkNav, setShrinkNav] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

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
      const scrollY = window.scrollY;
      const opacityValue = 1 - scrollY / 600;
      setOpacity(Math.max(opacityValue, 0));
      
      // Smooth navbar transition based on scroll direction and speed
      if (scrollY > lastScrollY) { // Scrolling down
        if (scrollY > 150) {
          setShrinkNav(true);
        }
      } else { // Scrolling up
        if (scrollY < 100) {
          setShrinkNav(false);
        }
      }
      
      setLastScrollY(scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Function to determine if a link is active
  const isLinkActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div>
      <div className={`navbar ${shrinkNav ? 'shrink' : ''}`}>
        <div className="nav-links left">
          <Link to="/" className={isLinkActive('/') ? 'active' : ''}>
            Home
          </Link>
          <Link to="/robot" className={isLinkActive('/robot') ? 'active' : ''}>
            Our Robot
          </Link>
        </div>
        <Link to="/" className="logo">
          <img src={logo} alt="ACE Robotics Logo" />
        </Link>
        <div className="nav-links right">
          <Link to="/blog" className={isLinkActive('/blog') ? 'active' : ''}>
            Blog
          </Link>
          <Link to="/sponsors" className={isLinkActive('/sponsors') ? 'active' : ''}>
            Sponsors
          </Link>
        </div>
      </div>

      <div className="banner fade-in-up" style={{ opacity }}>
        <WaveBackground />
        <h1>ACE Robotics</h1>
        <h2>Engineering Tomorrow's Champions</h2>
        <div className="scroll-indicator" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
          <div className="arrow"></div>
          <div className="arrow"></div>
        </div>
      </div>

      <div className="content-wrapper">
        <div className="countdown-section fade-in-up">
          <h2>Road to Regionals</h2>
          <div className="countdown-grid">
            <div className="countdown-box">
              <div className="countdown-value">{timeLeft.days}</div>
              <div className="countdown-label">Days</div>
            </div>
            <div className="countdown-box">
              <div className="countdown-value">{timeLeft.hours}</div>
              <div className="countdown-label">Hours</div>
            </div>
            <div className="countdown-box">
              <div className="countdown-value">{timeLeft.minutes}</div>
              <div className="countdown-label">Minutes</div>
            </div>
            <div className="countdown-box">
              <div className="countdown-value">{timeLeft.seconds}</div>
              <div className="countdown-label">Seconds</div>
            </div>
          </div>
        </div>

        <div className="section fade-in-up" id="robot">
          <h2>Meet Our Robot</h2>
          <p>Experience the culmination of innovation, engineering, and teamwork. Our robot represents months of dedication and cutting-edge design.</p>
          <Link to="/robot">
            <img src={robotImage} alt="Our Robot" className="section-image" />
          </Link>
        </div>

        <div className="section fade-in-up" id="blog">
          <h2>Latest Updates</h2>
          <p>Follow our journey through competitions, workshops, and engineering challenges. Get insights into our team's progress and innovations.</p>
          <Link to="/blog">
            <img src={blogImage} alt="Team Blog" className="section-image" />
          </Link>
        </div>

        <div className="section fade-in-up" id="sponsors">
          <h2>Our Partners</h2>
          <p>Success in robotics requires strong partnerships. Meet the organizations that help make our innovations possible.</p>
          <Link to="/sponsors">
            <img src={sponsorsImage} alt="Our Sponsors" className="section-image" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
