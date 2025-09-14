import React from "react";
import "../../styles/Herosection.css";
import { FaLinkedin, FaFacebook, FaInstagram, FaArtstation } from "react-icons/fa";

const Herosection = ({ contactInfo, introduction, onScrollToAbout }) => {

  return (
    <section id="hero" className="section">

      {/* Centered Content */}
      <div className="hero-content">
        <div className="flex flex-col items-center gap-8  justify-center h-full">
        <h1 className="hero-title">{introduction.name || "" }</h1>
        <div className="social-media-icons  text-white">
          {introduction.linkedin && (
            <a href={introduction.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-linkedin"> <FaLinkedin /></i>
            </a>
          )}
          {introduction.facebook && (
            <a href={introduction.facebook} target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-facebook"> <FaFacebook /></i>
            </a>
          )}
          {introduction.instagram && (
            <a href={introduction.instagram} target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-instagram"> <FaInstagram /></i>
            </a>
          )}
          {introduction.artstation && (
            <a href={introduction.artstation} target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-artstation"> <FaArtstation /></i>
            </a>
          )}
          </div>
        </div>
      </div>

      

      <div className="contact-info p-6 ">
        {/* More Button - Top Right */}
      <div className="hero-more">
        <div className="more-button">
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
      {/* Email - Bottom Left Rotated */}
      <div className="hero-email">
        <a href={`mailto:${contactInfo.email || "ryangraphicboy@gmail.com"}`} className="email-text" aria-label="Send email">
          {contactInfo.email || "ryangraphicboy@gmail.com"}
        </a>
      </div>

       <a href="#about" className="arrow-container-top" aria-label="Scroll to about section"></a>
      {/* Animated Arrow - Bottom Right */}
      <a href="#about" className="arrow-container-down" aria-label="Scroll to about section">
      
      </a>
      </div>
    </section>
  );
};

export default Herosection;
