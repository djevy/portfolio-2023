import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
// import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import Hamburger from "../../Images/hamburger-menu.png"
import Cross from "../../Images/cross-menu.png"

export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <section id="navbar">
      <div id="mobile">
        <nav
          className="navBar"
          // style={{
          //   backgroundColor:
          //     scrollState === "top" ? "black" : "rgb(19, 19, 19)",
          // }}
        >
          <div id="logo">
            <Link to="/" className="Link">
              <h1>DE</h1>
            </Link>
          </div>
          <button onClick={handleToggle}>
            {navbarOpen ? (
              <img id="closeBtn" src={Cross} alt="Close menu"/>
            ) : (
              <img id="menuBtn" src={Hamburger} alt="Open menu"/>
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
              to="#projects"
              className="Link"
              onClick={() => closeMenu()}
            >
              Projects
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
              to="#contact"
              className="Link"
              onClick={() => closeMenu()}
            >
              Contact
            </HashLink>
          </div>
        </nav>
      </div>
      <div id="desktop">
        <div id="logo">
          <Link to="/" className="Link">
            <h1>DE</h1>
          </Link>
        </div>
        <div id="links">
          <HashLink smooth to="#" className="Link">
            Home
          </HashLink>
          <HashLink smooth to="#about" className="Link">
            About
          </HashLink>
          <HashLink smooth to="#projects" className="Link">
            Projects
          </HashLink>
          <HashLink smooth to="#resume" className="Link">
            Resume
          </HashLink>
          <HashLink smooth to="#contact" className="Link">
            Contact
          </HashLink>
        </div>
      </div>
    </section>
  );
};
