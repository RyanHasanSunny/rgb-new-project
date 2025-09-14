import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}
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

  // Dynamic meta tags based on current section
  const getMetaTags = () => {
    const baseTitle = "Ryan - Graphic Designer, Game Developer & Web Designer Portfolio";
    const baseDescription = "Portfolio of Ryan, a Graphic Designer, Game Developer, and Web Designer. Explore innovative services and creative projects.";
    const baseUrl = "https://ryangraphicboy.netlify.app/";

    switch (currentSection) {
      case 'hero':
        return {
          title: baseTitle,
          description: baseDescription,
          url: baseUrl
        };
      case 'about':
        return {
          title: "About Ryan - Graphic Designer & Developer",
          description: "Learn about Ryan's background in graphic design, game development, and web design. Discover his skills and passion for creative projects.",
          url: `${baseUrl}#about`
        };
      case 'service':
        return {
          title: "Services - Graphic Design, Game Dev, Web Design",
          description: "Explore Ryan's professional services including graphic design, game development, and web design. Innovative solutions for your projects.",
          url: `${baseUrl}#service`
        };
      case 'features':
        return {
          title: "Portfolio - Creative Projects by Ryan",
          description: "View Ryan's portfolio of graphic design, game development, and web design projects. Showcasing innovative and creative work.",
          url: `${baseUrl}#features`
        };
      case 'webdevshowcase':
        return {
          title: "Web Development Showcase - Ryan's Projects",
          description: "Explore Ryan's web development projects and showcases. Modern, responsive, and innovative web solutions.",
          url: `${baseUrl}#webdevshowcase`
        };
      case 'workdetails':
        return {
          title: "Work Details - Ryan's Professional Experience",
          description: "Detailed overview of Ryan's work experience and professional journey in design and development.",
          url: `${baseUrl}#workdetails`
        };
      case 'collaborationsection':
        return {
          title: "Let's Collaborate - Contact Ryan",
          description: "Ready to work together? Contact Ryan for graphic design, game development, or web design projects.",
          url: `${baseUrl}#collaborationsection`
        };
      default:
        return {
          title: baseTitle,
          description: baseDescription,
          url: baseUrl
        };
    }
  };

  const meta = getMetaTags();

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:url" content={meta.url} />
        <meta property="twitter:title" content={meta.title} />
        <meta property="twitter:description" content={meta.description} />
        <meta property="twitter:url" content={meta.url} />
        <link rel="canonical" href={meta.url} />
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
