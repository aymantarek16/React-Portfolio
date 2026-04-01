import { useEffect, useState, useCallback } from "react";
import "./header.css";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#projects", label: "Projects" },
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

  const handleNavClick = useCallback((e, href) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    const id = href.slice(1);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <a
          href="#hero"
          className="site-logo"
          onClick={(e) => handleNavClick(e, "#hero")}
        >
          AT.
        </a>

        <nav className="site-nav" aria-label="Primary">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

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
