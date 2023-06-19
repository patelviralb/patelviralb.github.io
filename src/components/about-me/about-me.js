import React, { Fragment } from "react";

import { AboutMeParagraph } from "../../styles/about-me";
import PageBreak from "../page-break";
import aboutMe from "../../data/about-me/about-me.json";

const AboutMe = () => {
  return (
    <Fragment>
      <div className="container-fluid mt-5">
        {/* <div className="row">
          <div className="col-md-10 offset-md-1 col-12">
            <h1>About Me</h1>
          </div>
        </div> */}
        <div className="row">
          <div className="col-md-10 offset-md-1 col-12">
            <div className="card shadow-lg rounded">
              <div className="card-body text-justify">
                {aboutMe.paragraphs.length > 0
                  ? aboutMe.paragraphs.map((paragraph, index) => (
                      <AboutMeParagraph key={index}>
                        {paragraph}
                      </AboutMeParagraph>
                    ))
                  : null}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-5" />
      <div id="vp-my-technical-knowledge" />
      <PageBreak />
    </Fragment>
  );
};

export default AboutMe;
