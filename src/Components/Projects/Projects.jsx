import "./Projects.css";
import Carousel from "../Carousel/Carousel.jsx";
import Project from "./Project";

import { useInView } from "react-intersection-observer";
import { useState } from "react";
import map from "../../Images/map.svg";
import addressBook from "../../Images/addressBook.svg";
import crime from "../../Images/street-view-solid.svg";

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
import FMLogo from "../../Images/FM_Logo.png";

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
      link: "https://film-match.darrenrevans.co.uk/",
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
      link: "https://reachdata.live/preview/code_pension_calculator.html",
      image: pensionAgeCalculator,
      title: "Pension Age Calculator",
      "project description":
        "A pension age calculator widget used to show the date at which you are able to claim your state pension, as well as showing your the remaining time until retirement.",
      skills: ["HTML-5", "CSS3", "JavaScript"],
    },
    {
      link: "https://reachdata.live/preview/code_pension_calculator.html",
      image: newYearsResolutions,
      title: "New Years Resolutions Map",
      "project description":
        "A widget requested by Liverpool based newspaper, the Echo, to celebrate the New Years resolutions of the people living in that area.",
      "article link":
        "https://www.liverpoolecho.co.uk/news/liverpool-news/share-your-hopes-2023-map-25820381",
      "link text": "As seen on the Liverpool Echo",
      skills: ["HTML-5", "CSS3", "JavaScript", "Leaflet.js", "PHP"],
    },
    {
      link: "https://trinitymirrordataunit.com/preview/code_happiest_areas.html",
      image: happiestArea,
      title: "Happiest Areas",
      "project description":
        "A game widget based on whether one town or city is more or less happy than the starting area that you choose. Give it a go!",
      skills: ["HTML-5", "CSS3", "JavaScript", "Leaflet.js", "PHP"],
    },
    {
      link: "https://trinitymirrordataunit.com/preview/code_squad_selector_England.html",
      image: pickYourSquad,
      title: "World Cup Squad Selector England",
      "project description":
        "A football squad selector widget built for the 2022 World Cup.",
      "article link":
        "https://www.leicestermercury.co.uk/sport/football/football-news/leicester-justin-injury-newport-england-7803713",
      "link text": "As seen on the Leicester Mercury",
      skills: ["HTML-5", "CSS3", "JavaScript", "PHP"],
    },
    {
      link: "https://trinitymirrordataunit.com/preview/code_heat_map.html",
      image: heatRisk,
      title: "Heat Risk Map",
      "project description":
        "This widget was created to show which areas are the most vulnerable to extreme heat in the UK.",
      skills: ["HTML-5", "CSS3", "JavaScript", "Leaflet.js", "PHP"],
    },
    {
      link: "https://trinitymirrordataunit.com/preview/code_takeaway_ranking.html",
      image: takeAway,
      title: "Takeaway Ranking",
      "project description":
        "A widget used to compare the number of takeaway shops and stands between different areas in the UK.",
      skills: ["HTML-5", "CSS3", "JavaScript", "Chart.js", "PHP"],
    },
    {
      link: "https://trinitymirrordataunit.com/preview/preview_crime_outcomes.html",
      image: crimeOutcomes,
      title: "Crime Outcomes",
      "project description":
        "This widget allows the user to see how different crimes in their area have been dealt with in comparison to other areas and the national average.",
      skills: ["HTML-5", "CSS3", "JavaScript", "Leaflet.js", "PHP"],
    },
    {
      link: "https://www.trinitymirrordataunit.com/preview/preview_code_coffee_shop_capitals.html",
      image: coffeeShops,
      title: "Coffee Shop Capitals",
      "project description":
        "This widget was created so you can compare how many different types of coffee chains you have in your area in comparison with other areas in the UK.",
      skills: ["HTML-5", "CSS3", "JavaScript"],
    },
    {
      link: "https://trinitymirrordataunit.com/preview/code_dangerous_places.html",
      image: dangerousPlaces,
      title: "Dangerous Places",
      "project description":
        "A widget that allows users to see how safe their neighbourhood is in terms a different crimes in comparison to other areas in England and Wales.",
      skills: ["HTML-5", "CSS3", "JavaScript", "Leaflet.js", "PHP"],
    },
    {
      link: "https://trinitymirrordataunit.com/preview/code_national_insurance_calculator.html",
      image: nationalInsurance,
      title: "National Insurance Calculator",
      "project description":
        "This widget was created to help the user understand how recent changes to National Insurance may be affecting how much they will have to contribute.",
      "article link":
        "https://www.mirror.co.uk/money/national-insurance-calculator-find-out-27404565",
      "link text": "As seen on the Mirror",
      skills: ["HTML-5", "CSS3", "JavaScript", "PHP"],
    },
    {
      link: "https://trinitymirrordataunit.com/preview/code_burglaries.html",
      image: burglaries,
      title: "Burglaries",
      "project description":
        "This widget gives the user the ability to check home many burglaries have occurred in their neighbourhood in the pasted 2 years and how it ranks against the rest of England.",
      skills: ["HTML-5", "CSS3", "JavaScript", "Leaflet.js", "PHP"],
    },
    {
      link: "https://reachdata.live/preview/code_electricity_bill_add_up.html",
      image: electricityBill,
      title: "Electricity Bill Add Up",
      "project description":
        "A widget to help users workout which of their appliances cost the most to run based on their kW usage. Based on electricity price changes in the UK as of October 2022.",
      skills: ["HTML-5", "CSS3", "JavaScript"],
    },
    {
      link: "https://crime-mapper.darrenrevans.co.uk/",
      image: crime,
      title: "Crime Mapper",
      "project description":
        "Crime mapper is a leaflet based map utilising a police api, created to show crime rates in towns and cities across the UK given a crime type and location.",
      skills: ["HTML-5", "CSS3", "JavaScript", "Leaflet.js"],
    },
    {
      link: "https://gazetteer.darrenrevans.co.uk/",
      image: map,
      title: "Gazetteer",
      "project description":
        "Gazetteer is a mobile first app that provides live country information, weather and exchange rates.",
      skills: ["HTML-5", "CSS3", "JavaScript", "Leaflet.js"],
    },
    {
      link: "https://companydirectory.darrenrevans.co.uk/",
      image: addressBook,
      title: "Company Directory",
      "project description":
        "Company directory is a database interface with CRUD operations. It is a desktop website that can also run on a mobile, allowing the maintenance of a company personnel database to see who’s who, which department they are in and where they are located.",
      skills: ["HTML-5", "CSS3", "JavaScript", "PHP", "SQL"],
    },
  ];

  return (
    <section id="projects" ref={ref} className={inView ? "show" : "hidden"}>
      <h2 onClick={toggleParagraphs}>
        Projects <span className={isHidden ? "rotate" : "unrotate"}>▼</span>
      </h2>
      <div className={`fade-out ${isHidden ? "hidden" : "show"}`}>
        <Carousel>
          {projects.map((project, index) => (
            <Project key={index} project={project} />
          ))}
        </Carousel>
      </div>
    </section>
  );
};
