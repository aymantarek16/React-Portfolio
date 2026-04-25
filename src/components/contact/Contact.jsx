import { useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion, useInView } from "framer-motion";
import "./contact.css";

const Contact = () => {
  const [state, handleSubmit] = useForm("xqkrnjjv");
  const formRef = useRef();
  const isInView = useInView(formRef, { once: true, margin: "-100px" });

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">
            Tell me what we&apos;re building next.
          </h2>
        </motion.div>

        <motion.div
          className="contact-content"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          ref={formRef}
        >
          <form onSubmit={handleSubmit} className="contact-form" noValidate>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Your Email
              </label>
              <input
                required
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="form-input"
                placeholder="you@example.com"
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
                Your Message
              </label>
              <textarea
                required
                name="message"
                id="message"
                className="form-textarea"
                placeholder="Tell me about your project..."
                rows={5}
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
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {state.submitting ? (
                <>
                  <span className="spinner" />
                  Sending...
                </>
              ) : (
                "Send Message"
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
                <span className="success-icon" aria-hidden>
                  OK
                </span>
                <p>Message sent! I&apos;ll reply within 24 hours.</p>
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
