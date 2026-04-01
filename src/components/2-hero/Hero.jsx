import "./hero.css";
import devAnimation from "../../animation/dev.json";
import LazyLottie from "../LazyLottie";
import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const socialLinks = [
  {
    icon: "icon-linkedin",
    href: "https://www.linkedin.com/in/ayman-tarek-617b21229/",
    label: "LinkedIn",
  },
  {
    icon: "icon-github",
    href: "https://github.com/aymantarek16?tab=repositories",
    label: "GitHub",
  },
  {
    icon: "icon-instagram",
    href: "https://www.instagram.com/ayman_tarek74",
    label: "Instagram",
  },
  {
    icon: "icon-twitter",
    href: "https://twitter.com/aymantarekm17",
    label: "Twitter",
  },
];

const stats = [
  { value: "+3", label: "Years Experience" },
  { value: "+20", label: "Projects Shipped" },
  { value: "100%", label: "Focus on UX" },
];

const Hero = () => {
  const lottieRef = useRef();
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  // const opacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.75], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.96]);

  const smoothY = useSpring(y, { stiffness: 120, damping: 22 });
  const smoothOpacity = useSpring(opacity, { stiffness: 120, damping: 22 });

  useEffect(() => {
    lottieRef.current?.setSpeed?.(0.35);
  }, []);

  return (
    <section
      ref={containerRef}
      className="hero"
      id="hero"
      aria-label="Introduction"
    >
      <div className="hero-background" aria-hidden>
        <div className="hero-gradient hero-gradient--primary" />
        <div className="hero-gradient hero-gradient--secondary" />
        <div className="hero-noise" />
        <div className="hero-grid" />
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <motion.div
            className="avatar-container"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="avatar-wrapper">
              <motion.img
                src="./ayman.png"
                className="avatar"
                alt="Portrait of Ayman Tarek"
                width={280}
                height={280}
                decoding="async"
                loading="eager"
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.9,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
              <div className="avatar-ring" aria-hidden />
              <motion.div
                className="verified-badge"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.45, delay: 0.65 }}
                aria-hidden
              >
                <span className="icon-verified" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="title-block"
            style={{ y: smoothY, opacity: smoothOpacity, scale }}
          >
            

            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.75,
                delay: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <span className="title-line">
                <span className="title-text">Front-End</span>{" "}
                <span className="title-accent">Engineer</span>
              </span>
              <span className="title-line">
                <span className="title-text">&amp;</span>{" "}
                <span className="title-accent">Digital</span>{" "}
                <span className="title-text">Experience</span>
              </span>
              <span className="title-line">
                <span className="title-accent">Designer</span>
              </span>
            </motion.h1>

            <motion.p
              className="hero-desc"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.5 }}
            >
              Hi, I&apos;m <strong className="hero-name">Ayman Tarek</strong>
              — I build fast, accessible interfaces with{" "}
              <span className="hero-desc__emphasis">React</span> &{" "}
              <span className="hero-desc__emphasis">Next.js</span>, turning
              product ideas into polished web experiences.
            </motion.p>

            <motion.ul
              className="hero-stats"
              role="list"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.58 }}
            >
              {stats.map((item) => (
                <li key={item.label} className="hero-stat">
                  <span className="hero-stat__value">{item.value}</span>
                  <span className="hero-stat__label">{item.label}</span>
                </li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            className="cta-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.72 }}
            style={{ y: smoothY, opacity: smoothOpacity }}
          >
            <motion.a
              href="/Front End Developer Cv.pdf"
              download
              className="cta-primary"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="cta-text">Download CV</span>
              <span className="cta-icon icon-arrow-right" aria-hidden />
            </motion.a>

            <motion.a
              href="#contact"
              className="cta-secondary"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="cta-text">Get In Touch</span>
              <span className="cta-icon icon-envelope" aria-hidden />
            </motion.a>
          </motion.div>

          <motion.div
            className="social-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            style={{ y: smoothY, opacity: smoothOpacity }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={social.label}
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: 0.9 + index * 0.06,
                  type: "spring",
                  stiffness: 260,
                  damping: 22,
                }}
                whileHover={{ scale: 1.08, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className={social.icon} aria-hidden />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="hero-animation"
          aria-hidden
          initial={{ opacity: 0, x: 48 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
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

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <span className="scroll-line" aria-hidden />
        <span className="scroll-text">Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;
