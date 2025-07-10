import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Herosection from './components/Sections/Herosection';
import Aboutsection from './components/Sections/Aboutsection';
import Servicesection from './components/Sections/Servicesection';
import FeatureSection from './components/Sections/Featuresection';
import Workdetails from './components/Sections/Workdetails';
import Collaboration from './components/Sections/Collaboration';
import Footer from './components/Sections/Footer';

function App() {
  const [currentSection, setCurrentSection] = useState('hero');

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

  // Use IntersectionObserver for tracking
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'service', 'features', 'workdetails', 'collaborationsection'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
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

      <div className="min-h-screen overflow-x-hidden">
        {/* Navigation Indicator */}
        <div className="fixed right-2 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 z-50 opacity-50">
          {['hero', 'about', 'service', 'features', 'workdetails', 'collaborationsection'].map((sectionId) => (
            <button
              key={sectionId}
              onClick={() => scrollToSection(sectionId)}
              className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                currentSection === sectionId
                  ? 'bg-white border-white'
                  : 'border-gray-500 hover:border-white'
              }`}
              aria-label={`Go to ${sectionId} section`}
              aria-current={currentSection === sectionId ? 'true' : undefined}
              title={sectionId}
            />
          ))}
        </div>

        {/* Sections */}
        <section id="hero">
          <Herosection onScrollToAbout={() => scrollToSection('about')} />
        </section>

        <section id="about">
          <Aboutsection onScrollToHero={() => scrollToSection('service')} />
        </section>

        <section id="service">
          <Servicesection onScrollToHero={() => scrollToSection('features')} />
        </section>

        <section id="features">
          <FeatureSection onScrollToHero={() => scrollToSection('hero')} />
        </section>

        <section id="workdetails">
          <Workdetails onScrollToHero={() => scrollToSection('hero')} />
        </section>

        <section id="collaborationsection">
          <Collaboration onScrollToHero={() => scrollToSection('hero')} />
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default App;
