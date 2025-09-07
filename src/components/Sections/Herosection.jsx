import React, { useEffect, useState } from "react";
import { fetchContactInfo, fetchIntroduction } from "../../api";
import "../../styles/Herosection.css";
import { FaLinkedin, FaFacebook, FaInstagram, FaArtstation } from "react-icons/fa";

const Herosection = () => {
  const [contactInfo, setContactInfo] = useState({ email: "" });
  const [introduction, setIntroduction] = useState({ name: "", linkedin: "", facebook: "", instagram: "", artstation: "" });

  useEffect(() => {
    const loadData = async () => {
      const contactData = await fetchContactInfo();
      setContactInfo(contactData);

      const introData = await fetchIntroduction();
      setIntroduction(introData);
    };
    loadData();
  }, []);

  return (
    <section id="hero" className="section">

      {/* Centered Content */}
      <div className="hero-content">
        <div className="flex flex-col items-center  justify-center h-full">
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
        <h2 className="email-text">{contactInfo.email || "ryangraphicboy@gmail.com"}</h2>
      </div>
      {/* Animated Arrow - Bottom Right */}
      <a href="#about" className="arrow-container-down" aria-label="Scroll to about section">
      
      </a>
      </div>
    </section>
  );
};

export default Herosection;
