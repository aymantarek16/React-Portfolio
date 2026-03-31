import { useState } from "react";
import "./main.css";
import myProjects from "./myProjects";
import { AnimatePresence, motion } from "framer-motion";

const Main = () => {
  const [currentActive, setCurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);
  const [visibleCount, setVisibleCount] = useState(6);
  const [hoveredProject, setHoveredProject] = useState(null);

  const categories = [
    { id: "all", label: "All Projects", icon: "🌐" },
    { id: "next", label: "Next.js", icon: "⚡" },
    { id: "react", label: "React.js", icon: "⚛️" },
    { id: "ui", label: "UI Design", icon: "🎨" }
  ];

  const handleCategoryClick = (categoryId) => {
    setCurrentActive(categoryId);
    const newArr = categoryId === "all" 
      ? myProjects 
      : myProjects.filter((item) => item.category === categoryId);
    setArr(newArr);
    setVisibleCount(6);
  };

  const handleLoadMore = () => {
    if (visibleCount >= arr.length) {
      setVisibleCount(6);
      setTimeout(() => {
        const isMobile = window.innerWidth <= 768;
        const offset = isMobile ? 300 : 750;
        window.scrollTo({
          top: window.scrollY - offset,
          behavior: "smooth",
        });
      }, 100);
    } else {
      setVisibleCount(arr.length);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      }
    },
  };

  return (
    <main className="projects-section" id="projects">
      <div className="projects-container">
        {/* Header */}
        <motion.div 
          className="projects-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">
            <span className="title-gradient">Featured Projects</span>
          </h2>
          <p className="section-subtitle">
            Explore my latest work and creative solutions built with modern technologies
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div 
          className="category-filters"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`category-btn ${currentActive === category.id ? "active" : ""}`}
              onClick={() => handleCategoryClick(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="category-icon">{category.icon}</span>
              <span className="category-label">{category.label}</span>
              {currentActive === category.id && (
                <motion.div 
                  className="active-indicator"
                  layoutId="activeCategory"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence mode="wait">
            {arr.slice(0, visibleCount).map((project, index) => (
              <motion.article
                key={`${project.projectTitle}-${index}`}
                className="project-card"
                variants={itemVariants}
                layout
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -50 }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  delay: index * 0.05
                }}
                onHoverStart={() => setHoveredProject(project.projectTitle)}
                onHoverEnd={() => setHoveredProject(null)}
                whileHover={{ 
                  y: -10,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              >
                {/* Project Image */}
                <div className="project-image-container">
                  <motion.img
                    src={project.imgPath}
                    alt={project.projectTitle}
                    className="project-image"
                    loading="lazy"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="image-overlay" />
                  {hoveredProject === project.projectTitle && (
                    <motion.div 
                      className="quick-actions"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                    >
                      <motion.a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="quick-action-btn primary"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <span className="icon-link" />
                        <span>Live Demo</span>
                      </motion.a>
                      <motion.a
                        href={project.githup}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="quick-action-btn secondary"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <span className="icon-github" />
                        <span>Code</span>
                      </motion.a>
                    </motion.div>
                  )}
                </div>

                {/* Project Content */}
                <div className="project-content">
                  <div className="project-header">
                    <h3 className="project-title">{project.projectTitle}</h3>
                    <div className="project-category">
                      {project.category === "next" && "⚡ Next.js"}
                      {project.category === "react" && "⚛️ React"}
                      {project.category === "ui" && "🎨 UI Design"}
                    </div>
                  </div>
                  
                  <p className="project-description">{project.subTitle}</p>
                  
                  <div className="project-footer">
                    <div className="project-tech">
                      {project.category === "next" && (
                        <>
                          <span className="tech-tag">Next.js</span>
                          <span className="tech-tag">TypeScript</span>
                        </>
                      )}
                      {project.category === "react" && (
                        <>
                          <span className="tech-tag">React</span>
                          <span className="tech-tag">JavaScript</span>
                        </>
                      )}
                      {project.category === "ui" && (
                        <>
                          <span className="tech-tag">HTML</span>
                          <span className="tech-tag">CSS</span>
                        </>
                      )}
                    </div>
                    
                    <div className="project-links">
                      <motion.a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        whileHover={{ scale: 1.1, x: 2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <span className="icon-link" />
                      </motion.a>
                      <motion.a
                        href={project.githup}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        whileHover={{ scale: 1.1, x: 2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <span className="icon-github" />
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* Card Border Animation */}
                <div className="card-border" />
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        {arr.length > 6 && (
          <motion.div 
            className="load-more-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.button
              onClick={handleLoadMore}
              className="load-more-btn"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="btn-text">
                {visibleCount >= arr.length ? "Show Less" : "Load More"}
              </span>
              <span className={`btn-icon ${visibleCount >= arr.length ? "up" : "down"}`}>
                {visibleCount >= arr.length ? "×" : "+"}
              </span>
            </motion.button>
          </motion.div>
        )}
      </div>
    </main>
  );
};

export default Main;
