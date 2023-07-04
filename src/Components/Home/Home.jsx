import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { HashLink } from "react-router-hash-link";
import { useInView } from "react-intersection-observer";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

import ProfilePic from "../../Images/Headshot.png";
import "./Home.css";

import { Projects } from "../Projects/Projects";
import { Resume } from "../Resume/Resume";
import { Contact } from "../Contact/Contact";

import { DarkModeContext } from "../DarkMode/DarkModeProvider";
import Skills from "../Skills/Skills";
import Typewriter from "../BannerTop/Typewriter";

export const Home = () => {
  const { darkMode } = useContext(DarkModeContext);
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
          <h2><Typewriter texts='["Darren Evans"]' period="3000" /></h2>
        </div>


<div id="profile-section">
          <div id="profileContainer">
            <Canvas>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 1, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial
                  color={darkMode ? "#2c4a63" : "#058C42"}
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Canvas>
            <img src={ProfilePic} alt="A profile pic" id="profilePic" />
          </div>
  
          <div id="intro">
            <h2>Allow Me To Introduce Myself</h2>
            <p>I am a self-taught Web Developer based in Kent, England.</p>
            <p>
              I have a passion for building my knowledge in modern JavaScript as
              well as Frameworks that use it like React.js.
            </p>
            <p>
              Read more{" "}
              <Link to="/about-me" className="link">
                about me
              </Link>{" "}
              and my{" "}
              <HashLink smooth to="#resume" className="link">
                career
              </HashLink>{" "}
              so far.
            </p>
  
            <p>
              Please take a look around my site, at my {""}
              <HashLink smooth to="#skills" className="link">
                skills {""}
              </HashLink>
              and {""}
              <HashLink smooth to="#projects" className="link">
                projects
              </HashLink>
              .
            </p>
          </div>
</div>
      </div>

      <Resume />
      <Skills />
      <Projects />

      <Contact />
    </section>
  );
};
