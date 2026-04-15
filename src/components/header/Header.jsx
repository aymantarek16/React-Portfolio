import { useEffect, useState } from "react";
import "./header.css";

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
      <div className="site-header-inner" aria-label="Appearance controls">
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
