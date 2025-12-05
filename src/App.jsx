import { useEffect, useState } from "react";
import Hero from "./components/2-hero/Hero";
import Main from "./components/3-main/Main";
import Contact from "./components/4-contact/Contact";
import Footer from "./components/5-footer/Footer";
import Header from "./components/1-header/Header";

function App() {
  const [showScrollBtn, setshowScrollBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setshowScrollBtn(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };

  return (
    <div className="container">
      <Header />
      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />

      {showScrollBtn && (
        <button
          onClick={scrollToTop}
          className="icon-keyboard_arrow_up scroll2Top"
          style={{
            opacity: showScrollBtn ? "1" : "0",
            transition: ".8s",
          }}
        ></button>
      )}
    </div>
  );
}

export default App;
