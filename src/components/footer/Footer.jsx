import { useCallback } from "react";
import { motion } from "framer-motion";
import SocialIcon from "../SocialIcon";
import "./footer.css";

const quickLinks = [
  { href: "#hero", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

const socials = [
  { href: "https://www.linkedin.com/in/ayman-tarek-617b21229", label: "LinkedIn" },
  { href: "https://github.com/aymantarek16", label: "GitHub" },
  { href: "https://web.facebook.com/aymaantarek", label: "Facebook" },
  { href: "https://www.instagram.com/ayman_tarek74", label: "Instagram" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleSmoothScroll = useCallback((event, href) => {
    event.preventDefault();
    const target = document.getElementById(href.substring(1));
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65 }}
        >
          <div className="footer-brand">
            <a href="#hero" className="footer-logo" aria-label="Ayman Tarek home">
              <span>AT</span>
              <strong>Ayman Tarek</strong>
            </a>
            <p>
              Front-End Developer crafting fast, premium, and memorable web
              experiences with React and Next.js.
            </p>
            <div className="footer-social" aria-label="Social links">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <SocialIcon label={social.label} />
                </a>
              ))}
            </div>
          </div>

          <div className="footer-column">
            <h3>Navigate</h3>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={(e) => handleSmoothScroll(e, link.href)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h3>Contact</h3>
            <ul>
              <li>
                <a href="mailto:aymantarekm16@gmail.com">
                  aymantarekm16@gmail.com
                </a>
              </li>
              <li>Remote worldwide</li>
              <li>Response within 24 hours</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Stack</h3>
            <div className="footer-stack">
              {["React", "Next.js", "JavaScript", "CSS", "HTML"].map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Ayman Tarek. All rights reserved.</p>
          <a href="/Front End Developer Ayman Tarek.pdf" download>
            Download CV
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
