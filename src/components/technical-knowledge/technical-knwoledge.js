import React, { Fragment } from "react";

import languageData from "../../data/technical-knowledge/languages.json";
import technologyAndFrameworkData from "../../data/technical-knowledge/technologies-and-frameworks.json";

import TechnicalKnowledgeSection from "./technical-knowledge-section";
import { SectionHeadingH1 } from "../../styles/common";
import PageBreak from "../page-break";

const TechnicalKnowledge = () => {
  return (
    <Fragment>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-12">
            <SectionHeadingH1>My Technical Knowledge</SectionHeadingH1>
          </div>
        </div>

        {languageData.languages.length > 0 ? (
          <TechnicalKnowledgeSection
            technicalKnowledgeSection="Programming Languages I know"
            type="languages"
            values={languageData.languages}
          />
        ) : null}

        {technologyAndFrameworkData.technologiesAndFrameworks.length > 0 ? (
          <TechnicalKnowledgeSection
            technicalKnowledgeSection="Technologies &amp; Frameworks I've worked on"
            type="frameworks"
            values={technologyAndFrameworkData.technologiesAndFrameworks}
          />
        ) : null}
      </div>
      <div className="mb-5" />
      <div id="vp-my-work-experience" />
      <PageBreak />
    </Fragment>
  );
};

export default TechnicalKnowledge;
