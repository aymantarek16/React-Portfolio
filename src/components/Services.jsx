import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./services.css";

const services = [
  {
    id: "websites",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    title: "Custom Websites",
    description: "High-performance websites built with modern frameworks. Fast loading, SEO optimized, and designed to convert visitors into customers.",
    results: ["90+ Lighthouse Score", "Sub-second Load Time"],
  },
  {
    id: "landing",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Landing Pages",
    description: "Conversion-focused landing pages that drive results. A/B tested layouts, compelling CTAs, and analytics integration.",
    results: ["Higher Conversion", "Lead Generation"],
  },
  {
    id: "ui-systems",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M4 8h16M8 4v16" />
      </svg>
    ),
    title: "UI Systems",
    description: "Scalable design systems and component libraries. Consistent interfaces, faster development, and easier maintenance.",
    results: ["Reusable Components", "Design Consistency"],
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="services-section" ref={ref}>
      <div className="services-container">
        {/* Section Header */}
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">What I Do</span>
          <h2 className="section-title">
            Services built for <span className="text-gradient">results</span>
          </h2>
          <p className="section-subtitle">
            I focus on what matters — speed, conversion, and modern user experience
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="service-card"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              {/* Glow Effect */}
              <div className="service-glow" />
              
              {/* Icon */}
              <div className="service-icon">
                {service.icon}
              </div>
              
              {/* Content */}
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              
              {/* Results */}
              <div className="service-results">
                {service.results.map((result) => (
                  <span key={result} className="result-tag">
                    <span className="result-dot" />
                    {result}
                  </span>
                ))}
              </div>
              
              {/* Border */}
              <div className="service-border" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
