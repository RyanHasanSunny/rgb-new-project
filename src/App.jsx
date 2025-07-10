import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Herosection from './components/Sections/Herosection';
import Aboutsection from './components/Sections/Aboutsection';
import Servicesection from './components/Sections/Servicesection';
import FeatureSection from './components/Sections/Featuresection';
import Workdetails from './components/Sections/Workdetails';
import Collaboration from './components/Sections/Collaboration';
import Footer from './components/Sections/Footer';
import './App.css'; // Import your main CSS file

function App() {
  const [currentSection, setCurrentSection] = useState('hero');

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
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
      const featureSection = document.getElementById('features');
      const workdetailsSection = document.getElementById('workdetails');

      const sections = [
        { id: 'workdetails', el: workdetailsSection },
        { id: 'features', el: featureSection },
        { id: 'service', el: serviceSection },
        { id: 'about', el: aboutSection },
        { id: 'hero', el: heroSection },
      ];

      for (let section of sections) {
        if (section.el) {
          const rect = section.el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setCurrentSection(section.id);
            break;
          }
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
            transform: translateY(0);
          }
          40% {
            transform: translateY(-20px);
          }
          60% {
            transform: translateY(-10px);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
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

      <div className="min-h-screen overflow-x-hidden ">
        {/* Navigation Indicator */}
        <div className="fixed right-2 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 opasity z-50" style={{opacity:'.5'}}>
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
            aria-label="Go to service section"
          />
          <button
            onClick={() => scrollToSection('features')}
            className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
              currentSection === 'features'
                ? 'bg-white border-white'
                : 'border-gray-500 hover:border-white'
            }`}
            aria-label="Go to features section"
          />
          <button
            onClick={() => scrollToSection('workdetails')}
            className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
              currentSection === 'workdetails'
                ? 'bg-white border-white'
                : 'border-gray-500 hover:border-white'
            }`}
            aria-label="Go to workdetails section"
          />
        </div>

        {/* Hero Section */}
        <section id="hero">
          <Herosection onScrollToAbout={() => scrollToSection('about')} />
        </section>

        {/* About Section */}
        <section id="about">
          <Aboutsection onScrollToHero={() => scrollToSection('service')} />
        </section>

        {/* Service Section */}
        <section id="service">
          <Servicesection onScrollToHero={() => scrollToSection('features')} />
        </section>

        {/* Feature Section */}
        <section id="features">
          <FeatureSection onScrollToHero={() => scrollToSection('hero')} />
        </section>

        {/* Workdetails Section */}
        <section id="workdetails">
          <Workdetails onScrollToHero={() => scrollToSection('hero')} />
        </section>
        
        <section id="collaborationsection">
            <Collaboration onScrollToHero={() => scrollToSection('hero')} />
        </section>

        {/* Footer Section */}
        {/* <footer id="footer" className="bg-gray-900 text-white py-6">
          <div className="container mx-auto text-center">
            <p className="text-sm">
              © {new Date().getFullYear()} ryangraphicboy. All rights reserved.
            </p>
          </div>
        </footer> */}
        <Footer />

      </div>
    </>
  );
}

export default App;
