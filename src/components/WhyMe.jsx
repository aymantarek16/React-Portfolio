import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./whyme.css";

const reasons = [
  {
    id: "speed",
    title: "Fast Delivery",
    description:
      "Efficient execution without lowering the quality bar. Most builds move from brief to launch in focused weekly cycles.",
  },
  {
    id: "code",
    title: "Clean Code",
    description:
      "Maintainable React structure, clear CSS architecture, and components other developers can confidently extend.",
  },
  {
    id: "design",
    title: "Modern Design",
    description:
      "Premium UI details, responsive rhythm, polished motion, and visual systems that feel intentional.",
  },
  {
    id: "business",
    title: "Business Understanding",
    description:
      "Every section is shaped around trust, clarity, conversion, and the goals behind the interface.",
  },
];

const timeline = [
  "Discovery and direction",
  "Interface system",
  "React implementation",
  "Launch optimization",
];

const WhyMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="whyme-section" id="why-me" ref={ref}>
      <div className="whyme-container">
        <motion.div
          className="whyme-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Why Work With Me</span>
          <h2 className="section-title">
            A premium process from first idea to production.
          </h2>
        </motion.div>

        <div className="whyme-layout">
          <div className="whyme-grid">
            {reasons.map((reason, index) => (
              <motion.article
                key={reason.id}
                className="reason-card"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <span className="reason-index">0{index + 1}</span>
                <h3 className="reason-title">{reason.title}</h3>
                <p className="reason-description">{reason.description}</p>
              </motion.article>
            ))}
          </div>

          <motion.aside
            className="experience-timeline"
            initial={{ opacity: 0, x: 28 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.18 }}
            aria-label="Project process timeline"
          >
            <span className="timeline-label">Experience Flow</span>
            <ol>
              {timeline.map((item, index) => (
                <li key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{item}</strong>
                </li>
              ))}
            </ol>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};

export default WhyMe;
