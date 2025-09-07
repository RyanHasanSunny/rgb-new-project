import React from 'react';
import Ryan from '../assets/Ryan.png';
import '../styles/Loader.css';

const Loader = () => {
  return (
    <div className="loader-overlay">
      <div className="loader-content">
        <img src={Ryan} alt="Logo" className="loader-logo" />
        
      </div>
    </div>
  );
};

export default Loader;
