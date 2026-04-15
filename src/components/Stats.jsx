import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./stats.css";

const stats = [
  { value: "20+", label: "Projects Delivered", description: "Production-ready applications" },
  { value: "3+", label: "Years Experience", description: "In modern web development" },
  { value: "100%", label: "Client Satisfaction", description: "Commitment to excellence" },
  { value: "5⭐", label: "Code Quality", description: "Clean, scalable architecture" },
];

const trustLogos = [
  "Trusted by startups & agencies",
  "Available worldwide",
];

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="stats-section" ref={ref}>
      <div className="stats-container">
        {/* Section Header */}
        <motion.div
          className="stats-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Proof of Work</span>
          <h2 className="section-title">
            Numbers that <span className="text-gradient">speak</span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="stat-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
              <span className="stat-desc">{stat.description}</span>
              <div className="stat-glow" />
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          className="trust-bar"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {trustLogos.map((text, index) => (
            <div key={index} className="trust-item">
              <span className="trust-dot" />
              <span className="trust-text">{text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
