import React from "react";
// import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useInView } from "react-intersection-observer";

import ProfilePic from "../../Images/ProfilePic.png";
import "./Home.css";

import { About } from "../About/About";
import { Projects } from "../Projects/Projects";
import { Resume } from "../Resume/Resume";
import { Contact } from "../Contact/Contact";

export const Home = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
    threshold: 0,
  });
  return (
    <section id="home">
      <div ref={ref} className={inView ? "show" : "hidden"}>
        <div id="welcome">
          <p>Hello there, my name is</p>
          <h2>Darren Evans</h2>
          <p>I am a self-taught Web Developer based in Kent, England.</p>
        </div>
        <div id="profileContainer">
          <img src={ProfilePic} alt="A profile pic" id="profilePic" />
        </div>

        <div id="intro">
          <h2>Allow Me To Introduce Myself</h2>
          <p>
            I have a passion for building my knowledge in modern JavaScript as
            well as Frameworks that use it like React.js.
          </p>
          <p>
            Please take a look around my site, at my {""}
            <HashLink smooth to="#about">
              skills {""}
            </HashLink>
            and {""}
            <HashLink smooth to="#projects">
              projects
            </HashLink>
            .
          </p>
        </div>
      </div>
      <About />
      <Projects />
      <Resume />
      <Contact />
    </section>
  );
};
