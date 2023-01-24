// import "./Projects.scss";
import { Card } from "antd";
import  map  from "../Media/map.svg"
import addressBook from "../Media/addressBook.svg"

export const Projects = () => {
  const { Meta } = Card;
  return (
    <section id="Projects">
      <h2>Projects</h2>
      <p>Here are some recent projects I have worked on</p>
      <div id="grid">
        <Card
          id="Gazetteer"
          hoverable
          cover={
            <a href="https://gazetteer.darrenrevans.co.uk/">
              <img
                alt="Icon used for Gazetteer website logo"
                src={map}
                id="map"
              />
            </a>
          }
        >
          <Meta
            title="Gazetteer"
            description="Gazetteer is a mobile first app that provides live country information, weather and exchange rates. It uses technology including; ajax, leaflet.js, multiple api's."
          />
        </Card>

        <Card
          id="CompanyDirectory"
          hoverable
          cover={
            <a href="https://companydirectory.darrenrevans.co.uk/">
              <img
                alt="Icon used for company directory website logo"
                src={addressBook}
                id="book"
              />
            </a>
          }
        >
          <Meta
            title="Company Directory"
            description="Company directory is a database interface with CRUD operations. It is a desktop website that can also run on a mobile, allowing the maintenance of a company personnel database to see who’s who, which department they are in and where they are located."
          />
        </Card>
      </div>
    </section>
  );
};
