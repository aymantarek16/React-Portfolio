import { useEffect, useState } from "react";
import "./header.css";

const navItems = [
  { href: "#hero", label: "Home" },
  { href: "#projects", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("currentTheme") || "dark"
  );

  useEffect(() => {
    document.body.classList.toggle("light", theme === "light");
    document.body.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    localStorage.setItem("currentTheme", next);
    setTheme(next);
  };

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <a className="header-brand" href="#hero" aria-label="Ayman Tarek home">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 32 32" focusable="false">
              <defs>
                <linearGradient id="brandGradient" x1="6" y1="6" x2="26" y2="26">
                  <stop offset="0%" stopColor="#5df2d6" />
                  <stop offset="55%" stopColor="#7c5cff" />
                  <stop offset="100%" stopColor="#ffb86b" />
                </linearGradient>
              </defs>
              <path className="brand-mark-a" d="M8 25L16 6l8 19" />
              <path className="brand-mark-bar" d="M12.2 18h7.6" />
              <path className="brand-mark-slash" d="M20.6 10.5l-3.2 11" />
              <circle className="brand-mark-dot" cx="25" cy="7" r="2" />
            </svg>
          </span>
          <span className="brand-copy">
            <strong>Ayman Tarek</strong>
            <small>Front-End Developer</small>
          </span>
        </a>

        <nav className="header-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="header-cta" href="#contact">
          Hire me
        </a>

        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={
            theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
          }
        >
          <span
            className={theme === "dark" ? "icon-moon-o" : "icon-sun"}
            aria-hidden
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
