import GithubIcon from "../../Images/github-icon.png";

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
        <div className="links-out">
          <a target="_blank" rel="noreferrer" href={project.link}>
            <button className="visit-button">Visit</button>
          </a>
          {project.github && (
            <a target="_blank" rel="noreferrer" href={project.github}>
              <img src={GithubIcon} alt="Github logo" className="github-icon" />
            </a>
          )}
        </div>
        <div className="project-skills">
          {project["skills"].map((skill, index) => (
            <p key={index} className="project-skill">
              {skill}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
