import React, { useState, useContext } from "react";
import { DarkModeContext } from "../DarkMode/DarkModeProvider";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
// import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import Hamburger from "../../Images/hamburger-menu.png";
import HamburgerWhite from "../../Images/hamburger-menu-white.png";
import Cross from "../../Images/cross-menu.png";
import CrossWhite from "../../Images/cross-menu-white.png";
import DarkIcon from "../../Images/dark-mode-toggle-icon.png";
import LightIcon from "../../Images/light-mode-toggle-icon.png";

export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  const closeMenu = () => {
    setNavbarOpen(false);
  };

  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const handleDarkToggle = () => {
    toggleDarkMode();
  };

  return (
    <section id="navbar" className={darkMode ? "light-mode" : ""}>
      <div id="mobile">
        <nav className="navBar">
          <div id="logo">
            <Link to="/" className="Link">
              <h2>DE - Web Dev</h2>
            </Link>
          </div>
          <button onClick={handleToggle}>
            {navbarOpen ? (
              <img
                id="closeBtn"
                src={darkMode ? Cross : CrossWhite}
                alt="Close menu"
              />
            ) : (
              <img
                id="menuBtn"
                src={darkMode ? Hamburger : HamburgerWhite}
                alt="Open menu"
              />
            )}
          </button>
          <div className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
            <HashLink smooth to="/" onClick={() => closeMenu()}>
              Home
            </HashLink>
            <HashLink
              smooth
              to="#about"
              className="Link"
              onClick={() => closeMenu()}
            >
              About
            </HashLink>
            <HashLink
              smooth
              to="#resume"
              className="Link"
              onClick={() => closeMenu()}
            >
              Resume
            </HashLink>
            <HashLink
              smooth
              to="#projects"
              className="Link"
              onClick={() => closeMenu()}
            >
              Projects
            </HashLink>
            <HashLink
              smooth
              to="#contact"
              className="Link contactLink"
              onClick={() => closeMenu()}
            >
              Contact
            </HashLink>
            <img
              className="DarkToggle"
              src={darkMode ? LightIcon : DarkIcon}
              alt="Dark mode toggle"
              onClick={handleDarkToggle}
            />
          </div>
        </nav>
      </div>
      <div id="desktop">
        <div id="logo">
          <Link to="/" className="Link">
            <h2>DE</h2>
          </Link>
        </div>
        <div id="links">
          <HashLink smooth to="#" className="Link">
            Home
          </HashLink>
          <HashLink smooth to="#about" className="Link">
            About
          </HashLink>
          <HashLink smooth to="#resume" className="Link">
            Resume
          </HashLink>
          <HashLink smooth to="#projects" className="Link">
            Projects
          </HashLink>
          <HashLink smooth to="#contact" className="Link contactLink">
            Contact
          </HashLink>
          <img
            className="DarkToggle"
            src={darkMode ? LightIcon : DarkIcon}
            alt="Dark mode toggle"
            onClick={handleDarkToggle}
          />
        </div>
      </div>
    </section>
  );
};
