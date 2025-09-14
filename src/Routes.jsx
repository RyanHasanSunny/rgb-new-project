import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
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

function RoutesComponent({ isAuthenticated, setIsAuthenticated }) {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<AdminLogin setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/admin" element={isAuthenticated ? <AdminPanel setIsAuthenticated={setIsAuthenticated} /> : <Navigate to="/login" />} />
        <Route path="/" element={<MainSite />} />
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
    <>
      <Helmet>
        <title>{data.introduction.name ? `${data.introduction.name} - Portfolio` : 'RGB - Portfolio'}</title>
        <meta name="description" content={`Portfolio of ${data.introduction.name || 'Ryan'}, a Graphic Designer, Game Developer, and Web Designer. Explore innovative services and creative projects.`} />
        <meta name="keywords" content="graphic design, game development, web design, portfolio, Ryan" />
        <meta name="author" content={data.introduction.name || 'Ryan'} />
        <link rel="canonical" href={window.location.origin} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.origin} />
        <meta property="og:title" content={`${data.introduction.name || 'Ryan'} - Portfolio`} />
        <meta property="og:description" content={`Portfolio of ${data.introduction.name || 'Ryan'}, a Graphic Designer, Game Developer, and Web Designer. Explore innovative services and creative projects.`} />
        <meta property="og:image" content={`${window.location.origin}/Ryan.jpg`} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={window.location.origin} />
        <meta property="twitter:title" content={`${data.introduction.name || 'Ryan'} - Portfolio`} />
        <meta property="twitter:description" content={`Portfolio of ${data.introduction.name || 'Ryan'}, a Graphic Designer, Game Developer, and Web Designer. Explore innovative services and creative projects.`} />
        <meta property="twitter:image" content={`${window.location.origin}/Ryan.jpg`} />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": data.introduction.name || "Ryan",
            "jobTitle": "Graphic Designer, Game Developer, Web Designer",
            "url": window.location.origin,
            "sameAs": [
              data.introduction.linkedin,
              data.introduction.facebook,
              data.introduction.instagram,
              data.introduction.artstation
            ].filter(Boolean),
            "contactPoint": {
              "@type": "ContactPoint",
              "email": data.contactInfo.email,
              "telephone": data.contactInfo.phone,
              "contactType": "customer service"
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": data.contactInfo.address
            }
          })}
        </script>
      </Helmet>
      <div id="smooth-wrapper" style={{ overflow: 'hidden' }} ref={wrapperRef}>
        <div id="smooth-content" ref={contentRef}>
          <section id="hero"><Herosection contactInfo={data.contactInfo} introduction={data.introduction} onScrollToAbout={() => scrollToSection('about')} /></section>
          <section id="about"><Aboutsection onScrollToHero={() => scrollToSection('service')} /></section>
          <section id="service"><Servicesection skills={data.skills} onScrollToHero={() => scrollToSection('features')} /></section>
          <section id="features"><FeatureSection portfolio={data.portfolio} categories={data.categories} onScrollToHero={() => scrollToSection('webdevshowcase')} /></section>
          <section id="webdevshowcase"><WebDevShowcase /></section>
          <section id="workdetails"><Workdetails onScrollToHero={() => scrollToSection('hero')} /></section>
          <section id="collaborationsection"><Collaboration contactInfo={data.contactInfo} onScrollToHero={() => scrollToSection('hero')} /></section>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default RoutesComponent;
