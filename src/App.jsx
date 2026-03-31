import { useEffect, useState, useCallback, useRef } from "react";
import Hero from "./components/2-hero/Hero";
import Main from "./components/3-main/Main";
import Contact from "./components/4-contact/Contact";
import Footer from "./components/5-footer/Footer";
import Header from "./components/1-header/Header";

function App() {
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const scrollTimeoutRef = useRef(null);
  const lastScrollY = useRef(0);

  const handleScroll = useCallback(() => {
    // Clear existing timeout
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    // Throttle scroll events
    scrollTimeoutRef.current = setTimeout(() => {
      const currentScrollY = window.scrollY;
      const shouldShow = currentScrollY > 300;
      
      // Only update state if value actually changed
      if (shouldShow !== showScrollBtn) {
        setShowScrollBtn(shouldShow);
      }
      
      lastScrollY.current = currentScrollY;
    }, 16); // ~60fps
  }, [showScrollBtn]);

  useEffect(() => {
    // Use passive listener for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [handleScroll]);

  const scrollToTop = useCallback(() => {
    // Use performance-oriented scroll
    if ('scrollBehavior' in document.documentElement.style) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      // Fallback for older browsers
      const startPosition = window.pageYOffset;
      const startTime = performance.now();
      
      const animateScroll = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / 500, 1); // 500ms duration
        
        window.scrollTo(0, startPosition * (1 - progress));
        
        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      };
      
      requestAnimationFrame(animateScroll);
    }
  }, []);

  return (
    <div className="app">
      <Header />
      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />

      {/* Enhanced Scroll to Top Button */}
      {showScrollBtn && (
        <button
          onClick={scrollToTop}
          className={`scroll2Top visible`}
          aria-label="Scroll to top"
        >
          <span className="icon-keyboard_arrow_up" />
        </button>
      )}
    </div>
  );
}

export default App;
