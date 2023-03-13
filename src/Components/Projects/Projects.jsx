import "./Projects.css";
import Carousel from "../Carousel/Carousel.jsx";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import map from "../../Images/map.svg";
import addressBook from "../../Images/addressBook.svg";
import crime from "../../Images/street-view-solid.svg";
import expandIcon from "../../Images/arrow-thin-top-right-corner-icon.png";

import burglaries from "../../Images/mywork/Burglaries.png";
import coffeeShops from "../../Images/mywork/CoffeeShops.png";
import costOfLiving from "../../Images/mywork/CostOfLiving.png";
import crimeOutcomes from "../../Images/mywork/CrimeOutcomes.png";
import dangerousPlaces from "../../Images/mywork/DangerousPlaces.png";
import electricityBill from "../../Images/mywork/ElectricityBill.png";
import happiestArea from "../../Images/mywork/HappiestArea.png";
import heatRisk from "../../Images/mywork/HeatRisk.png";
import nationalInsurance from "../../Images/mywork/NationalInsurance.png";
import newYearsResolutions from "../../Images/mywork/NewYearsResolutions.png";
import pensionAgeCalculator from "../../Images/mywork/PensionAgeCalculator.png";
import pickYourSquad from "../../Images/mywork/PickYourSquad.png";
import takeAway from "../../Images/mywork/TakeAway.png";

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
        {/* <p>Please look at some of my work</p> */}

        <Carousel>
          <div className="projects-grid">
            <div className={`work card ${expand[3] ? "expand" : ""}`}>
              <img
                className={`expandContents ${
                  expand[3] ? "rotate" : "unrotate pulse"
                }`}
                src={expandIcon}
                alt="Expand contents"
                onClick={() => toggleExpand(3)}
              />
              <a
                target="_blank"
                rel="noreferrer"
                href="https://trinitymirrordataunit.com/preview/preview_cost_of_living.html"
              >
                <img alt="Website Header" src={costOfLiving} />
                <h3>Cost of Living Calculator</h3>
              </a>
              <div className={`project-description ${expand[3] ? "" : "hideDescription"}`}>
                <p>
                  One of my most successful widgets, used on the Mirror Online
                  to help users calculate the increase to their energy bills due
                  to the cost of living crisis in the UK.
                  <a
                    className="articleLink"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.mirror.co.uk/money/cost-living-calculator-reveals-how-26092940"
                  >
                    As seen on the Mirror
                  </a>
                </p>
              </div>
            </div>
            <div className={`work card ${expand[4] ? "expand" : ""}`}>
              <img
                className={`expandContents ${
                  expand[4] ? "rotate" : "unrotate pulse"
                }`}
                src={expandIcon}
                alt="Expand contents"
                onClick={() => toggleExpand(4)}
              />
              <a
                target="_blank"
                rel="noreferrer"
                href="https://reachdata.live/preview/code_pension_calculator.html"
              >
                <img alt="Website Header" src={pensionAgeCalculator} />
                <h3>Pension Age Calculator</h3>
              </a>
              <div className={`project-description ${expand[4] ? "" : "hideDescription"}`}>
                <p>
                  A pension age calculator widget used to show the date at which
                  you are able to claim your state pension, as well as showing
                  your the remaining time until retirement.
                </p>
              </div>
            </div>
          </div>
          <div className="projects-grid">
            <div className={`work card ${expand[5] ? "expand" : ""}`}>
              <img
                className={`expandContents ${
                  expand[5] ? "rotate" : "unrotate pulse"
                }`}
                src={expandIcon}
                alt="Expand contents"
                onClick={() => toggleExpand(5)}
              />
              <a
                target="_blank"
                rel="noreferrer"
                href="https://reachdata.live/preview/code_pension_calculator.html"
              >
                <img alt="Website Header" src={newYearsResolutions} />
                <h3>New Years Resolutions Map</h3>
              </a>
              <div className={`project-description ${expand[5] ? "" : "hideDescription"}`}>
                <p>
                  A widget requested by Liverpool based newspaper, the Echo, to
                  celebrate the New Years resolutions of the people living in
                  that area.
                  <a
                    className="articleLink"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.liverpoolecho.co.uk/news/liverpool-news/share-your-hopes-2023-map-25820381"
                  >
                    As seen on the Liverpool Echo
                  </a>
                </p>
              </div>
            </div>

            <div className={`work card ${expand[6] ? "expand" : ""}`}>
              <img
                className={`expandContents ${
                  expand[6] ? "rotate" : "unrotate pulse"
                }`}
                src={expandIcon}
                alt="Expand contents"
                onClick={() => toggleExpand(6)}
              />
              <a
                target="_blank"
                rel="noreferrer"
                href="https://trinitymirrordataunit.com/preview/code_happiest_areas.html"
              >
                <img alt="Website Header" src={happiestArea} />
                <h3>Happiest Areas</h3>
              </a>
              <div className={`project-description ${expand[6] ? "" : "hideDescription"}`}>
                <p>
                  A game widget based on whether one town or city is more or
                  less happy than the starting area that you choose. Give it a
                  go!
                </p>
              </div>
            </div>
          </div>
          <div className="projects-grid">
            <div className={`work card ${expand[7] ? "expand" : ""}`}>
              <img
                className={`expandContents ${
                  expand[7] ? "rotate" : "unrotate pulse"
                }`}
                src={expandIcon}
                alt="Expand contents"
                onClick={() => toggleExpand(7)}
              />
              <a
                target="_blank"
                rel="noreferrer"
                href="https://trinitymirrordataunit.com/preview/code_squad_selector_England.html"
              >
                <img alt="Website Header" src={pickYourSquad} />
                <h3>World Cup Squad Selector England</h3>
              </a>
              <div className={`project-description ${expand[7] ? "" : "hideDescription"}`}>
                <p>
                  A football squad selector widget built for the 2022 World Cup.
                  <a
                    className="articleLink"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.leicestermercury.co.uk/sport/football/football-news/leicester-justin-injury-newport-england-7803713"
                  >
                    As seen on the Leicester Mercury
                  </a>
                </p>
              </div>
            </div>

            <div className={`work card ${expand[8] ? "expand" : ""}`}>
              <img
                className={`expandContents ${
                  expand[8] ? "rotate" : "unrotate pulse"
                }`}
                src={expandIcon}
                alt="Expand contents"
                onClick={() => toggleExpand(8)}
              />
              <a
                target="_blank"
                rel="noreferrer"
                href="https://trinitymirrordataunit.com/preview/code_heat_map.html"
              >
                <img alt="Website Header" src={heatRisk} />
                <h3>Heat Risk Map</h3>
              </a>
              <div className={`project-description ${expand[8] ? "" : "hideDescription"}`}>
                <p>
                  This widget was created to show which areas are the most
                  vulnerable to extreme heat in the UK.
                </p>
              </div>
            </div>
          </div>
          <div className="projects-grid">
            <div className={`work card ${expand[9] ? "expand" : ""}`}>
              <img
                className={`expandContents ${
                  expand[9] ? "rotate" : "unrotate pulse"
                }`}
                src={expandIcon}
                alt="Expand contents"
                onClick={() => toggleExpand(9)}
              />
              <a
                target="_blank"
                rel="noreferrer"
                href="https://trinitymirrordataunit.com/preview/code_takeaway_ranking.html"
              >
                <img alt="Website Header" src={takeAway} />
                <h3>Takeaway Ranking</h3>
              </a>
              <div className={`project-description ${expand[9] ? "" : "hideDescription"}`}>
                <p>
                  A widget used to compare the number of takeaway shops and
                  stands between different areas in the UK.
                </p>
              </div>
            </div>

            <div className={`work card ${expand[10] ? "expand" : ""}`}>
              <img
                className={`expandContents ${
                  expand[10] ? "rotate" : "unrotate pulse"
                }`}
                src={expandIcon}
                alt="Expand contents"
                onClick={() => toggleExpand(10)}
              />
              <a
                target="_blank"
                rel="noreferrer"
                href="https://trinitymirrordataunit.com/preview/preview_crime_outcomes.html"
              >
                <img alt="Website Header" src={crimeOutcomes} />
                <h3>Crime Outcomes</h3>
              </a>
              <div className={`project-description ${expand[10] ? "" : "hideDescription"}`}>
                <p>
                  This widget allows the user to see how different crimes in
                  their area have been dealt with in comparison to other areas
                  and the national average.
                </p>
              </div>
            </div>
          </div>
          <div className="projects-grid">
            <div className={`work card ${expand[11] ? "expand" : ""}`}>
              <img
                className={`expandContents ${
                  expand[11] ? "rotate" : "unrotate pulse"
                }`}
                src={expandIcon}
                alt="Expand contents"
                onClick={() => toggleExpand(11)}
              />
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.trinitymirrordataunit.com/preview/preview_code_coffee_shop_capitals.html"
              >
                <img alt="Website Header" src={coffeeShops} />
                <h3>Coffee Shop Capitals</h3>
              </a>
              <div className={`project-description ${expand[11] ? "" : "hideDescription"}`}>
                <p>
                  This widget was created so you can compare how many different
                  types of coffee chains you have in your area in comparison
                  with other areas in the UK.
                </p>
              </div>
            </div>

            <div className={`work card ${expand[12] ? "expand" : ""}`}>
              <img
                className={`expandContents ${
                  expand[12] ? "rotate" : "unrotate pulse"
                }`}
                src={expandIcon}
                alt="Expand contents"
                onClick={() => toggleExpand(12)}
              />
              <a
                target="_blank"
                rel="noreferrer"
                href="https://trinitymirrordataunit.com/preview/code_dangerous_places.html"
              >
                <img alt="Website Header" src={dangerousPlaces} />
                <h3>Dangerous Places</h3>
              </a>
              <div className={`project-description ${expand[12] ? "" : "hideDescription"}`}>
                <p>
                  A widget that allows users to see how safe their neighbourhood
                  is in terms a different crimes in comparison to other areas in
                  England and Wales.
                </p>
              </div>
            </div>
          </div>
          <div className="projects-grid">
            <div className={`work card ${expand[13] ? "expand" : ""}`}>
              <img
                className={`expandContents ${
                  expand[13] ? "rotate" : "unrotate pulse"
                }`}
                src={expandIcon}
                alt="Expand contents"
                onClick={() => toggleExpand(13)}
              />
              <a
                target="_blank"
                rel="noreferrer"
                href="https://trinitymirrordataunit.com/preview/code_national_insurance_calculator.html"
              >
                <img alt="Website Header" src={nationalInsurance} />
                <h3>National Insurance Calculator</h3>
              </a>
              <div className={`project-description ${expand[13] ? "" : "hideDescription"}`}>
                <p>
                  This widget was created to help the user understand how recent
                  changes to National Insurance may be affecting how much they
                  will have to contribute.
                  <a
                    className="articleLink"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.mirror.co.uk/money/national-insurance-calculator-find-out-27404565"
                  >
                    As seen on the Mirror
                  </a>
                </p>
              </div>
            </div>

            <div className={`work card ${expand[14] ? "expand" : ""}`}>
              <img
                className={`expandContents ${
                  expand[14] ? "rotate" : "unrotate pulse"
                }`}
                src={expandIcon}
                alt="Expand contents"
                onClick={() => toggleExpand(14)}
              />
              <a
                target="_blank"
                rel="noreferrer"
                href="https://trinitymirrordataunit.com/preview/code_burglaries.html"
              >
                <img alt="Website Header" src={burglaries} />
                <h3>Burglaries</h3>
              </a>
              <div className={`project-description ${expand[14] ? "" : "hideDescription"}`}>
                <p>
                  This widget gives the user the ability to check home many
                  burglaries have occurred in their neighbourhood in the pasted
                  2 years and how it ranks against the rest of England.
                </p>
              </div>
            </div>
          </div>
          <div className="projects-grid">
            <div className={`work card ${expand[15] ? "expand" : ""}`}>
              <img
                className={`expandContents ${
                  expand[15] ? "rotate" : "unrotate pulse"
                }`}
                src={expandIcon}
                alt="Expand contents"
                onClick={() => toggleExpand(15)}
              />
              <a
                target="_blank"
                rel="noreferrer"
                href="https://reachdata.live/preview/code_electricity_bill_add_up.html"
              >
                <img alt="Website Header" src={electricityBill} />
                <h3>Electricity Bill Add Up</h3>
              </a>
              <div className={`project-description ${expand[15] ? "" : "hideDescription"}`}>
                <p>
                  A widget to help users workout which of their appliances cost
                  the most to run based on their kW usage. Based on electricity
                  price changes in the UK as of October 2022.
                </p>
              </div>
            </div>
            <div
              id="CrimeMapper"
              className={`card ${expand[2] ? "expand" : ""}`}
            >
              <img
                className={`expandContents ${
                  expand[2] ? "rotate" : "unrotate pulse"
                }`}
                src={expandIcon}
                alt="Expand contents"
                onClick={() => toggleExpand(2)}
              />
              <a
                target="_blank"
                rel="noreferrer"
                href="https://crime-mapper.darrenrevans.co.uk/"
              >
                <img
                  alt="Icon used for crime mapper website logo"
                  src={crime}
                />
                <h3>Crime Mapper</h3>
              </a>
              <div className={`project-description ${expand[2] ? "" : "hideDescription"}`}>
                <p>
                  Crime mapper is a leaflet based map utilising a police api,
                  created to show crime rates in towns and cities across the UK
                  given a crime type and location.
                </p>
              </div>
            </div>
          </div>
          <div className="projects-grid">
            <div id="Gazetteer" className={`card ${expand[0] ? "expand" : ""}`}>
              <img
                className={`expandContents ${
                  expand[0] ? "rotate" : "unrotate pulse"
                }`}
                src={expandIcon}
                alt="Expand contents"
                onClick={() => toggleExpand(0)}
              />
              <a
                target="_blank"
                rel="noreferrer"
                href="https://gazetteer.darrenrevans.co.uk/"
              >
                <img
                  alt="Icon used for Gazetteer website logo"
                  src={map}
                  id="map"
                />
                <h3>Gazetteer</h3>
              </a>
              <div className={`project-description ${expand[0] ? "" : "hideDescription"}`}>
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
                className={`expandContents ${
                  expand[1] ? "rotate" : "unrotate pulse"
                }`}
                src={expandIcon}
                alt="Expand contents"
                onClick={() => toggleExpand(1)}
              />
              <a
                target="_blank"
                rel="noreferrer"
                href="https://companydirectory.darrenrevans.co.uk/"
              >
                <img
                  alt="Icon used for company directory website logo"
                  src={addressBook}
                />
                <h3>Company Directory</h3>
              </a>
              <div className={`project-description ${expand[1] ? "" : "hideDescription"}`}>
                <p>
                  Company directory is a database interface with CRUD
                  operations. It is a desktop website that can also run on a
                  mobile, allowing the maintenance of a company personnel
                  database to see who’s who, which department they are in and
                  where they are located.
                </p>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};
