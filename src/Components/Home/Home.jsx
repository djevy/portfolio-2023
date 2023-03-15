import React, { useContext } from "react";

import { HashLink } from "react-router-hash-link";
import { useInView } from "react-intersection-observer";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

import ProfilePic from "../../Images/Headshot.png";
import "./Home.css";

import { About } from "../About/About";
import { Projects } from "../Projects/Projects";
import { Resume } from "../Resume/Resume";
import { Contact } from "../Contact/Contact";

import { DarkModeContext } from "../DarkMode/DarkModeProvider";

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
          <h2>Darren Evans</h2>
          <p>I am a self-taught Web Developer based in Kent, England.</p>
        </div>
        <div id="profileContainer">
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3,1, 1]} />
            <Sphere args={[1, 100, 200]} scale={2.8}>
              <MeshDistortMaterial
                color={darkMode ? "#2c4a63" : "#058C42" }
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
      <Resume />
      <Projects />

      <Contact />
    </section>
  );
};
