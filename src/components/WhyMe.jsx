import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./whyme.css";

const reasons = [
  {
    id: "speed",
    title: "Fast Delivery",
    description: "I work efficiently without compromising quality. Most projects delivered within 1-2 weeks.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    id: "code",
    title: "Clean Code",
    description: "Maintainable, scalable code that other developers can easily work with. Best practices always.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    id: "design",
    title: "Modern Design",
    description: "Contemporary aesthetics with attention to detail. Your website will look premium and professional.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    ),
  },
  {
    id: "business",
    title: "Business Understanding",
    description: "I don't just code — I understand your goals. Every feature is built to drive your business forward.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 20V10M18 20V4M6 20v-4" />
      </svg>
    ),
  },
];

const WhyMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="whyme-section" ref={ref}>
      <div className="whyme-container">
        {/* Section Header */}
        <motion.div
          className="whyme-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Why Work With Me</span>
          <h2 className="section-title">
            The difference is in <span className="text-gradient">the details</span>
          </h2>
        </motion.div>

        {/* Reasons Grid */}
        <div className="whyme-grid">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.id}
              className="reason-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="reason-icon">
                {reason.icon}
              </div>
              <h3 className="reason-title">{reason.title}</h3>
              <p className="reason-description">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMe;
