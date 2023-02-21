import React from "react";
import "./Footer.css";
// import {
//   GithubOutlined,
//   LinkedinFilled,
//   MailOutlined,
//   CopyrightOutlined,
// } from "@ant-design/icons";
import GithubIcon from "../../Images/github-icon.png";
import LinkedinIcon from "../../Images/linkedin-square-icon.png";
import MailIcon from "../../Images/mail-send-icon.png"

export const Footer = () => {
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
          <img src={GithubIcon} alt="Github logo" />
        </a>
        <a href="https://www.linkedin.com/in/darren-evans-061685157/">
          <img src={LinkedinIcon} alt="Linkedin logo" />
        </a>
        <a href="mailto:contact@darrenrevans.co.uk">
        <img src={MailIcon} alt="Mail icon" />
        </a>
      </div>
    </div>
  );
};
