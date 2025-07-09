import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import Herosection from './components/Sections/Herosection';
import Aboutsection from './components/Sections/Aboutsection';
import Servicesection from './components/Sections/Servicesection';
import FeatureSection from './components/Sections/Featuresection';
import Workdetails from './components/Sections/Workdetails';

function App() {
  const [currentSection, setCurrentSection] = useState('hero');

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      setCurrentSection(sectionId);
    }
  };

  // Handle scroll events to update current section
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      const aboutSection = document.getElementById('about');
      const serviceSection = document.getElementById('service');
      
      if (heroSection && aboutSection && serviceSection) {
        const heroRect = heroSection.getBoundingClientRect();
        const aboutRect = aboutSection.getBoundingClientRect();
        const serviceRect = serviceSection.getBoundingClientRect();

        
        if (heroRect.top >= -100) {
          setCurrentSection('hero');
        }
         else if (aboutRect.top <= 100) {
          setCurrentSection('about');
        }
        else if (serviceRect.top <= 100) {
          setCurrentSection('service');
          }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform:  translateY(0);
          }
          40% {
            transform:  translateY(-20px);
          }
          60% {
            transform:  translateY(-10px);
          }
        }
        
        @keyframes fadeIn {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes slideInRight {
          from { 
            opacity: 0; 
            transform: translateX(50px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }
        
        @keyframes fadeInUp {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        body {
          margin: 0;
          padding: 0;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
      `}</style>
      
      <div className="min-h-screen  overflow -x-hidden">
        {/* Navigation Indicator */}
        <div className="buttons transform-translate-y-1/2 z-50">
          <button
            onClick={() => scrollToSection('hero')}
            className={`w-2 h-2 rounded-full border-2 transition-all duration-300 ${
              currentSection === 'hero' 
              ? 'bg-white border-white' 
              : 'border-gray-500 hover:border-white'
            }`}
            aria-label="Go to hero section"
          />
          <button
            onClick={() => scrollToSection('about')}
            className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
              currentSection === 'about' 
              ? 'bg-white border-white' 
              : 'border-gray-500 hover:border-white'
            }`}
            aria-label="Go to about section"
          />

            <button
            onClick={() => scrollToSection('service')}
            className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
              currentSection === 'service' 
              ? 'bg-white border-white' 
              : 'border-gray-500 hover:border-white'
            }`}
            aria-label="Go to about section"
          />
        </div>

        {/* Hero Section */}
        <section id="hero">
          <Herosection onScrollToAbout={() => scrollToSection('about')} />
        </section>

        {/* <div className="flex justify-center items-center mt-10 h-screen" style={{ zIndex: -1 }}>
          </div> */}

        {/* About Section */}
        <section id="about">
          <Aboutsection onScrollToHero={() => scrollToSection('service')} />
        </section>

        {/* Service Section */}
        <section id="service">
          <Servicesection onScrollToHero={() => scrollToSection('features')} />
        </section>

         {/* Service Section */}
        <section id="features">
          <FeatureSection onScrollToHero={() => scrollToSection('hero')} />
        </section>


         {/* Service Section */}
        <section id="workdetails">
          <Workdetails onScrollToHero={() => scrollToSection('hero')} />
        </section>



        


      </div>
    </>
  );
}

export default App;