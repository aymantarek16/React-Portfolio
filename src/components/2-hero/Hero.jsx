/* eslint-disable react/no-unescaped-entities */
import "./hero.css";
import devAnimation from "../../animation/dev.json";
import Lottie from "lottie-react";
import { useRef } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  
  const lottieRef = useRef();
  return (
    <section className="hero flex" style={{ justifyContent: "space-between" }}>
      <div className="left-section">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1)" }}
            transition={{ damping: 7, type: "spring", stiffness: 18 }}
            src="./ayman.png"
            className="avatar"
            alt="ayman_avatar"
          />
          
          <div className="icon-verified"></div>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, type: "spring", stiffness: 80 }}
          className="title"
        >
          Front-End Developer{" "}
          <span className="highlight">& Digital Experience Designer</span>
        </motion.h1>

        <p className="sub-title">
          Hi, I’m Ayman Tarek — a passionate Front-End Developer with 3+ years
          of experience crafting fast, responsive, and engaging web
          applications. I love turning ideas into interactive digital products
          using React.js, Next.js, and modern front-end tools. My focus is on
          creating clean designs, smooth animations, and delivering user
          experiences that truly stand out.
        </p>

        <div className="all-icons flex">
          <a
            className="icon icon-linkedin"
            href="https://www.linkedin.com/in/ayman-tarek-617b21229/"
            target="_blank"
          ></a>
          <a
            className="icon icon-github"
            href="https://github.com/aymantarek16?tab=repositories"
            target="_blank"
          ></a>
          <a
            className="icon icon-instagram"
            href="https://www.instagram.com/ayman_tarek74"
            target="_blank"
          ></a>

          <a
            className="icon icon-twitter"
            href="https://twitter.com/aymantarekm17"
            target="_blank"
          ></a>
        </div>

        {/* Download CV */}
        <div className="cv">
          <a href="/Front End Developer Cv.pdf" download className="cvBtn">
            Download CV
          </a>
        </div>
      </div>

      <div className="right-section animation ">
        <Lottie
          lottieRef={lottieRef}
          className=""
          onLoadedImages={() => {
            // link : https://lottiereact.com/
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
};

export default Hero;
