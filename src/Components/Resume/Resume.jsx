import "./Resume.css";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import React from "react";
import { saveAs } from "file-saver";
import CV from "../../Data/Darren Evans CV-2023.pdf";

export const Resume = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
    threshold: 0,
  });
  const [isHidden, setIsHidden] = useState(false);
  const toggleParagraphs = () => {
    setIsHidden(!isHidden);
  };

  const saveFile = () => {
    saveAs(CV, "Darren Evans CV.pdf");
  };

  return (
    <section id="resume" ref={ref} className={inView ? "show" : "hidden"}>
      <h2 onClick={toggleParagraphs}>
        Resume <span className={isHidden ? "rotate" : "unrotate"}>▼</span>
      </h2>
      <button id="CVDownload" onClick={saveFile}>
        Download CV
      </button>
      <div className={`fade-out ${isHidden ? "hidden" : "show"}`}>
        <div className="experience">
          <h2>Experience</h2>
          <div>
            <h3>Web Developer [ Reach ]</h3>
            <h4>December 2021 - February 2023</h4>
            <ul>
              <li>
                Worked on the development of highly reusable widgets for online
                articles for the likes of the Mirror, Daily Mail, Express, and
                many more.
              </li>
              <li>
                Translated designs and data into interactive widgets that convey
                data to the reader as to support the article it appears in.
              </li>
              <li>
                Worked with editors in the data unit to create interactive
                widgets that present data in an interesting way.
              </li>
              <li>
                Gained and improved my skills by creating:
                <ul>
                  <li>Widgets using jQuery, AJAX, SQL and PHP.</li>
                  <li>
                    Widget generators for the editors to create their own
                    widgets using a template and their own data.
                  </li>
                  <li>
                    Widgets utilising the leaflet.js library among many others.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <h3>Front End Developer [ Zustech ]</h3>
            <h4>June 2021 - December 2021</h4>
            <ul>
              <li>
                Worked on the development of a Learning Management System.
              </li>
              <li>
                Translated designs and wireframes into a highly responsive user
                interface and reusable components using React.js.
              </li>
              <li>
                Used JIRA as a task tracking system to maintain the history of
                bugs/issues on an everyday basis.
              </li>
              <li>
                Created custom React Components, as well as worked with library
                Components to implement Backend-APIs.
              </li>
              <li>
                Worked on features such as:
                <ul>
                  <li>Site wide language changing</li>
                  <li>Secure login</li>
                  <li>Payment handling</li>
                  <li>Application submission</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className="experience">
          <h2>Coding Traineeship</h2>
          <div>
            <h3>Full stack developer Traineeship [ IT Career Switch Ltd ]</h3>
            <h4>April 2020 - April 2021</h4>
            <p>
              During the traineeship I had to demonstrate a very competent level
              of the following programming languages and technical skills:
            </p>
            <ul>
              <li>HTML5, CSS3, JavaScript </li>
              <li>PHP, jQuery, SQL, Bootstrap</li>
              <li>Java, Python, React, C#</li>
              <li>Git, API</li>
            </ul>
          </div>
        </div>

        <div className="experience">
          <h2>Education</h2>
          <div>
            <h3>Web Development Career Path [ Codecademy ]</h3>
            <h4>2020</h4>
          </div>
          <div>
            <h3>BA East Asian Studies [ The University of Sheffield ]</h3>
            <h4>2014 - 2018</h4>
          </div>
          <div>
            <h3>Japanese Language Programme [ Sophia University, Tokyo ]</h3>
            <h4>2016 - 2017</h4>
          </div>
        </div>
      </div>
    </section>
  );
};
