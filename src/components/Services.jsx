import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./services.css";

const services = [
  {
    id: "websites",
    title: "Custom Websites",
    description:
      "High-performance websites built with modern frameworks, crisp responsive UI, SEO foundations, and conversion-focused flows.",
    results: ["90+ Lighthouse Score", "Sub-second Feel"],
  },
  {
    id: "landing",
    title: "Landing Pages",
    description:
      "Premium landing pages with sharp visual hierarchy, persuasive CTA placement, and interactions that guide users without friction.",
    results: ["Higher Conversion", "Lead Generation"],
  },
  {
    id: "ui-systems",
    title: "UI Systems",
    description:
      "Reusable component systems that keep products consistent, scalable, and easier to evolve as the business grows.",
    results: ["Reusable Components", "Design Consistency"],
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="services-section" id="services" ref={ref}>
      <div className="services-container">
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">What I Do</span>
          <h2 className="section-title">
            Build systems for launches, brands, and products.
          </h2>
          <p className="section-subtitle">
            I focus on what matters: speed, conversion, accessibility, and
            modern user experience.
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.article
              key={service.id}
              className="service-card"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              <span className="service-number">0{index + 1}</span>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>

              <div className="service-results">
                {service.results.map((result) => (
                  <span key={result} className="result-tag">
                    {result}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
