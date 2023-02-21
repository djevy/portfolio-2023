import "./Projects.css";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import map from "../../Images/map.svg";
import addressBook from "../../Images/addressBook.svg";
import crime from "../../Images/street-view-solid.svg";
import expandIcon from "../../Images/arrow-thin-top-right-corner-icon.png";

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

  const [expand, setExpand] = useState({});
  const toggleExpand = (index) => {
    setExpand((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <section id="projects" ref={ref} className={inView ? "show" : "hidden"}>
      <h2 onClick={toggleParagraphs}>
        Projects <span className={isHidden ? "rotate" : "unrotate"}>▼</span>
      </h2>
      <div className={`fade-out ${isHidden ? "hidden" : "show"}`}>
        <p>Here are some recent projects I have worked on</p>

        <div id="projects-grid">
          <div id="Gazetteer" className={`card ${expand[0] ? "expand" : ""}`}>
            <img
              className={`expandContents ${expand[0] ? "rotate" : "unrotate pulse"}`}
              src={expandIcon}
              alt="Expand contents"
              onClick={() => toggleExpand(0)}
            />
            <a target="_blank" rel="noreferrer" href="https://gazetteer.darrenrevans.co.uk/">
              <img
                alt="Icon used for Gazetteer website logo"
                src={map}
                id="map"
              />
              <h3>Gazetteer</h3>
            </a>
            <div className="project-description">
              <p>
                Gazetteer is a mobile first app that provides live country
                information, weather and exchange rates. It uses technology
                including; ajax, leaflet.js, multiple api's.
              </p>
            </div>
          </div>

          <div
            id="CompanyDirectory"
            className={`card ${expand[1] ? "expand" : ""}`}
          >
            <img
              className={`expandContents ${expand[1] ? "rotate" : "unrotate pulse"}`}
              src={expandIcon}
              alt="Expand contents"
              onClick={() => toggleExpand(1)}
            />
            <a target="_blank" rel="noreferrer" href="https://companydirectory.darrenrevans.co.uk/">
              <img
                alt="Icon used for company directory website logo"
                src={addressBook}
                id="book"
              />
              <h3>Company Directory</h3>
            </a>
            <div className="project-description">
              <p>
                Company directory is a database interface with CRUD operations.
                It is a desktop website that can also run on a mobile, allowing
                the maintenance of a company personnel database to see who’s
                who, which department they are in and where they are located.
              </p>
            </div>
          </div>

          <div id="CrimeMapper" className={`card ${expand[2] ? "expand" : ""}`}>
          <img
              className={`expandContents ${expand[2] ? "rotate" : "unrotate pulse"}`}
              src={expandIcon}
              alt="Expand contents"
              onClick={() => toggleExpand(2)}
            />
            <a target="_blank" rel="noreferrer" href="https://crime-mapper.darrenrevans.co.uk/">
              <img
                alt="Icon used for crime mapper website logo"
                src={crime}
                id="book"
              />
              <h3>Crime Mapper</h3>
            </a>
            <div className="project-description">
              <p>
                Crime mapper is a leaflet based map utilising a police api, created to show crime rates in towns and cities across the UK given a crime type and location.
              </p>
            </div>
          </div>

          {/* <div className={`card ${expand[3] ? "expand" : ""}`}>
          <img
              className={`expandContents ${expand[3] ? "rotate" : "unrotate pulse"}`}
              src={expandIcon}
              alt="Expand contents"
              onClick={() => toggleExpand(3)}
            />
            <a target="_blank" rel="noreferrer" href="https://companydirectory.darrenrevans.co.uk/">
              <img
                alt="Icon used for company directory website logo"
                src={addressBook}
                id="book"
              />
              <h3>Company Directory</h3>
            </a>
            <div className="project-description">
              <p>
                Company directory is a database interface with CRUD operations.
                It is a desktop website that can also run on a mobile, allowing
                the maintenance of a company personnel database to see who’s
                who, which department they are in and where they are located.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};
