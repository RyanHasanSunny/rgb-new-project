// components/SectionContainer.jsx
import React from 'react';

export default function SectionContainer({ id, title, children }) {

  const isSticky = id !== 'featuresection';

  return (
    <div
      id={id}
      className="section-container flex flex-col justify-center"
      style={{ paddingInline: '5%', paddingBottom: '5%' }}
    >
      {/* Conditional Sticky Header */}
      <div
        style={{
          position: isSticky ? 'sticky' : 'static',
          justifyItems: isSticky ? 'left' : 'center',
          top: isSticky ? '50px' : 'auto',
          zIndex: isSticky ? 10 : 'auto',
          paddingBlock: '1rem',
        }}
      >
        <h2 className="welcome ">{title}</h2>
      </div>

      {/* Main Content */}
      <div>{children}</div>
    </div>
  );
}
