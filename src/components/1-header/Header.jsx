import { useEffect, useState } from "react";
import "./header.css";

const Header = () => {
  // const [showModal, setshowModal] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("currentTheme") || "dark"
  );

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);

  return (
    <header className="flex">
      {/* <button
        onClick={() => {
          setshowModal(true);
        }}
        className="menu icon-menu flex"
      /> */}

      
    

      {/* Dark / Light Mode */}
      <button
        className="mode flex"
        onClick={() => {
          localStorage.setItem(
            "currentTheme",
            theme === "dark" ? "light" : "dark"
          );
          setTheme(localStorage.getItem("currentTheme"));
        }}
      >
        <span className={theme === "dark" ? "icon-moon-o" : "icon-sun"}></span>
      </button>

  

      {/* Nav Links */}
      {/* <nav>
        <ul className="flex">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Articles</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Speaking</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav> */}

      {/* {showModal && (
        <div className="fixed">
          <ul className="modal">
            <li>
              <button
                className="icon-close"
                onClick={() => {
                  setshowModal(false);
                }}
              />
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Articles</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Speaking</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      )} */}
    </header>
  );
};

export default Header;
