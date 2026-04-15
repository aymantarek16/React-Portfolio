import { useEffect, useRef } from "react";
import "./custom-cursor.css";

/**
 * Elegant Premium Custom Cursor
 * - No React state updates on mousemove
 * - Direct DOM manipulation via refs
 * - CSS transform3d for GPU acceleration
 * - Smooth, elegant easing with refined visual polish
 */
const CustomCursor = () => {
  const dotRef = useRef(null);
  const glowRef = useRef(null);
  const outlineRef = useRef(null);
  const rafIdRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const dotPos = useRef({ x: 0, y: 0 });
  const glowPos = useRef({ x: 0, y: 0 });
  const outlinePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Only on desktop
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = dotRef.current;
    const glow = glowRef.current;
    const outline = outlineRef.current;
    if (!dot || !glow || !outline) return;

    // INSTANT cursor following - no easing for dot
    // Very light trailing for glow/outline (visual effect only)
    const glowEasing = 0.15;
    const outlineEasing = 0.08;

    const animate = () => {
      // Dot follows instantly - NO LAG
      dotPos.current.x = mousePos.current.x;
      dotPos.current.y = mousePos.current.y;

      // Glow/Outline have subtle trailing for visual elegance
      glowPos.current.x += (mousePos.current.x - glowPos.current.x) * glowEasing;
      glowPos.current.y += (mousePos.current.y - glowPos.current.y) * glowEasing;

      outlinePos.current.x += (mousePos.current.x - outlinePos.current.x) * outlineEasing;
      outlinePos.current.y += (mousePos.current.y - outlinePos.current.y) * outlineEasing;

      // Apply transforms directly via refs - zero React re-renders
      dot.style.transform = `translate3d(${dotPos.current.x}px, ${dotPos.current.y}px, 0)`;
      glow.style.transform = `translate3d(${glowPos.current.x}px, ${glowPos.current.y}px, 0)`;
      outline.style.transform = `translate3d(${outlinePos.current.x}px, ${outlinePos.current.y}px, 0)`;

      rafIdRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
    };

    const handleMouseEnter = () => {
      dot.classList.add("active");
      glow.classList.add("active");
      outline.classList.add("active");
    };

    const handleMouseLeave = () => {
      dot.classList.remove("active");
      glow.classList.remove("active");
      outline.classList.remove("active");
    };

    // Start animation loop
    rafIdRef.current = requestAnimationFrame(animate);

    // Event listeners - passive for performance
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Track interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, .project-card-3d, .service-card, .stat-card'
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter, { passive: true });
      el.addEventListener("mouseleave", handleMouseLeave, { passive: true });
    });

    // Cleanup
    return () => {
      cancelAnimationFrame(rafIdRef.current);
      window.removeEventListener("mousemove", handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  // Don't render on touch devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      {/* Elegant outer ring with trail */}
      <div
        ref={outlineRef}
        className="cursor-outline"
        style={{ willChange: "transform" }}
      />
      
      {/* Soft glow effect */}
      <div
        ref={glowRef}
        className="cursor-glow"
        style={{ willChange: "transform" }}
      />
      
      {/* Main cursor dot */}
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{ willChange: "transform" }}
      />
    </>
  );
};

export default CustomCursor;
