import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Herosection from './components/Sections/Herosection';
import Aboutsection from './components/Sections/Aboutsection';
import Servicesection from './components/Sections/Servicesection';
import FeatureSection from './components/Sections/Featuresection';
import WebDevShowcase from './components/Sections/WebDevShowcase';
import Workdetails from './components/Sections/Workdetails';
import Collaboration from './components/Sections/Collaboration';
import Footer from './components/Sections/Footer';
import AdminLogin from './components/Admin/AdminLogin';
import AdminPanel from './components/Admin/AdminPanel';
import Loader from './components/Loader';
import { fetchContactInfo, fetchIntroduction, fetchSkills, fetchPortfolio, fetchCategories } from './api';
import './styles/Loader.css';

// GSAP imports
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<AdminLogin setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/admin" element={isAuthenticated ? <AdminPanel setIsAuthenticated={setIsAuthenticated} /> : <Navigate to="/login" />} />
        <Route path="/" element={
          <MainSite />
        } />
      </Routes>
    </Router>
  );
}

// Main site content extracted into a component
function MainSite() {
  const [currentSection, setCurrentSection] = useState('hero');
  const [loading, setLoading] = useState(true);
  const [loaderVisible, setLoaderVisible] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState({
    contactInfo: { email: "", phone: "", address: "" },
    introduction: { name: "", linkedin: "", facebook: "", instagram: "", artstation: "" },
    skills: [],
    portfolio: [],
    categories: []
  });

  // Create refs for wrapper and content
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setCurrentSection(sectionId);
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    // Delay ScrollSmoother creation to ensure refs are attached
    const timeoutId = setTimeout(() => {
      let smoother = ScrollSmoother.create({
        wrapper: wrapperRef.current,
        content: contentRef.current,
        smooth: 0.7,
        smoothTouch: 0.5,
      });
      // Store smoother instance on ref to kill later
      wrapperRef.current.smoother = smoother;
    }, 0);
    return () => {
      clearTimeout(timeoutId);
      if (wrapperRef.current && wrapperRef.current.smoother) {
        wrapperRef.current.smoother.kill();
      }
    };
  }, []);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const dataPromises = Promise.all([
          fetchContactInfo(),
          fetchIntroduction(),
          fetchSkills(),
          fetchPortfolio(),
          fetchCategories()
        ]);
        const timeoutPromise = new Promise(resolve => setTimeout(resolve, 100));
        const [dataResults] = await Promise.all([dataPromises, timeoutPromise]);
        const [contactInfo, introduction, skills, portfolio, categories] = dataResults;
        setData({ contactInfo, introduction, skills, portfolio, categories });
      } catch (err) {
        setError("Failed to load data. Please try again.");
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => {
        setLoaderVisible(false);
      }, 1000); // 1 second for fade-out animation
      return () => clearTimeout(timer);
    }
  }, [loading]);

  useEffect(() => {
    const sectionIds = ['hero', 'about', 'service', 'features', 'webdevshowcase', 'workdetails', 'collaborationsection'];
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

  if (loaderVisible) return <Loader fadeOut={!loading} />;
  if (error) return <div className="error-message">{error}</div>;

  return (
    <div id="smooth-wrapper" style={{ overflow: 'hidden' }} ref={wrapperRef}>
      <div id="smooth-content" ref={contentRef}>
        {/* Navigation Indicator */}
        <div className="fixed right-2 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 z-50 opacity-50">
          {['hero', 'about', 'service', 'features', 'webdevshowcase', 'workdetails', 'collaborationsection'].map((sectionId) => (
            <button
              key={sectionId}
              onClick={() => scrollToSection(sectionId)}
              className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                currentSection === sectionId ? 'bg-white border-white' : 'border-gray-500 hover:border-white'
              }`}
              aria-label={`Go to ${sectionId} section`}
              title={sectionId}
            />
          ))}
        </div>

        <section id="hero"><Herosection contactInfo={data.contactInfo} introduction={data.introduction} onScrollToAbout={() => scrollToSection('about')} /></section>
        <section id="about"><Aboutsection onScrollToHero={() => scrollToSection('service')} /></section>
        <section id="service"><Servicesection skills={data.skills} onScrollToHero={() => scrollToSection('features')} /></section>
        <section id="features"><FeatureSection portfolio={data.portfolio} categories={data.categories} onScrollToHero={() => scrollToSection('webdevshowcase')} /></section>
        <section id="webdevshowcase"><WebDevShowcase /></section>
        <section id="workdetails"><Workdetails onScrollToHero={() => scrollToSection('hero')} /></section>
        <section id="collaborationsection"><Collaboration onScrollToHero={() => scrollToSection('hero')} /></section>

        <Footer />
      </div>
    </div>
  );
}

export default App;
