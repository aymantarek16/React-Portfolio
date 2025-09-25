import "./footer.css";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="flex footer"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <p>© <span className="year">2025</span> Ayman Tarek. All rights reserved.</p>
    </motion.footer>
  );
};

export default Footer;
