import React from 'react';
import { ChevronDown, Import } from 'lucide-react';
import "../../styles/Aboutsection.css";
import SectionContainer from '../Container/Section_Container/Section_Container';
import ServiceContainer from '../Container/Services/ServiceContainer';
import GraphicDesignIcon from '../../assets/graphicdesign.svg';
import webdev from '../../assets/webdev.svg';
import ModelingIcon from '../../assets/3dmodeling.svg';
import xd from '../../assets/xd.png';
import figma from '../../assets/figma.png';
//import photoshop from '../../assets/photoshop.png';
//import illustrator from '../../assets/illustrator.png';
//import blender from '../../assets/blender.png';
//import aftereffects from '../../assets/aftereffects.png';
//import premiere from '../../assets/premiere.png';
import Reactjs from '../../assets/react.svg';


export default function Servicesection() {
  return (
    <SectionContainer id="servicesection">

      <ServiceContainer
        title="Web Design"
        description="Creating stunning and user-friendly websites that captivate your audience and drive engagement."
        Icon={webdev}
        iconList={[Reactjs,figma, xd]} // Add any icons you want
      />

      <ServiceContainer
        title="Graphic Design"
        description="Crafting visually appealing graphics that communicate your brand's message effectively."
        Icon={GraphicDesignIcon}
        iconList={[GraphicDesignIcon, webdev]} // Mix as desired
      />

      <ServiceContainer
        title="3D Modeling"
        description="Bringing your ideas to life with detailed and realistic 3D models for various applications."
        Icon={ModelingIcon}
        iconList={[ModelingIcon, GraphicDesignIcon]} // Customize icons
      />

      {/* Sticky Chevron */}
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
        <div className=" flex flex-col space-y-2">
          <ChevronDown className="w-5 h-5 text-gray-400 hover:text-white transition-colors cursor-pointer" />
          <ChevronDown className="w-5 h-5 text-gray-400 hover:text-white transition-colors cursor-pointer" />
          <ChevronDown className="w-5 h-5 text-gray-400 hover:text-white transition-colors cursor-pointer" />
        </div>
      </div>
    </SectionContainer>
  );
}
