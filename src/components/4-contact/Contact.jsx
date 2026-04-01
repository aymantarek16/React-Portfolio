import LazyLottie from "../LazyLottie";
import doneAnimation from "../../animation/done.json";
import contactAnimation from "../../animation/contact.json";
import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xqkrnjjv");
  const formRef = useRef();
  const isInView = useInView(formRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="header-icon">
            <span className="icon-envelope" aria-hidden />
          </div>
          <h2 className="section-title">
            <span className="title-gradient">Get In Touch</span>
          </h2>
          <p className="section-subtitle">
            Feel free to reach out for any inquiries or just to say hello!
          </p>
        </motion.div>

        <motion.div
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          ref={formRef}
        >
          <motion.div className="contact-form-container" variants={itemVariants}>
            <form onSubmit={handleSubmit} className="contact-form" noValidate>
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  <span className="label-icon" aria-hidden>
                    📧
                  </span>
                  Email Address
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="form-input"
                  placeholder="your.email@example.com"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="form-error"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  <span className="label-icon" aria-hidden>
                    💬
                  </span>
                  Your Message
                </label>
                <textarea
                  required
                  name="message"
                  id="message"
                  className="form-textarea"
                  placeholder="Tell me about your project, ideas, or just say hello..."
                  rows={6}
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                  className="form-error"
                />
              </div>

              <motion.button
                type="submit"
                disabled={state.submitting}
                className="submit-btn"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {state.submitting ? (
                  <div className="btn-content">
                    <div className="spinner" />
                    <span>Sending...</span>
                  </div>
                ) : (
                  <div className="btn-content">
                    <span className="btn-icon" aria-hidden>
                      📤
                    </span>
                    <span>Send Message</span>
                  </div>
                )}
              </motion.button>

              {state.succeeded && (
                <motion.div
                  className="success-message"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  role="status"
                >
                  <div className="success-content">
                    <LazyLottie
                      loop={false}
                      style={{ height: 40, width: 40 }}
                      animationData={doneAnimation}
                    />
                    <div className="success-text">
                      <h4>Message Sent Successfully!</h4>
                      <p>
                        Thank you for reaching out. I&apos;ll get back to you as
                        soon as possible.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </form>
          </motion.div>

          <motion.div
            className="contact-animation-container"
            variants={itemVariants}
          >
            <div className="animation-wrapper">
              <LazyLottie
                className="contact-animation"
                style={{ height: 350 }}
                animationData={contactAnimation}
              />
              <div className="animation-glow" aria-hidden />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
