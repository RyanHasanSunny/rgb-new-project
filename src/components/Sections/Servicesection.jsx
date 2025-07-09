// components/Servicesection.jsx
import React from 'react';
import { ChevronDown } from 'lucide-react';
import "../../styles/Aboutsection.css";
import SectionContainer from '../Container/Section_Container/Section_Container';
import ServiceContainer from '../Container/Services/ServiceContainer';
import GraphicDesignIcon from '../../assets/graphicdesign.svg';
import webdev from '../../assets/webdev.svg';
import ModelingIcon from '../../assets/3dmodeling.svg'; // Ensure you have a 3DModelingIcon imported


export default function Servicesection() {
  return (
    <SectionContainer id="servicesection" >
      {/* Service Cards */}
      <ServiceContainer
        title="Web Design"
        description="Creating stunning and user-friendly websites that captivate your audience and drive engagement."
        Icon={webdev}
      />
      <ServiceContainer
        title="Graphic Design"
        description="Crafting visually appealing graphics that communicate your brand's message effectively."
        Icon={GraphicDesignIcon}
      />
      <ServiceContainer
        title="3D Modeling"
        description="Bringing your ideas to life with detailed and realistic 3D models for various applications."
        Icon={ModelingIcon} // Ensure you have a 3DModelingIcon imported
      />

      {/* Sticky Chevron Arrows */}
      <div
        style={{
          position: 'sticky',
          bottom: '50px',
          right: '5%',
          display: 'flex',
          zIndex: 10,
          paddingBlock: '1rem',
        }}
      >
        <div className="flex flex-col space-y-2">
          <ChevronDown className="w-5 h-5 text-gray-400 hover:text-white transition-colors cursor-pointer" />
          <ChevronDown className="w-5 h-5 text-gray-400 hover:text-white transition-colors cursor-pointer" />
          <ChevronDown className="w-5 h-5 text-gray-400 hover:text-white transition-colors cursor-pointer" />
        </div>
      </div>

      {/* Optional Bottom Text (currently hidden) */}
      {/* <div
        className="items-end mt-10"
        style={{
          position: 'sticky',
          top: '0',
          zIndex: 10,
          paddingBlock: '1rem',
        }}
      >
        <div className="text-sm text-gray-400">
          <h2 className="mb-1">Explore Our Services,</h2>
          <h2>Where Innovation Meets Excellence</h2>
        </div>
      </div> */}
    </SectionContainer>
  );
}
