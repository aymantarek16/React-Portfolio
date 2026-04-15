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
          {/* Decorative Elements */}
          <div className="finalcta-glow" />
          
          {/* Message */}
          <h2 className="finalcta-title">
            If you&apos;re serious about building
            <br />
            something <span className="text-gradient">high-quality</span>,
            <br />
            let&apos;s talk.
          </h2>
          
          <p className="finalcta-subtitle">
            I work with clients who value quality over shortcuts.
            <br />
            If that&apos;s you, we should work together.
          </p>
          
          {/* CTA Button */}
          <motion.a
            href="#contact"
            className="finalcta-btn"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span>Start Your Project Now</span>
            <svg
              className="btn-arrow"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.a>
          
          {/* Trust Note */}
          <p className="finalcta-note">
            Response within 24 hours · No commitment required
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
