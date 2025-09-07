import React from 'react';
import { ChevronDown } from 'lucide-react';
import "../../styles/Aboutsection.css";
import SectionContainer from '../Container/Section_Container/Section_Container';
import ServiceContainer from '../Container/Services/ServiceContainer';
import webdev from '../../assets/webdev.svg';

export default function Servicesection({ skills, onScrollToHero }) {

  return (
    <SectionContainer id="servicesection">
      {skills.map((skill, index) => (
        <ServiceContainer
          key={index}
          title={skill.skill}
          description={skill.details}
          Icon={skill.featureimage } // Default to webdev if no feature image
          iconList={skill.images ? skill.images.slice(0) : []}
        />
      ))}

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
