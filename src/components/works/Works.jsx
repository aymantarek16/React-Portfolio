/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import "./works.css";
import { motion, useInView } from "framer-motion";
import { featuredProjects } from "./ProjectsData";



// 3D Tilt Card Component
const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg)");
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = Math.max(-10, Math.min(10, ((y - centerY) / centerY) * -10));
    const rotateY = Math.max(-10, Math.min(10, ((x - centerX) / centerX) * 10));
    
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`);
    setGlowPosition({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  };

  const handleMouseLeave = () => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)");
    setGlowPosition({ x: 50, y: 50 });
  };

  const isEven = index % 2 === 0;

  return (
    <motion.article
      ref={cardRef}
      className={`project-card-3d ${isEven ? "left" : "right"}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform }}
    >
      {/* Glow Effect */}
      <div 
        className="card-glow" 
        style={{ 
          background: `radial-gradient(circle at ${glowPosition.x}% ${glowPosition.y}%, rgba(99, 102, 241, 0.3), transparent 50%)` 
        }}
      />
      
      {/* Card Border */}
      <div className="card-border-3d" />
      
      {/* Content Layout */}
      <div className={`card-content ${isEven ? "" : "reverse"}`}>
        {/* Image Side */}
        <div className="card-image-wrapper">
          <img
            src={project.imgPath}
            alt={project.projectTitle}
            className="card-image"
            loading="lazy"
          />
          <div className="card-image-overlay" />
          
          {/* Category Badge */}
          <span className="card-category">{project.category}</span>
          
          {/* Hover Actions */}
          <div className="card-actions">
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="card-action-btn primary"
            >
              <span>Live Demo</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="card-action-btn secondary"
            >
              <span>View Code</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
        
        {/* Info Side */}
        <div className="card-info">
          <span className="card-number">0{index + 1}</span>
          <h3 className="card-title">{project.projectTitle}</h3>
          <p className="card-description">{project.subTitle}</p>
          
          {/* Tech Stack */}
          <div className="card-tech">
            {project.techStack.map((tech, techIndex) => (
              <span key={`${project.id}-tech-${techIndex}`} className="card-tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

const Main = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="projects-section" id="projects">
      <div className="projects-container">
        {/* Section Header */}
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Selected Work</span>
          <h2 className="section-title">
            Projects that <span className="text-gradient">deliver results</span>
          </h2>
          <p className="section-subtitle">
            A curated showcase of high-impact web applications built for real businesses
          </p>
        </motion.div>

        {/* Vertical Project List */}
        <div className="projects-list">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Main;
