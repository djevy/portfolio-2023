import { useInView } from "react-intersection-observer";
import { useState } from "react";
import "./Skills.css";

import { Tooltip } from "@mui/material";

import HTML from "../../Images/svgs/html-1.svg";
import CSS from "../../Images/svgs/css-3.svg";
import Javascript from "../../Images/svgs/javascript-1.svg";
import ReactIcon from "../../Images/svgs/react-2.svg";
import Redux from "../../Images/svgs/redux.svg";
import TypeScript from "../../Images/svgs/typescript.svg";
import Node from "../../Images/svgs/nodejs-icon.svg";
import jQuery from "../../Images/svgs/jquery-4.svg";
import PHP from "../../Images/svgs/php-1.svg";
import Material from "../../Images/svgs/material-ui-1.svg";
import Leaflet from "../../Images/svgs/leaflet-1.svg";

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
    threshold: 0,
  });
  const [isHidden, setIsHidden] = useState(false);
  const toggleParagraphs = () => {
    setIsHidden(!isHidden);
  };
  return (
    <section id="skills" ref={ref} className={inView ? "show" : "hidden"}>
      <h2 onClick={toggleParagraphs}>
        Tech Stack <span className={isHidden ? "rotate" : "unrotate"}>▼</span>
      </h2>

      <div className={`fade-out ${isHidden ? "hidden" : "show"}`}>
        <div id="skills-container">
          <Tooltip title="HTML-5">
            <img src={HTML} alt="HTML-5" className="skills-icon" />
          </Tooltip>
          <Tooltip title="CSS-3">
            <img src={CSS} alt="CSS-3" className="skills-icon" />
          </Tooltip>
          <Tooltip title="Javascript">
            <img src={Javascript} alt="Javascript" className="skills-icon" />
          </Tooltip>
          <Tooltip title="React">
            <img src={ReactIcon} alt="ReactIcon" className="skills-icon" />
          </Tooltip>
          <Tooltip title="Redux">
            <img src={Redux} alt="Redux" className="skills-icon" />
          </Tooltip>
          <Tooltip title="TypeScript">
            <img src={TypeScript} alt="TypeScript" className="skills-icon" />
          </Tooltip>
          <Tooltip title="Node">
            <img src={Node} alt="Node" className="skills-icon" />
          </Tooltip>
          <Tooltip title="jQuery">
            <img src={jQuery} alt="jQuery" className="skills-icon" />
          </Tooltip>
          <Tooltip title="PHP">
            <img src={PHP} alt="PHP" className="skills-icon" />
          </Tooltip>
          <Tooltip title="Material">
            <img src={Material} alt="Material" className="skills-icon" />
          </Tooltip>
          <Tooltip title="Leaflet">
            <img src={Leaflet} alt="Leaflet" className="skills-icon" />
          </Tooltip>
        </div>
      </div>
    </section>
  );
};

export default Skills;
