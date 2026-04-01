import "./hero.css";
import devAnimation from "../../animation/dev.json";
import LazyLottie from "../LazyLottie";
import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const Hero = () => {
  const lottieRef = useRef();
  const containerRef = useRef();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  
  const smoothY = useSpring(y, { stiffness: 100, damping: 20 });
  const smoothOpacity = useSpring(opacity, { stiffness: 100, damping: 20 });

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(0.3);
    }
  }, []);

  return (
    <section ref={containerRef} className="hero" id="hero">
      {/* Background Elements */}
      <div className="hero-background">
        <div className="hero-gradient-1" />
        <div className="hero-gradient-2" />
        <div className="hero-particles" />
        <div className="hero-grid" />
      </div>

      <div className="hero-container">
        <div className="hero-content">
          {/* Avatar Section */}
          <motion.div 
            className="avatar-container"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="avatar-wrapper"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.img
                src="./ayman.png"
                className="avatar"
                alt="Portrait of Ayman Tarek"
                width={280}
                height={280}
                decoding="async"
                loading="eager"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  duration: 1.2, 
                  delay: 0.4,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ scale: 1.1 }}
              />
              <div className="avatar-ring" />
              <motion.div 
                className="verified-badge"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <span className="icon-verified" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Main Title */}
          <motion.div 
            className="title-container"
            style={{ y: smoothY, opacity: smoothOpacity, scale }}
          >
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 1, 
                delay: 0.6,
                type: "spring",
                stiffness: 100
              }}
            >
              <span className="title-line">
                <span className="title-text">Front-End</span>
                <span className="title-accent">Engineer</span>
              </span>
              <span className="title-line">
                <span className="title-text">&</span>
                <span className="title-accent">Digital</span>
                <span className="title-text">Experience</span>
              </span>
              <span className="title-line">
                <span className="title-accent">Designer</span>
              </span>
            </motion.h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            style={{ y: smoothY, opacity: smoothOpacity }}
          >
            Hi, I&apos;m <span className="highlight">Ayman Tarek</span> — a passionate Front-End Engineer with 3+ years of experience crafting fast, responsive, and engaging web applications. I love turning ideas into interactive digital products using React.js, Next.js, and modern front-end tools.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="cta-container"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            style={{ y: smoothY, opacity: smoothOpacity }}
          >
            <motion.a 
              href="/Front End Developer Cv.pdf" 
              download 
              className="cta-primary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="cta-text">Download CV</span>
              <span className="cta-icon icon-arrow-right" />
            </motion.a>
            
            <motion.a 
              href="#contact" 
              className="cta-secondary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="cta-text">Get In Touch</span>
              <span className="cta-icon icon-envelope" />
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="social-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            style={{ y: smoothY, opacity: smoothOpacity }}
          >
            {[
              { icon: "icon-linkedin", href: "https://www.linkedin.com/in/ayman-tarek-617b21229/", label: "LinkedIn" },
              { icon: "icon-github", href: "https://github.com/aymantarek16?tab=repositories", label: "GitHub" },
              { icon: "icon-instagram", href: "https://www.instagram.com/ayman_tarek74", label: "Instagram" },
              { icon: "icon-twitter", href: "https://twitter.com/aymantarekm17", label: "Twitter" }
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={social.label}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  delay: 1.6 + index * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  scale: 1.2, 
                  y: -5,
                  boxShadow: "0 10px 25px rgba(99, 102, 241, 0.3)"
                }}
                whileTap={{ scale: 0.9 }}
              >
                <span className={social.icon} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Animation Section */}
        <motion.div 
          className="hero-animation"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          style={{ y: smoothY, opacity: smoothOpacity }}
        >
          <div className="animation-wrapper">
            <LazyLottie
              lottieRef={lottieRef}
              animationData={devAnimation}
              className="lottie-animation"
            />
            <div className="animation-glow" />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
      >
        <motion.div 
          className="scroll-dot"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <span className="scroll-text">Scroll to explore</span>
      </motion.div>
    </section>
  );
};

export default Hero;
