import { useEffect, useState, useCallback, useRef, lazy, Suspense } from "react";
import Hero from "./components/hero/Hero";
import Header from "./components/header/Header";

const Works = lazy(() => import("./components/works/Works"));
const Contact = lazy(() => import("./components/contact/Contact"));
const Footer = lazy(() => import("./components/footer/Footer"));

function SectionFallback() {
  return (
    <div
      className="section-fallback"
      aria-busy="true"
      aria-label="Loading section"
    />
  );
}

function App() {
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const scrollTimeoutRef = useRef(null);
  const showScrollRef = useRef(false);

  const handleScroll = useCallback(() => {
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    scrollTimeoutRef.current = setTimeout(() => {
      const currentScrollY = window.scrollY;
      const shouldShow = currentScrollY > 300;
      if (shouldShow !== showScrollRef.current) {
        showScrollRef.current = shouldShow;
        setShowScrollBtn(shouldShow);
      }
    }, 16);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [handleScroll]);

  const scrollToTop = useCallback(() => {
    if ("scrollBehavior" in document.documentElement.style) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      const startPosition = window.pageYOffset;
      const startTime = performance.now();

      const animateScroll = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / 500, 1);
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
      {/* Fixed Header */}
      <Header />
      
      {/* 1. Hero - Strong Positioning */}
      <Hero />
      
      
      {/* 3. Projects - Real Work Showcase */}
      <Suspense fallback={<SectionFallback />}>
        <Works />
      </Suspense>
      
    
      {/* 6. Contact - CTA + Form */}
      <Suspense fallback={<SectionFallback />}>
        <Contact />
      </Suspense>
      
      {/* 7. Footer */}
      <Suspense fallback={<SectionFallback />}>
        <Footer />
      </Suspense>

      {/* Scroll to Top */}
      {showScrollBtn && (
        <button
          type="button"
          onClick={scrollToTop}
          className="scroll2Top visible"
          aria-label="Scroll to top"
        >
          <span className="icon-keyboard_arrow_up" aria-hidden />
        </button>
      )}
    </div>
  );
}

export default App;
