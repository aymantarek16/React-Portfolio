/* eslint-disable react/prop-types */
import { useMemo, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { featuredProjects } from "./ProjectsData";
import "./works.css";

const ProjectAction = ({ href, children, variant = "primary" }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`work-action ${variant}`}
  >
    <span>{children}</span>
    <span className="work-action-icon" aria-hidden />
  </a>
);

const LoginCredentials = ({ credentials }) => {
  if (!credentials) return null;

  if (credentials.note) {
    return (
      <div className="login-credentials">
        <div className="credentials-note">
          <span className="credentials-icon">🔓</span>
          <span>{credentials.note}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="login-credentials">
      <div className="credentials-header">
        <span className="credentials-icon">🔐</span>
        <span>Demo Credentials</span>
      </div>
      <div className="credentials-body">
        <div className="credential-item">
          <span className="credential-label">Email:</span>
          <span className="credential-value">{credentials.email}</span>
        </div>
        <div className="credential-item">
          <span className="credential-label">Password:</span>
          <span className="credential-value">{credentials.password}</span>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, index }) => (
  <motion.article
    className="work-card"
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-70px" }}
    transition={{ duration: 0.42, delay: Math.min(index * 0.045, 0.28) }}
  >
    <a
      href={project.liveDemo}
      target="_blank"
      rel="noopener noreferrer"
      className="work-card-media"
      aria-label={`Open live demo for ${project.projectTitle}`}
    >
      <img
        src={project.imgPath}
        alt={project.projectTitle}
        loading={index < 3 ? "eager" : "lazy"}
        decoding="async"
      />
      <span className="work-card-number" aria-hidden>
        {String(index + 1).padStart(2, "0")}
      </span>
    </a>

    <div className="work-card-body">
      <div className="work-card-topline">
        <span>{project.category}</span>
        <span>{project.techStack[0]}</span>
      </div>

      <h3>{project.projectTitle}</h3>
      <p>{project.subTitle}</p>

      <div className="work-stack" aria-label={`${project.projectTitle} stack`}>
        {project.techStack.slice(0, 4).map((tech) => (
          <span key={`${project.id}-${tech}`}>{tech}</span>
        ))}
      </div>

      <div className="work-card-actions">
        <ProjectAction href={project.liveDemo}>Launch</ProjectAction>
        <ProjectAction href={project.github} variant="ghost">
          Code
        </ProjectAction>
      </div>

      {project.loginCredentials && (
        <LoginCredentials credentials={project.loginCredentials} />
      )}
    </div>
  </motion.article>
);

const SpotlightProject = ({ project, totalProjects }) => (
  <motion.article
    className="work-spotlight"
    initial={{ opacity: 0, y: 34 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.52 }}
  >
    <a
      href={project.liveDemo}
      target="_blank"
      rel="noopener noreferrer"
      className="spotlight-screen"
      aria-label={`Open live demo for ${project.projectTitle}`}
    >
      <img src={project.imgPath} alt={project.projectTitle} loading="eager" />
  
    </a>

    <div className="spotlight-info">
      <span className="spotlight-kicker">{project.category}</span>
      <h3>{project.projectTitle}</h3>
      <p>{project.subTitle}</p>

      <div className="spotlight-stack" aria-label={`${project.projectTitle} stack`}>
        {project.techStack.map((tech) => (
          <span key={`${project.id}-${tech}`}>{tech}</span>
        ))}
      </div>

      <div className="spotlight-actions">
        <ProjectAction href={project.liveDemo}>Open Live Demo</ProjectAction>
        <ProjectAction href={project.github} variant="ghost">
          View Source
        </ProjectAction>
      </div>

      {project.loginCredentials && (
        <LoginCredentials credentials={project.loginCredentials} />
      )}
    </div>
  </motion.article>
);

const Works = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(
    () => ["All", ...new Set(featuredProjects.map((project) => project.category))],
    []
  );

  const projectStats = useMemo(() => {
    const stack = new Set(featuredProjects.flatMap((project) => project.techStack));

    return [
      { value: `${featuredProjects.length}+`, label: "shipped builds" },
      { value: `${categories.length - 1}`, label: "business lanes" },
      { value: `${stack.size}+`, label: "tools in play" },
    ];
  }, [categories.length]);

  const visibleProjects = useMemo(() => {
    if (activeCategory === "All") {
      return featuredProjects;
    }

    return featuredProjects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  const spotlightProject = visibleProjects[0];
  const supportingProjects = visibleProjects.slice(1);

  return (
    <section ref={sectionRef} className="works-section" id="projects">
      <div className="works-container">
        <motion.div
          className="works-header"
          initial={{ opacity: 0, y: 26 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <div>
            <span className="section-label">Selected Work</span>
            <h2 className="section-title">
      Production-ready systems, built for real business growth
            </h2>
          </div>
        </motion.div>

        <div className="works-command">
          <aside className="work-console" aria-label="Project filters and stats">
            <div className="console-panel">
              <span className="console-eyebrow">Project Atlas</span>
              <h3>Pick a lane. The strongest case moves forward.</h3>
              <div className="console-stats">
                {projectStats.map((stat) => (
                  <div key={stat.label}>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="category-switcher" aria-label="Filter projects by category">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={category === activeCategory ? "is-active" : ""}
                  onClick={() => setActiveCategory(category)}
                >
                  <span>{category}</span>
                  <span>
                    {category === "All"
                      ? featuredProjects.length
                      : featuredProjects.filter((project) => project.category === category).length}
                  </span>
                </button>
              ))}
            </div>
          </aside>

          <div className="works-showcase">
            {spotlightProject && (
              <SpotlightProject
                project={spotlightProject}
                totalProjects={visibleProjects.length}
              />
            )}

            <div className="work-grid" aria-live="polite">
              {supportingProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index + 1} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
