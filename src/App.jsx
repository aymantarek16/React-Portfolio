import { useEffect, useState, useCallback, useRef, lazy, Suspense } from "react";
import Hero from "./components/2-hero/Hero";
import Header from "./components/1-header/Header";

const Main = lazy(() => import("./components/3-main/Main"));
const Contact = lazy(() => import("./components/4-contact/Contact"));
const Footer = lazy(() => import("./components/5-footer/Footer"));

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
      <Header />
      <Hero />
      <div className="divider" />
      <Suspense fallback={<SectionFallback />}>
        <Main />
      </Suspense>
      <div className="divider" />
      <Suspense fallback={<SectionFallback />}>
        <Contact />
      </Suspense>
      <div className="divider" />
      <Suspense fallback={<SectionFallback />}>
        <Footer />
      </Suspense>

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
