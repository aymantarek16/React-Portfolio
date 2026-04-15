import "./footer.css";
import { motion } from "framer-motion";
import { useCallback } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 15,
      }
    }
  };

// Social icons as SVG components for performance
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

  const quickLinks = [
    { href: "#hero", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" }
  ];

  // Smooth scroll handler
  const handleSmoothScroll = useCallback((e, href) => {
    e.preventDefault();
    const targetId = href.substring(1); // Remove #
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, []);

  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        {/* Footer Content */}
        <motion.div 
          className="footer-content"
          variants={footerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="brand-logo">
              <span className="logo-icon">💼</span>
              <h3 className="brand-name">Ayman Tarek</h3>
            </div>
            <p className="brand-description">
              Passionate Front-End Engineer crafting exceptional digital experiences with modern web technologies.
            </p>
              {/* Social Links */}
                    <motion.div
                      className="hero-social"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                    >
                      <span className="social-label">Follow me</span>
                      <div className="social-links">
                        <a
                          href="https://www.linkedin.com/in/ayman-tarek-617b21229"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="social-link"
                          aria-label="LinkedIn"
                        >
                          <LinkedInIcon />
                        </a>
                         <a
                          href="https://github.com/aymantarek16"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="social-link"
                          aria-label="GitHub"
                        >
                          <GitHubIcon />
                        </a>
                        <a
                          href="https://web.facebook.com/aymaantarek"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="social-link"
                          aria-label="Facebook"
                        >
                          <FacebookIcon />
                        </a>
                        <a
                          href="https://www.instagram.com/ayman_tarek74"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="social-link"
                          aria-label="Instagram"
                        >
                          <InstagramIcon />
                        </a>
                       
                      </div>
                    </motion.div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="section-title">Quick Links</h4>
            <ul className="links-list">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <motion.a
                    href={link.href}
                    className="link-item"
                    whileHover={{ x: 5 }}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                  >
                    <span className="link-icon">→</span>
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="section-title">Get In Touch</h4>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <a href="mailto:aymantarekm16@gmail.com" className="contact-link">
                  aymantarekm16@gmail.com
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span className="contact-text">Available for remote work worldwide</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">⚡</span>
                <span className="contact-text">Response time: Within 24 hours</span>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="footer-section">
            <h4 className="section-title">Tech Stack</h4>
            <div className="tech-stack">
              <span className="tech-tag">React.js</span>
              <span className="tech-tag">Next.js</span>
              <span className="tech-tag">JavaScript</span>
              <span className="tech-tag">CSS3</span>
              <span className="tech-tag">HTML5</span>
            </div>
          </div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="bottom-content">
            <p className="copyright">
              &copy; {currentYear} Ayman Tarek. All rights reserved.
            </p>
            <div className="bottom-links">
              <motion.button
                type="button"
                className="bottom-link"
                whileHover={{ scale: 1.05 }}
              >
                Privacy Policy
              </motion.button>
              <motion.button
                type="button"
                className="bottom-link"
                whileHover={{ scale: 1.05 }}
              >
                Terms of Service
              </motion.button>
            </div>
          </div>
          
          {/* Decorative Line */}
          <div className="decorative-line">
            <div className="line-gradient" />
          </div>
        </motion.div>
      </div>

      {/* Background Effects */}
      <div className="footer-background">
        <div className="footer-gradient-1" />
        <div className="footer-gradient-2" />
      </div>
    </footer>
  );
};

export default Footer;
