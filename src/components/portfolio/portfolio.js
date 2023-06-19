import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Navbar from "../navbar";
import Home from "../home";
import AboutMe from "../about-me";
import TechnicalKnowledge from "../technical-knowledge";
import WorkExperience from "../work-experience";
import Education from "../education";
import ContactMe from "../contact-me";

const Portfolio = () => {
  return (
    <Fragment>
      <Navbar />
      <Home />
      <AboutMe />
      <TechnicalKnowledge />
      <WorkExperience />
      <Education />
      <ContactMe />
    </Fragment>
  );
};

export default Portfolio;
