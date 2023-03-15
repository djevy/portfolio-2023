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

  const [show, setShow] = useState({ 0: true });
  const toggleShow = (index) => {
    const hideExperiences = Object.keys(show).forEach(
      (experience) => (show[experience] = false)
    );

    setShow({ hideExperiences, [index]: true });
    // setShow((prevState) => ({
    //   ...prevState,
    //   [index]: true,
    // }));
  };

  const saveFile = () => {
    saveAs(CV, "Darren Evans CV.pdf");
  };

  return (
    <section id="resume" ref={ref} className={inView ? "show" : "hidden"}>
      <h2 onClick={toggleParagraphs}>
        Resume <span className={isHidden ? "rotate" : "unrotate"}>▼</span>
      </h2>
      <div className={`fade-out ${isHidden ? "hidden" : "show"}`}>
        <div id="resumeContainer">
          <div id="experienceTitles">
            <h2>Developer Jobs</h2>
            <div className="groupedExperiences">
              <h3
                onClick={() => toggleShow(0)}
                className={`${show[0] ? "active" : ""}`}
              >
                Reach
              </h3>
              <h3
                onClick={() => toggleShow(1)}
                className={`${show[1] ? "active" : ""}`}
              >
                Zustech
              </h3>
            </div>

            <h2>Coding Traineeship</h2>
            <div className="groupedExperiences">
              <h3
                onClick={() => toggleShow(2)}
                className={`${show[2] ? "active" : ""}`}
              >
                IT Career Switch Ltd
              </h3>
            </div>

            <h2>Education</h2>
            <div className="groupedExperiences">
              <h3
                onClick={() => toggleShow(3)}
                className={`${show[3] ? "active" : ""}`}
              >
                The University of Sheffield
              </h3>

              <h3
                onClick={() => toggleShow(4)}
                className={`${show[4] ? "active" : ""}`}
              >
                Sophia University, Tokyo
              </h3>
            </div>
          </div>
          <div id="experiences">
            <div className={`${show[0] ? "show" : "hide"}`}>
              <h3>Full Stack Developer @ Reach</h3>
              <h4>December 2021 - February 2023</h4>
              <ul>
                <li>
                  Worked on the development of highly reusable widgets for
                  online articles for the likes of the Mirror, Daily Mail,
                  Express, and many more.
                </li>
                <li>
                  Translated designs and data into interactive widgets that
                  convey data to the reader as to support the article it appears
                  in.
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
                      Widgets utilising the leaflet.js library among many
                      others.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className={`${show[1] ? "show" : "hide"}`}>
              <h3>Front End Developer @ Zustech</h3>
              <h4>June 2021 - December 2021</h4>
              <ul>
                <li>
                  Worked on the development of a Learning Management System.
                </li>
                <li>
                  Translated designs and wireframes into a highly responsive
                  user interface and reusable components using React.js.
                </li>
                <li>
                  Used JIRA as a task tracking system to maintain the history of
                  bugs/issues on an everyday basis.
                </li>
                <li>
                  Created custom React Components, as well as worked with
                  library Components to implement Backend-APIs.
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
            <div className={`${show[2] ? "show" : "hide"}`}>
              <h3>Full stack developer Traineeship @ IT Career Switch Ltd</h3>
              <h4>April 2020 - April 2021</h4>
              <ul>
                <li>
                  I graduated from a coding Traineeship as a Full-stack
                  Developer in April of 2021. The training included completing 2
                  real-world projects successfully to specification using a wide
                  range of programming languages.
                </li>
                <li>
                  Portfolio Project #1: “Gazetteer”
                  <ul>
                    <li>
                      The specification was to reply to a website specification
                      for a map-based app to provide information on countries –
                      with a focus on a “mobile first” development. Preferably
                      using a framework, to then develop HTML, CSS and
                      JavaScript with JQuery modules that use PHP server-based
                      components to source data from third party APIs (Geonames,
                      OpenWeather). The solution is assessed on its delivery to
                      specification, functionality, and usability.
                    </li>
                  </ul>
                </li>
                <li>
                  Portfolio Project #2: “Company Directory”
                  <ul>
                    <li>
                      A more rigorous reply to this specification was required
                      as a user requirements document was needed to be prepared
                      which, when signed off, triggers the release of SQL
                      allowing to develop a “mobile-first” application to
                      maintain a company personnel database (MySQL). Sign off is
                      only achieved upon the student supplying an independently
                      witnessed document providing confirmation of the system’s
                      ability to perform error free.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className={`${show[3] ? "show" : "hide"}`}>
              <h3>BA East Asian Studies @ The University of Sheffield</h3>
              <h4>2014 - 2018</h4>
              <ul>
                <li>
                  My East Asian Studies degree involved the study of the
                  cultures, histories, societies, languages, and politics of
                  East Asian countries, including China, Japan, and Korea. The
                  degree covered a wide range of topics, such as literature,
                  art, philosophy, religion, economics, and international
                  relations.
                </li>
                <li>I also spent my entire degree studying the Japanese language, which included a year abroad in Tokyo where I completed a Japanese Language Programme, and taught English as a part-time job.</li>
              </ul>
            </div>
            <div className={`${show[4] ? "show" : "hide"}`}>
              <h3>Japanese Language Programme @ Sophia University, Tokyo</h3>
              <h4>2016 - 2017</h4>
              <ul>
                <li>
                  The Japanese Language Program aims to develop
                  students' proficiency in the Japanese language, with a focus
                  on speaking, listening, reading, and writing. Students
                  learn Japanese grammar, vocabulary, and sentence structures
                  through various activities, such as conversation practice,
                  listening comprehension exercises, reading comprehension, and
                  writing assignments.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <button id="CVDownload" onClick={saveFile}>
        Download CV
      </button>
    </section>
  );
};
