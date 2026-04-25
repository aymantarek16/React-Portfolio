import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./finalcta.css";

const FinalCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="finalcta-section" ref={ref}>
      <div className="finalcta-container">
        <motion.div
          className="finalcta-content"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="finalcta-eyebrow">Ready for the next build?</span>
          <h2 className="finalcta-title">
            Let&apos;s turn your idea into a premium web experience.
          </h2>

          <p className="finalcta-subtitle">
            I work with clients who value quality over shortcuts, and want a
            product that looks sharp, performs fast, and feels memorable.
          </p>

          <motion.a
            href="#contact"
            className="finalcta-btn"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Start Your Project Now
            <span aria-hidden>↗</span>
          </motion.a>

          <p className="finalcta-note">
            Response within 24 hours · No commitment required
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
