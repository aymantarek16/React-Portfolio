import Lottie from "lottie-react";
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
      }
    },
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        {/* Section Header */}
        <motion.div 
          className="contact-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="header-icon">
            <span className="icon-envelope" />
          </div>
          <h2 className="section-title">
            <span className="title-gradient">Get In Touch</span>
          </h2>
          <p className="section-subtitle">
            Feel free to reach out for any inquiries or just to say hello!
          </p>
        </motion.div>

        {/* Contact Content */}
        <motion.div 
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          ref={formRef}
        >
          {/* Contact Form */}
          <motion.div 
            className="contact-form-container"
            variants={itemVariants}
          >
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  <span className="label-icon">📧</span>
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
                  <span className="label-icon">💬</span>
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
                    <span className="btn-icon">📤</span>
                    <span>Send Message</span>
                  </div>
                )}
              </motion.button>

              {/* Success Message */}
              {state.succeeded && (
                <motion.div 
                  className="success-message"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="success-content">
                    <Lottie
                      loop={false}
                      style={{ height: 40, width: 40 }}
                      animationData={doneAnimation}
                    />
                    <div className="success-text">
                      <h4>Message Sent Successfully!</h4>
                      <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Animation Section */}
          <motion.div 
            className="contact-animation-container"
            variants={itemVariants}
          >
            <div className="animation-wrapper">
              <Lottie
                className="contact-animation"
                style={{ height: 350 }}
                animationData={contactAnimation}
              />
              <div className="animation-glow" />
            </div>
            
          
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
