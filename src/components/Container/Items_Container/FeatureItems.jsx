// components/FeatureItems.jsx
import React from 'react';
import '../../../styles/FeatureItem.css'; // You may want to rename this CSS file too for consistency

const FeatureItems = ({ image, title, link }) => {
  return (
    <div className="feature-item">
      <div className="Imageplaceholder">
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img src={image} alt={title} className="feature-image" />
          </a>
        ) : (
          <img src={image} alt={title} className="feature-image" />
        )}
      </div>
    </div>
  );
};

export default FeatureItems;
