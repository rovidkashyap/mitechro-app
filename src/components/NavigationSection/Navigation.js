import React, { useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types';
import './_navigation.css';
import defaultLogo from '../../assets/img/logo.png';

const Navigation = ({
  openContactForm,
  logoSrc = defaultLogo,
  logoAlt = "Company Logo",
  logoWidth = 150,
  logoHeight = 65,
  logoClassName = "nav-logo"
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);  // for managing Menu state

  const toggleMenu = useCallback(() => {  // useCallback for memoizing the toggle function
    setIsMenuOpen(prev => !prev);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {     // for handling click outside functionality
    const handleClickOutside = (event) => {
      const navLinks = document.querySelector('.nav-links');
      const hamburger = document.querySelector('.hamburger');

      if (isMenuOpen && 
        navLinks && 
        hamburger && 
        !navLinks.contains(event.target) && 
        !hamburger.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside); // Proper event cleanup
    }
  }, [isMenuOpen]);

  return (
    <nav className="navbar">
      <div class="nav-container">
        <a href="/" className="logo">
                <img 
                  src={logoSrc || "/api/placeholder/120/40"}
                  alt={logoAlt}
                  width={logoWidth}
                  height={logoHeight}
                  className={logoClassName}
                  />
            </a>
            
            <button 
                className={`hamburger ${isMenuOpen ? 'active' : ''}`}
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
            
            <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#pricing">Pricing</a>
                <a href="#contact">Contact</a>
                <button className="quote-btn" onClick={openContactForm}>Get A Quote</button>
            </div>
      </div>        
    </nav>
  );
};

Navigation.propTypes = {
  logoSrc: PropTypes.string,
  logoAlt: PropTypes.string,
  logoWidth: PropTypes.number,
  logoHeight: PropTypes.number,
  logoClassName: PropTypes.string
};

export default Navigation;

