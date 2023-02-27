import React, { useContext } from "react";
import { DarkModeContext } from "../DarkMode/DarkModeProvider";
import "./Footer.css";

import GithubIcon from "../../Images/github-icon.png";
import LinkedinIcon from "../../Images/linkedin-square-icon.png";
import MailIcon from "../../Images/mail-send-icon.png"
import GithubIconWhite from "../../Images/github-icon-white.png";
import LinkedinIconWhite from "../../Images/linkedin-square-icon-white.png";
import MailIconWhite from "../../Images/mail-send-icon-white.png"

export const Footer = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div id="footer">
      <div>
        <h3>
          <span className="mobileHide">Developed by </span>Darren Evans
        </h3>
      </div>
      <div>
        <h3>
          <span className="mobileHide">Copyright</span>
          © 2023
        </h3>
      </div>
      <div id="footerLogos">
        <a href="https://github.com/djevy/">
          <img src={darkMode ? GithubIcon : GithubIconWhite} alt="Github logo" />
        </a>
        <a href="https://www.linkedin.com/in/darren-evans-061685157/">
          <img src={darkMode ? LinkedinIcon : LinkedinIconWhite} alt="Linkedin logo" />
        </a>
        <a href="mailto:contact@darrenrevans.co.uk">
        <img src={darkMode ? MailIcon : MailIconWhite} alt="Mail icon" />
        </a>
      </div>
    </div>
  );
};
