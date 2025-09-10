import React from 'react';
import Ryan from '../assets/Fab.svg';
import '../styles/Loader.css';

const Loader = ({ fadeOut }) => {
  return (
    <div className={`loader-overlay ${fadeOut ? 'fade-out' : ''}`}>
      <div className="loader-content">
        <img src={Ryan} alt="Logo" className="loader-logo" />

      </div>
    </div>
  );
};

export default Loader;
