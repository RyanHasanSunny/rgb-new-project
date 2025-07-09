import React from "react";
import "../../styles/Herosection.css";

const Herosection = () => {
  return (
    <section id="hero" className="section">

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

      <div className="contact-info p-6 ">
      {/* Email - Bottom Left Rotated */}
      <div className="hero-email">
        <h2 className="email-text">ryangraphicboy@gmail.com</h2>
      </div>
      {/* Animated Arrow - Bottom Right */}
      <a href="#about" className="arrow-container" aria-label="Scroll to about section">
        <div className="arrow-down"></div>
      </a>
      </div>
    </section>
  );
};

export default Herosection;
