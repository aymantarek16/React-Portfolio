import { useState } from "react";
import "./main.css";
import myProjects from "./myProjects";
import { AnimatePresence, motion } from "framer-motion";

const Main = () => {
  const [currentActive, setcurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);

  const handleBtnClick = (e) => {
    setcurrentActive(e);
    const newArr = myProjects.filter((item) => {
      return item.category === e;
    });

    setArr(newArr);
  };

  return (
    <main className="flex">
      <section className="left-section flex">
        <button
          onClick={() => {
            setcurrentActive("all");
            setArr(myProjects);
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
          {arr.map((item, index) => {
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
      </section>
    </main>
  );
};

export default Main;
