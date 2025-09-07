import React from 'react';
import SectionContainer from '../Container/Section_Container/Section_Container';
import '../../styles/WebDevShowcase.css';

const WebDevShowcase = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.',
      image: '/assets/webdev.svg', // Using existing asset
      link: '#',
      tech: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website built with modern web technologies. Showcases projects, skills, and contact information with smooth animations.',
      image: '/assets/webdev.svg',
      link: '#',
      tech: ['HTML', 'CSS', 'JavaScript', 'GSAP']
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '/assets/webdev.svg',
      link: '#',
      tech: ['Vue.js', 'Firebase', 'Tailwind CSS']
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'An interactive weather dashboard that displays current conditions and forecasts using weather API integration.',
      image: '/assets/webdev.svg',
      link: '#',
      tech: ['React', 'API', 'Chart.js']
    }
  ];

  return (
    <SectionContainer id="featuresection" title="Web Development Showcase">
      <div className="webdev-showcase">
        <div className="showcase-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <a href={project.link} className="view-project-btn">View Project</a>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default WebDevShowcase;
