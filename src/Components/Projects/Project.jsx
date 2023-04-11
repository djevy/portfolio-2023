import React from "react";

const Project = ({ project }) => {
  return (
    <div className={`work card expand`}>
      <a target="_blank" rel="noreferrer" href={project.link}>
        <img alt="Website Header" src={project.image} />
        <h3>{project.title}</h3>
      </a>
      <div className={`project-description`}>
        {project["project description"]}
        <a
          className="articleLink"
          target="_blank"
          rel="noreferrer"
          href={project["article link"]}
        >
          {project["link text"]}
        </a>
        <div>
          {project["skills"].map((skill, index) => (
            <p key={index} className="skill">{skill}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
