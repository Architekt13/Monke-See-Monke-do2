import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [highlightStyle, setHighlightStyle] = useState({});
    const [isFading, setIsFading] = useState(false);
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const updateHighlight = (element) => {
        if (element) {
            const rect = element.getBoundingClientRect();
            const navbar = document.querySelector('.navbar-list');
            const navbarRect = navbar.getBoundingClientRect();
            const offset = rect.left - navbarRect.left;
            const width = rect.width;

            setHighlightStyle({
                left: offset + (width / 2) - 38,
                width: width,
                opacity: 1,
            });
            setIsFading(false);
        }
    };

    const handleNavClick = (element) => {
        setIsFading(true);
        setTimeout(() => {
            updateHighlight(element);
        }, 300);
    };

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        const documentHeight = document.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;

        // Show navbar when at the top or bottom of the page
        if (currentScrollPos <= 0 || currentScrollPos + windowHeight >= documentHeight) {
            setIsNavbarVisible(true);
        } else if (currentScrollPos > scrollPosition + 20) {
            setIsNavbarVisible(false);
        } else if (currentScrollPos < scrollPosition - 40) {
            setIsNavbarVisible(true);
        }

        setScrollPosition(currentScrollPos);
    };

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle('dark-mode');
    };

    useEffect(() => {
        const activeItem = document.querySelector('.navbar-item a.active');
        if (activeItem) {
            updateHighlight(activeItem);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPosition]);

    return (
        <div>
            <button 
                className="navbar-toggle" 
                onClick={() => setIsNavbarVisible(!isNavbarVisible)}
            >
                ☰
            </button>
            <nav className={`navbar ${isNavbarVisible ? 'visible' : 'hidden'}`}>
                <ul className="navbar-list">
                    <div 
                        className="navbar-highlight" 
                        style={{
                            ...highlightStyle, 
                            opacity: isFading ? 0 : highlightStyle.opacity
                        }}
                    ></div>
                    <li className="navbar-item">
                        <NavLink
                            to="/"
                            exact
                            activeClassName="active"
                            onClick={(e) => handleNavClick(e.currentTarget)}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="navbar-item">
                        <NavLink
                            to="/about"
                            activeClassName="active"
                            onClick={(e) => handleNavClick(e.currentTarget)}
                        >
                            About
                        </NavLink>
                    </li>
                    <li className="navbar-item">
                        <NavLink
                            to="/robots"
                            activeClassName="active"
                            onClick={(e) => handleNavClick(e.currentTarget)}
                        >
                            Robots
                        </NavLink>
                    </li>
                    <li className="navbar-item">
                        <NavLink
                            to="/resources"
                            activeClassName="active"
                            onClick={(e) => handleNavClick(e.currentTarget)}
                        >
                            Resources
                        </NavLink>
                    </li>
                    <li className="navbar-item">
                        <NavLink
                            to="/documentation"
                            activeClassName="active"
                            onClick={(e) => handleNavClick(e.currentTarget)}
                        >
                            Documentation
                        </NavLink>
                    </li>
                    <li className="navbar-item">
                        <NavLink
                            to="/contact"
                            activeClassName="active"
                            onClick={(e) => handleNavClick(e.currentTarget)}
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <button
                className="dark-mode-toggle"
                style={{
                    backgroundColor: isNavbarVisible ? '#3333337f' : '#3333337f',
                }}
                onClick={toggleDarkMode}
            >
                {isDarkMode ? '🌙' : '☀️'}
            </button>
        </div>
    );
};

export default Navbar;
