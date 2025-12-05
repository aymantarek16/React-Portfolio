import { useState } from "react";
import "./main.css";
import myProjects from "./myProjects";
import { AnimatePresence, motion } from "framer-motion";

const Main = () => {
  const [currentActive, setcurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);
  const [visibleCount, setVisibleCount] = useState(6);

  const handleBtnClick = (e) => {
    setcurrentActive(e);
    const newArr = myProjects.filter((item) => {
      return item.category === e;
    });
    setArr(newArr);
    setVisibleCount(6);
  };

const handleLoadMore = () => {
  if (visibleCount >= arr.length) {
    setVisibleCount(6);

    // Scroll up after updating visibleCount
    setTimeout(() => {
      const isMobile = window.innerWidth <= 768;
      const offset = isMobile ? 300 : 750;

      window.scrollTo({
        top: window.scrollY - offset,
        behavior: "smooth",
      });
    }, 100);
  } else {
    setVisibleCount(arr.length);
  }
};


  return (
    <main className="flex">
      <section className="left-section flex">
        <button
          onClick={() => {
            setcurrentActive("all");
            setArr(myProjects);
            setVisibleCount(6);
          }}
          className={currentActive === "all" ? "active" : null}
        >
          all projects
        </button>
        {/* Next */}
        <button
          onClick={() => {
            handleBtnClick("next");
          }}
          className={currentActive === "next" ? "active" : null}
        >
          Next.js
        </button>
        {/* React */}
        <button
          onClick={() => {
            handleBtnClick("react");
          }}
          className={currentActive === "react" ? "active" : null}
        >
          React.js
        </button>
        {/* Ui */}
        <button
          onClick={() => {
            handleBtnClick("ui");
          }}
          className={currentActive === "ui" ? "active" : null}
        >
          Ui
        </button>
      </section>

      <section className="flex right-section">
        <AnimatePresence>
          {arr.slice(0, visibleCount).map((item, index) => {
            return (
              <motion.article
                key={index}
                layout
                initial={{ transform: "scale(0.6)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 8, stiffness: 50 }}
                className="card"
              >
                <img width={266} src={item.imgPath} alt="" />

                <div style={{ width: "266px" }} className="box">
                  <h1 className="title">{item.projectTitle}</h1>
                  <p className="sub-title">{item.subTitle}</p>

                  <div className="flex icons">
                    <a
                      className="icon-link"
                      href={item.liveDemo}
                      target="_blank"
                    ></a>
                    <a
                      className="icon-github"
                      href={item.githup}
                      target="_blank"
                    ></a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>

        {/*Load More / Show Less */}
        {arr.length > 6 && (
          <button
            onClick={handleLoadMore}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              borderRadius: "8px",
              border: "none",
              background: "linear-gradient(135deg, var(--blue), var(--purple))",
              color: "#fff",
              cursor: "pointer",
              fontWeight: "500",
              boxShadow: "0 0 10px rgba(59, 130, 246, 0.4)",
            }}
          >
            {visibleCount >= arr.length ? "Show Less" : "Load More"}
          </button>
        )}
      </section>
    </main>
  );
};

export default Main;
