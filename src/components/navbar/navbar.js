import React, { useState } from "react";

import navbarLinks from "../../data/navbar/navbar-links.json";
import Navlink from "./navlink";

const Navbar = () => {
  const [bgColor, setBgColor] = useState("");

  React.useEffect(() => {
    const listenScrollEvent = () => {
      HandleNavbarColorChangeEvents();
    };

    const listenResizeEvent = () => {
      HandleNavbarColorChangeEvents();
    };

    const HandleNavbarColorChangeEvents = () => {
      const navbarExpansionButton = document.getElementById(
        "vp-navbar-expand-button"
      );
      const navbarButtonVisibility = window.getComputedStyle(
        navbarExpansionButton
      ).display;

      if (window.pageYOffset > 500 || navbarButtonVisibility !== "none") {
        setBgColor("bg-primary");
      } else {
        setBgColor("");
      }
    };

    window.addEventListener("scroll", listenScrollEvent);
    window.addEventListener("resize", listenResizeEvent);
    HandleNavbarColorChangeEvents();

    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
      window.removeEventListener("resize", listenResizeEvent);
    };
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-primary fixed-top ${bgColor}`}
    >
      <button
        id="vp-navbar-expand-button"
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
      >
        <i id="vp-navbar-button-icon" className="fas fa-bars text-white" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          {navbarLinks.links.length > 0
            ? navbarLinks.links.map((section, index) => {
                return (
                  <Navlink
                    key={index}
                    name={section.name}
                    href={section.link}
                  />
                );
              })
            : null}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
