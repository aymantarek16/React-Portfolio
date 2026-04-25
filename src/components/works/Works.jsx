/* eslint-disable react/prop-types */
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { featuredProjects } from "./ProjectsData";
import "./works.css";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.article
      className="project-card-3d"
      style={{ "--i": index + 1 }}
      initial={{ opacity: 0, y: 46 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
    >
      <div className="project-index" aria-hidden>
        {String(index + 1).padStart(2, "0")}
      </div>

      <a
        href={project.liveDemo}
        target="_blank"
        rel="noopener noreferrer"
        className="project-image-link"
        aria-label={`Open live demo for ${project.projectTitle}`}
      >
        <img
          src={project.imgPath}
          alt={project.projectTitle}
          className="card-image"
          loading={index < 2 ? "eager" : "lazy"}
          decoding="async"
        />
      </a>

      <div className="card-info">
        <span className="card-category">{project.category}</span>
        <h3 className="card-title">{project.projectTitle}</h3>
        <p className="card-description">{project.subTitle}</p>

        <div className="card-tech" aria-label={`${project.projectTitle} stack`}>
          {project.techStack.map((tech) => (
            <span key={`${project.id}-${tech}`} className="card-tech-tag">
              {tech}
            </span>
          ))}
        </div>

        <div className="card-actions">
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="card-action-btn primary"
          >
            Live Demo
            <span aria-hidden>↗</span>
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="card-action-btn secondary"
          >
            View Code
            <span aria-hidden>↗</span>
          </a>
        </div>
      </div>
    </motion.article>
  );
};

const Works = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="projects-section" id="projects">
      <div className="projects-container">
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Selected Work</span>
          <h2 className="section-title">
            A curated look at my most impactful projects.
          </h2>
          <p className="section-subtitle">
            These are selected highlights from a wider portfolio, chosen to show
            the range, quality, and product thinking behind my front-end work.
          </p>
        </motion.div>

        <div className="projects-list">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
