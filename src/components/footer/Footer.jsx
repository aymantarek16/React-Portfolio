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

  const socialLinks = [
    { icon: "icon-linkedin", href: "https://www.linkedin.com/in/ayman-tarek-617b21229/", label: "LinkedIn" },
    { icon: "icon-github", href: "https://github.com/aymantarek16?tab=repositories", label: "GitHub" },
    { icon: "icon-instagram", href: "https://www.instagram.com/ayman_tarek74", label: "Instagram" },
    { icon: "icon-twitter", href: "https://twitter.com/aymantarekm17", label: "Twitter" }
  ];

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
            <div className="social-links">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className={social.icon} />
                </motion.a>
              ))}
            </div>
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
