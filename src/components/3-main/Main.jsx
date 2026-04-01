import { useMemo, useState } from "react";
import "./main.css";
import myProjects from "./myProjects";
import { AnimatePresence, motion } from "framer-motion";

const categories = [
  { id: "all", label: "All Projects", icon: "🌐" },
  { id: "next", label: "Next.js", icon: "⚡" },
  { id: "react", label: "React.js", icon: "⚛️" },
  { id: "ui", label: "UI Design", icon: "🎨" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    scale: 0.98,
    transition: {
      duration: 0.25,
      ease: "easeOut",
    },
  },
};

const Main = () => {
  const [currentActive, setCurrentActive] = useState("all");
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredProjects = useMemo(() => {
    if (currentActive === "all") return myProjects;
    return myProjects.filter((item) => item.category === currentActive);
  }, [currentActive]);

  const visibleProjects = useMemo(() => {
    return filteredProjects.slice(0, visibleCount);
  }, [filteredProjects, visibleCount]);

  const handleCategoryClick = (categoryId) => {
    setCurrentActive(categoryId);
    setVisibleCount(6);
  };

  const handleLoadMore = () => {
    if (visibleCount >= filteredProjects.length) {
      setVisibleCount(6);

      setTimeout(() => {
        const section = document.getElementById("projects");
        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    } else {
      setVisibleCount((prev) => Math.min(prev + 6, filteredProjects.length));
    }
  };

  const getProjectCategoryLabel = (category) => {
    switch (category) {
      case "next":
        return "⚡ Next.js";
      case "react":
        return "⚛️ React";
      case "ui":
        return "🎨 UI Design";
      default:
        return "✨ Project";
    }
  };

  const getProjectTechs = (project) => {
    if (Array.isArray(project.techStack) && project.techStack.length > 0) {
      return project.techStack.slice(0, 4);
    }

    switch (project.category) {
      case "next":
        return ["Next.js", "tailwindCss"];
      case "react":
        return ["React.js", "Css"];
      case "ui":
        return ["HTML", "CSS", "JavaScript"];
      default:
        return ["Frontend", "UI"];
    }
  };

  return (
    <main className="projects-section" id="projects">
      <div className="projects-bg-orb orb-1" aria-hidden />
      <div className="projects-bg-orb orb-2" aria-hidden />

      <div className="projects-container">
        <motion.div
          className="projects-header"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="section-title">
            <span className="title-gradient">Featured Projects</span>
          </h2>

          <p className="section-subtitle">
            A curated selection of products, interfaces, and frontend builds
            crafted with strong visual direction and clean user experience.
          </p>
        </motion.div>

        <motion.div
          className="category-filters"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              type="button"
              className={`category-btn ${
                currentActive === category.id ? "active" : ""
              }`}
              onClick={() => handleCategoryClick(category.id)}
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              aria-pressed={currentActive === category.id}
            >
              <span className="category-icon">{category.icon}</span>
              <span className="category-label">{category.label}</span>

              {currentActive === category.id && (
                <motion.div
                  className="active-indicator"
                  layoutId="activeCategory"
                  transition={{ type: "spring", stiffness: 320, damping: 28 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentActive}
            className="projects-grid"
            variants={gridVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {visibleProjects.map((project, index) => {
              const githubLink = project.github || project.githup || "#";
              const liveDemo = project.liveDemo || "#";
              const projectId =
                project.id || `${project.projectTitle}-${index}`;
              const techs = getProjectTechs(project);

              return (
                <motion.article
                  key={projectId}
                  className="project-card"
                  variants={cardVariants}
                  tabIndex={0}
                >
                  <div className="project-image-container">
                    <img
                      src={project.imgPath}
                      alt={project.projectTitle}
                      className="project-image"
                      loading="lazy"
                      decoding="async"
                    />

                    <div className="image-overlay" aria-hidden />

                    <div className="project-badge">
                      {getProjectCategoryLabel(project.category)}
                    </div>

                    <div className="quick-actions">
                      {liveDemo !== "#" && (
                        <a
                          href={liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="quick-action-btn primary"
                          aria-label={`Open live demo for ${project.projectTitle}`}
                        >
                          Live Demo
                        </a>
                      )}

                      {githubLink !== "#" && (
                        <a
                          href={githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="quick-action-btn secondary"
                          aria-label={`Open source code for ${project.projectTitle}`}
                        >
                          Source Code
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="project-content">
                    <div className="project-top">
                      <h3 className="project-title">{project.projectTitle}</h3>
                    </div>

                    <p className="project-description">{project.subTitle}</p>

                    <div className="project-footer">
                      <div className="project-tech">
                        {techs.map((tech, techIndex) => (
                          <span
                            className="tech-tag"
                            key={`${tech}-${techIndex}`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="project-links">
                        {liveDemo !== "#" && (
                          <motion.a
                            href={liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                            whileHover={{ scale: 1.06 }}
                            whileTap={{ scale: 0.96 }}
                            aria-label={`Open live demo for ${project.projectTitle}`}
                            title="Live Demo"
                          >
                            ↗
                          </motion.a>
                        )}

                        {githubLink !== "#" && (
                          <motion.a
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                            whileHover={{ scale: 1.06 }}
                            whileTap={{ scale: 0.96 }}
                            aria-label={`Open source code for ${project.projectTitle}`}
                            title="Source Code"
                          >
                            {"</>"}
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="card-border" aria-hidden />
                </motion.article>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length > 6 && (
          <motion.div
            className="load-more-container"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.button
              type="button"
              onClick={handleLoadMore}
              className="load-more-btn"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="btn-text">
                {visibleCount >= filteredProjects.length
                  ? "Show Less"
                  : "Load More Projects"}
              </span>

              <span
                className={`btn-icon ${
                  visibleCount >= filteredProjects.length ? "up" : "down"
                }`}
              >
                {visibleCount >= filteredProjects.length ? "−" : "+"}
              </span>
            </motion.button>
          </motion.div>
        )}
      </div>
    </main>
  );
};

export default Main;
