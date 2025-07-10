import React from "react";
import "../../styles/Herosection.css";

const Herosection = () => {
  return (
    <section id="hero" className="section">

      {/* Centered Content */}
      <div className="hero-content">
        <div className="flex flex-col items-center justify-center h-full">
        <h1 className="hero-title">RGB</h1>
        <div className="social-media-icons text-white">
          <a href="https://www.linkedin.com/in/ryan-hasan-sunny-190a65245/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.facebook.com/ryanhasan.sunny7" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/ryan.graphicboy/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.artstation.com/ryanhasansunny4" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-artstation"></i>
          </a>
          </div>
        </div>
      </div>

      {/* More Button - Top Right */}
      <div className="hero-more">
        <a href="#about" className="arrow-container-top" aria-label="Scroll to about section">
       
      </a>
        <div className="more-button">
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>

      <div className="contact-info p-6 ">
      {/* Email - Bottom Left Rotated */}
      <div className="hero-email">
        <h2 className="email-text">ryangraphicboy@gmail.com</h2>
      </div>
      {/* Animated Arrow - Bottom Right */}
      <a href="#about" className="arrow-container-down" aria-label="Scroll to about section">
      
      </a>
      </div>
    </section>
  );
};

export default Herosection;
