import React from 'react';
import SectionContainer from '../Container/Section_Container/Section_Container';
import '../../styles/WebDevShowcase.css';

const WebDevShowcase = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.',
      image: '/assets/webdev.svg',
      link: '#',
      tech: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website built with modern web technologies. Showcases projects, skills, and contact information with smooth animations.',
      image: '/assets/graphicdesign.svg',
      link: '#',
      tech: ['HTML', 'CSS', 'JavaScript', 'GSAP']
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '/assets/3dmodeling.svg',
      link: '#',
      tech: ['Vue.js', 'Firebase', 'Tailwind CSS']
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'An interactive weather dashboard that displays current conditions and forecasts using weather API integration.',
      image: '/assets/xd.png',
      link: '#',
      tech: ['React', 'API', 'Chart.js']
    },
    {
      id: 5,
      title: 'Social Media Dashboard',
      description: 'A comprehensive social media management tool with analytics, scheduling, and multi-platform integration.',
      image: '/assets/graphicdesign.png',
      link: '#',
      tech: ['Angular', 'Express.js', 'PostgreSQL']
    },
    {
      id: 6,
      title: 'Fitness Tracker App',
      description: 'A mobile-first fitness tracking application with workout plans, progress tracking, and community features.',
      image: '/assets/webdev.svg',
      link: '#',
      tech: ['React Native', 'Redux', 'MongoDB']
    },
    {
      id: 7,
      title: 'Learning Management System',
      description: 'An online learning platform with course creation, video streaming, and assessment tools for educators and students.',
      image: '/assets/3dmodeling.svg',
      link: '#',
      tech: ['Next.js', 'Prisma', 'PostgreSQL']
    },
    {
      id: 8,
      title: 'Real Estate Platform',
      description: 'A property listing and search platform with advanced filters, virtual tours, and agent management system.',
      image: '/assets/xd.png',
      link: '#',
      tech: ['React', 'Django', 'MySQL']
    }
  ];

  // Triple the projects for smoother infinite scroll
  const tripleProjects = [...projects, ...projects, ...projects];

  return (
    <SectionContainer id="featuresection" title="Web Development Showcase">
      <div className="webdev-showcase">
        <div className="showcase-container">
          <div className="showcase-scroll">
            {tripleProjects.map((project, index) => (
              <div key={`${project.id}-${Math.floor(index / projects.length)}-${index}`} className="project-card">
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
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default WebDevShowcase;