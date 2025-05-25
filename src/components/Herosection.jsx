import React from "react";
import "../styles/Herosection.css";

const Herosection = () => {
  return (
    <section id="herosection" className="section">
      {/* Email - Bottom Left Rotated */}
      <div className="hero-email">
        <h2 className="email-text">ryangraphicboy@gmail.com</h2>
      </div>

      {/* Centered Content */}
      <div className="hero-content">
        <h1 className="hero-title">RGB</h1>
        {/* <div className="Dot"></div> */}
      </div>

      {/* More Button - Top Right */}
      <div className="hero-more">
      <div className="more-button">
        <div className="line"></div>
        <div className="line"></div>
      </div>
      </div>

      {/* Animated Arrow - Bottom Right */}
      <a  href="#aboutsection" className="arrow-container">
        <div className="arrow-down"></div>
        
      </a>
    </section>
  );
};

export default Herosection;