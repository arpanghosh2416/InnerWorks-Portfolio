import React, { useState, useEffect } from "react";
import { Image1, Image2, Image3, Brandlogo } from "../../assets";
import { FaChevronLeft, FaChevronRight, FaBars, FaTimes } from "react-icons/fa";
import { Content } from "../../assets";
import "./Header.css";

const images = [Image1, Image2, Image3];

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  // Auto-slide every 3 seconds (Resets when state changes)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]); // Now resets when currentIndex changes

  // Previous Slide Function
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Next Slide Function
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Toggle Menu Function
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header id="header" className="header-container">
      {/* Navbar Section */}
      <nav className="navbar">
        <a href="#home">
          <img src={Brandlogo} alt="Brand" className="brand-logo" />
        </a>

        {/* Desktop Navigation */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#Services">Our Services</a></li>
          <li><a href="#Services">About Us</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>

        {/* Hamburger Button */}
        <button className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="mobile-nav !text-xs">
          <ul>
            <li><a href="#home" onClick={toggleMenu}>Home</a></li>
            <li><a href="#Services" onClick={toggleMenu}>Our Services</a></li>
            <li><a href="#Services" onClick={toggleMenu}>About Us</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact Us</a></li>
          </ul>
        </div>
      )}
{/* Emergency Contact Boxes (Above Slider) */}
<div className="contact-boxes">
  <div className="contact-box left font-bold">
    <p>📞 Emergency: 
      <a href="tel:+919073672051" className="contact-link"> +91 9073672051</a> | 
      <a href="tel:+919073932051" className="contact-link"> +91 9073932051</a>
    </p>
  </div>
  <div className="contact-box right font-bold">
    <p>✉ Email: 
      <a href="mailto:innerworkadvisors@gmail.com" className="contact-link">
        innerworkadvisors@gmail.com
      </a>
    </p>
  </div>
</div>
      {/* Slider Section */}
      <div className="slider">
        {images.map((img, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? "active" : ""}`}
            style={{
              display: index === currentIndex ? "block" : "none",
            }}
          >
            <img src={img} alt={`Slide ${index + 1}`} className="slide-image" />
            <div className="slide-content text-xl text-center">
              <h1>{Content[index]?.title}</h1>
              <p>{Content[index]?.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button className="prev-btn" onClick={prevSlide}>
        <FaChevronLeft size={30} />
      </button>
      <button className="next-btn" onClick={nextSlide}>
        <FaChevronRight size={30} />
      </button>
    </header>
  );
};

export default Header;
