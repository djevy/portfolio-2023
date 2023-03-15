import "./About.css";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import newsArticle from "../../Images/Darren-KentLive-front-page.png";
import expandIcon from "../../Images/arrow-thin-top-right-corner-icon.png";

// import {
//   FaHtml5,
//   FaReact,
//   FaCss3,
//   FaJs,
//   FaGitAlt,
//   FaPhp,
// } from "react-icons/fa";
// import { DiMysql, DiJqueryLogo } from "react-icons/di";
// import Tooltip from "rc-tooltip";
export const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
    threshold: 0,
  });
  const [isHidden, setIsHidden] = useState(false);
  const toggleParagraphs = () => {
    setIsHidden(!isHidden);
  };

  const [expand, setExpand] = useState({});
  const toggleExpand = (index) => {
    setExpand((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <section id="about" ref={ref} className={inView ? "show" : "hidden"}>
      <div id="aboutMe">
        <h2 onClick={toggleParagraphs}>
          About me <span className={isHidden ? "rotate" : "unrotate"}>▼</span>
        </h2>
        <div className={`fade-out ${isHidden ? "hidden" : "show"}`}>
          <p className="showContent">
            After spending two years living in Japan, and studying the language
            and culture working as an English teacher. I am now focusing my
            passion for language, on the universal language of code. My goal is
            to become a Full-stack Developer with a wide range of skills.
          </p>
          <p className="showContent">
            My current tech-stack is focused on the React environment as I find
            component based code to be the most fun to work with. I also have
            great knowledge of HTML, CSS and JavaScript. I love creating
            beautifully clean and impactful websites and projects.
          </p>
          <p className="showContent">
            I am open to individual freelance work, but also enjoying working in
            a team environment. After all, two heads are better than one!
          </p>
          <p className="showContent">
            I am always looking for an exciting new project to work on... so why
            wait? I look forward to working with you!
          </p>
          <div>
          <p>
            Here is a parting gift created by my former colleagues at Reach plc:
          </p>
          <div id="newsArticleHolder">
            <img
              className={`expandContents ${
                expand[0] ? "rotate" : "unrotate pulse"
              }`}
              src={expandIcon}
              alt="Expand contents"
              onClick={() => toggleExpand(0)}
            />
            <img
              id="newsArticle"
              className={`${expand[0] ? "expand" : ""}`}
              src={newsArticle}
              alt="A fake news article created by my former colleagues at Reach."
            />
          </div>
        </div>
        </div>


      </div>

      {/* <div id="skills">
        <h2>My Skillset</h2>
        <div id="grid">
          <Tooltip
            overlay={<div className="Tooltip">JavaScript</div>}
            trigger="hover"
            className="skills"
            placement="top"
            mouseEnterDelay={0}
            mouseLeaveDelay={0.1}
          >
            <div>
              <FaJs className="icon" />
            </div>
          </Tooltip>
          <Tooltip
            overlay={<div className="Tooltip">HTML-5</div>}
            trigger="hover"
            className="skills"
            placement="top"
            mouseEnterDelay={0}
            mouseLeaveDelay={0.1}
          >
            <div>
              <FaHtml5 className="icon" />
            </div>
          </Tooltip>
          <Tooltip
            overlay={<div className="Tooltip">CSS3</div>}
            trigger="hover"
            className="skills"
            placement="top"
            mouseEnterDelay={0}
            mouseLeaveDelay={0.1}
          >
            <div>
              <FaCss3 className="icon" />
            </div>
          </Tooltip>
          <Tooltip
            overlay={<div className="Tooltip">PHP</div>}
            trigger="hover"
            className="skills"
            placement="top"
            mouseEnterDelay={0}
            mouseLeaveDelay={0.1}
          >
            <div>
              <FaPhp className="icon" />
            </div>
          </Tooltip>
          <Tooltip
            overlay={<div className="Tooltip">React</div>}
            trigger="hover"
            className="skills"
            placement="top"
            mouseEnterDelay={0}
            mouseLeaveDelay={0.1}
          >
            <div>
              <FaReact className="icon" />
            </div>
          </Tooltip>
          <Tooltip
            overlay={<div className="Tooltip">MySQL</div>}
            trigger="hover"
            className="skills"
            placement="top"
            mouseEnterDelay={0}
            mouseLeaveDelay={0.1}
          >
            <div>
              <DiMysql className="icon" />
            </div>
          </Tooltip>
          <Tooltip
            overlay={<div className="Tooltip">Git</div>}
            trigger="hover"
            className="skills"
            placement="top"
            mouseEnterDelay={0}
            mouseLeaveDelay={0.1}
          >
            <div>
              <FaGitAlt className="icon" />
            </div>
          </Tooltip>
          <Tooltip
            overlay={<div className="Tooltip">jQuery</div>}
            trigger="hover"
            className="skills"
            placement="top"
            mouseEnterDelay={0}
            mouseLeaveDelay={0.1}
          >
            <div>
              <DiJqueryLogo className="icon" />
            </div>
          </Tooltip>
        </div>
      </div> */}
    </section>
  );
};
