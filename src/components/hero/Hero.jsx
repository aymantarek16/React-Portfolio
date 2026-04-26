import { motion } from "framer-motion";
import SocialIcon from "../SocialIcon";
import "./hero.css";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ayman-tarek-617b21229" },
  { label: "GitHub", href: "https://github.com/aymantarek16" },
  { label: "Facebook", href: "https://web.facebook.com/aymaantarek" },
  { label: "Instagram", href: "https://www.instagram.com/ayman_tarek74" },
];

const metrics = [
  { value: "20+", label: "Completed Projects" },
  { value: "4+", label: "Years" },
  { value: "90+", label: "Performance" },
];

const stack = ["React", "Next.js", "TypeScript", "Supabase", "Firebase"];

const Hero = () => {
  return (
    <section className="hero" id="hero" aria-label="Introduction">
      <div className="hero-stage" aria-hidden="true">
        <div className="hero-scanline" />
        <div className="hero-beam hero-beam-a" />
        <div className="hero-beam hero-beam-b" />
      </div>

      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <div className="hero-identity">
            <span className="hero-badge">
              <span className="badge-dot" />
              Available for premium builds
            </span>
            <span className="hero-job-title">Front-End Developer</span>
          </div>

          <h1 className="hero-headline">
            build web apps that look premium
            <span className="text-gradient"> and drive real business growth.</span>
          </h1>

          <p className="hero-subheadline">
            Design and develop fast React and Next.js products for brands, clinics,
            restaurants, gyms, and startups — with clean architecture, sharp UI,
            booking flows, dashboards, and conversion-focused experiences.
          </p>

          <div className="hero-cta" aria-label="Primary actions">
            <a href="#projects" className="cta-primary-large">
              View Projects
              <span className="cta-arrow" aria-hidden="true">↗</span>
            </a>

            <a href="#contact" className="cta-secondary-large">
              Start a project
            </a>

            <a
              href="/Front End Developer Ayman Tarek.pdf"
              download
              className="cta-cv"
              aria-label="Download CV"
            >
              CV
            </a>
          </div>

          <div className="hero-stack" aria-label="Core technologies">
            {stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          <motion.div
            className="hero-social"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.45, ease: "easeOut" }}
          >
            <span>Connect</span>
            <div className="social-links">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.label}
                >
                  <SocialIcon label={social.label} />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.12, ease: "easeOut" }}
        >
          <div className="visual-panel">
            <div className="visual-topbar">
              <span />
              <span />
              <span />
            </div>

            <div className="portrait-frame">
              <img
                src="/ayman.png"
                alt="Ayman Tarek - Front-End Developer"
                className="hero-image"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
            </div>

            <div className="hero-metrics">
              {metrics.map((metric) => (
                <div key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;