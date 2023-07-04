import "./Projects.css";
import Project from "./Project";

import { useInView } from "react-intersection-observer";
import { useState } from "react";

import Menswear from "../../Images/mywork/MenswearLogoBlue.png";
import costOfLiving from "../../Images/mywork/CostOfLiving.png";
import heatRisk from "../../Images/mywork/HeatRisk.png";
import FMLogo from "../../Images/FM_Logo.png";

import { Link } from "react-router-dom";
import { scrollToTop } from "../../utils/ScrollToTop";

export const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
    threshold: 0,
  });
  const [isHidden, setIsHidden] = useState(false);
  const toggleParagraphs = () => {
    setIsHidden(!isHidden);
  };

  const projects = [
    {
      link: "https://menswear.darrenrevans.co.uk/",
      github: "https://github.com/djevy/react-redux-ecommerce",
      image: Menswear,
      title: "Menswear e-commerce",
      "project description":
        "An e-commerce site to demonstrate skills in React, Redux, Redux Toolkit, and Typescript. It also makes use of Sanity for the backend and Material UI for component design.",
      skills: [
        "React",
        "Redux",
        "Sanity.io",
        "HTML-5",
        "CSS3",
        "TypeScript",
        "Material UI",
      ],
    },
    {
      link: "https://film-match.darrenrevans.co.uk/",
      github: "https://github.com/djevy/film-match",
      image: FMLogo,
      title: "Film Match",
      "project description":
        "A film and tv show matching app that will settle the what should we watch debate. This is a personal project that was created out of necessity after many conversations with friends and family when it came time to pick something to watch together.",
      skills: ["React", "Node", "HTML-5", "CSS3", "JavaScript"],
    },
    {
      link: "https://trinitymirrordataunit.com/preview/preview_cost_of_living.html",
      image: costOfLiving,
      title: "Cost of Living Calculator",
      "project description":
        "One of my most successful widgets, used on the Mirror Online to help users calculate the increase to their energy bills due to the cost of living crisis in the UK.",
      "article link":
        "https://www.mirror.co.uk/money/cost-living-calculator-reveals-how-26092940",
      "link text": "As seen on the Mirror",
      skills: ["HTML-5", "CSS3", "JavaScript"],
    },
    {
      link: "https://trinitymirrordataunit.com/preview/code_heat_map.html",
      image: heatRisk,
      title: "Heat Risk Map",
      "project description":
        "This widget was created to show which areas are the most vulnerable to extreme heat in the UK.",
      skills: ["HTML-5", "CSS3", "JavaScript", "Leaflet.js", "PHP"],
    },
  ];

  return (
    <section id="projects" ref={ref} className={inView ? "show" : "hidden"}>
      <h2 onClick={toggleParagraphs}>
        Projects <span className={isHidden ? "rotate" : "unrotate"}>▼</span>
      </h2>
      <p>Here are some of my favourite projects</p>
      <div className={`fade-out ${isHidden ? "hidden" : "show"}`}>
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
        <p>
          See more of my{" "}
          <Link to="/projects" className="link" onClick={scrollToTop}>
            work
          </Link>
        </p>
      </div>
    </section>
  );
};
