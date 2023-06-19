import React, { Fragment } from "react";

import { SectionHeadingH1 } from "../../styles/common";
import EducationCard from "./education-card";
import EducationDetails from "../../data/education/education.json";
import PageBreak from "../page-break";

const Education = () => {
  return (
    <Fragment>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-12">
            <SectionHeadingH1>My Education</SectionHeadingH1>
          </div>
        </div>

        <div className="row">
          <div className="col-md-10 offset-md-1 col-12">
            {EducationDetails.my_education.length > 0
              ? EducationDetails.my_education.map((institute, index) => {
                  return <EducationCard key={index} institute={institute} />;
                })
              : null}
          </div>
        </div>
      </div>
      <div className="mb-5" />
      <PageBreak />
    </Fragment>
  );
};

export default Education;
