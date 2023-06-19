import React, { Fragment } from "react";

import {
  SectionSubHeadingH4,
  CenterAlignedContainer,
} from "../../styles/common";
import { getCssClasses } from "./utils/getCssClasses";
import { getSvg } from "./svg/getSvg";
import { Proficiency } from "../../styles/technical-knowledge";

const renderSection = (props) => {
  return (
    <div className="container-fluid mt-4">
      <div className="row">
        {props.values
          ? props.values.map((framework, index) => {
              const cssClasses = getCssClasses(index);

              return (
                <div className={cssClasses} key={index}>
                  <div className="card shadow rounded">
                    <div className="card-body text-justify">
                      <h5>
                        {getSvg(framework.name)}
                        <span className="ml-2">{framework.name}</span>
                      </h5>
                      <Proficiency>
                        Proficiency: {framework.proficiency}
                      </Proficiency>
                    </div>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

const TechnicalKnowledgeSection = (props) => {
  return (
    <Fragment>
      <div className="row mt-4">
        <CenterAlignedContainer className="col-md-10 offset-md-1 col-12">
          <SectionSubHeadingH4 className="mt-5">
            {props.technicalKnowledgeSection}
          </SectionSubHeadingH4>
        </CenterAlignedContainer>
      </div>
      <div className="row mt-4">
        <CenterAlignedContainer className="col-md-10 offset-md-1 col-12">
          {renderSection(props)}
        </CenterAlignedContainer>
      </div>
    </Fragment>
  );
};

export default TechnicalKnowledgeSection;
