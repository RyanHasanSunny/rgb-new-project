import React from 'react';
import { ChevronDown } from 'lucide-react';
import "../../styles/Aboutsection.css";
import SectionContainer from '../Container/Section_Container/Section_Container';
import ServiceContainer from '../Container/Services/ServiceContainer';
import GraphicDesignIcon from '../../assets/graphicdesign.svg';
import webdev from '../../assets/webdev.svg';
import ModelingIcon from '../../assets/3dmodeling.svg';
import xd from '../../assets/xd.png';
import figma from '../../assets/figma.png';
import Reactjs from '../../assets/react.svg';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa42Group, faFigma, faNode, faReact } from '@fortawesome/free-brands-svg-icons';

export default function Servicesection() {
  return (
    <SectionContainer id="servicesection">
      <ServiceContainer
        title="Web Design"
        description="Creating stunning and responsive websites that provide an exceptional user experience, combining modern design principles with cutting-edge technologies to ensure your site is both visually appealing and highly functional across all devices."
        Icon={webdev}
        iconList={[
          <FontAwesomeIcon icon={faReact} size="2x" />,
          <FontAwesomeIcon icon={faNode} size="2x" />,
          <FontAwesomeIcon icon={faFigma} size="2x" />,
          
        ]}
      />

      <ServiceContainer
        title="Graphic Design"
        description="Crafting visually appealing graphics that communicate your brand's message effectively. From logos to marketing materials, we ensure your visuals stand out and resonate with your audience."
        Icon={GraphicDesignIcon}
       iconList={[
          <FontAwesomeIcon icon={fa42Group} size="2x" />,
          
        ]}
      />

      <ServiceContainer
        title="3D Modeling"
        description="Bringing your ideas to life with detailed and realistic 3D models for various applications. Whether for games, animations, or product visualizations, our 3D modeling services ensure high quality and precision."
        Icon={ModelingIcon}
        iconList={[ModelingIcon, GraphicDesignIcon]}
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
        <div className="flex flex-col space-y-2">
          <ChevronDown className="w-5 h-5 text-gray-400 hover:text-white transition-colors cursor-pointer" />
          <ChevronDown className="w-5 h-5 text-gray-400 hover:text-white transition-colors cursor-pointer" />
          <ChevronDown className="w-5 h-5 text-gray-400 hover:text-white transition-colors cursor-pointer" />
        </div>
      </div>
    </SectionContainer>
  );
}
