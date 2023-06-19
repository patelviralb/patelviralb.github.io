import React, { Fragment, useState } from "react";

import { defaultState, getCompanyLogo } from "./utils/work-experience-details";

import {
  TimelineItem,
  TimelineBullet,
  TimelineContent,
} from "../styles/common";
import {
  CompanyHeadingH5,
  DetailsIcon,
  UnorderedList,
} from "../styles/work-experience";

const WorkExperienceCard = (props) => {
  const [workExperienceDetails, setWorkExperienceDetails] = useState(
    defaultState
  );

  const toggleDetailsStatus = (organisation) => {
    if (workExperienceDetails[organisation] === "SHOW") {
      setWorkExperienceDetails({
        ...workExperienceDetails,
        [organisation]: "HIDE",
      });
    } else {
      setWorkExperienceDetails({
        ...workExperienceDetails,
        [organisation]: "SHOW",
      });
    }
  };

  const companyDetails = props.companyDetails;

  return (
    <Fragment>
      <TimelineItem className="mt-5">
        <TimelineBullet />
        <TimelineContent>
          <div className="row mt-3">
            <div className="col-12 d-flex justify-content-center flex-column">
              {getCompanyLogo(props.company)}
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-12 d-flex justify-content-center flex-column">
              <CompanyHeadingH5>{companyDetails.companyName}</CompanyHeadingH5>
              <CompanyHeadingH5>{companyDetails.position}</CompanyHeadingH5>
              <CompanyHeadingH5>{companyDetails.duration}</CompanyHeadingH5>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-12 d-flex justify-content-center flex-column">
              <div
                data-toggle="collapse"
                data-target={`#vp-${props.company}-work-experience`}
                aria-expanded="false"
                className="btn vp-details-button"
                onClick={() => toggleDetailsStatus(props.company)}
              >
                {workExperienceDetails[props.company]} DETAILS
                <DetailsIcon
                  details={workExperienceDetails[props.company]}
                  className={`ml-2 fas fa-chevron-down`}
                />
              </div>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-12 d-flex justify-content-center flex-column">
              <UnorderedList
                className="card-text text-justify collapse"
                id={`vp-${props.company}-work-experience`}
              >
                {[...companyDetails.responsibilities].map(
                  (responsibility, index) => (
                    <li key={index} className="mb-2">
                      {responsibility}
                    </li>
                  )
                )}
              </UnorderedList>
            </div>
          </div>
        </TimelineContent>
      </TimelineItem>
    </Fragment>
  );
};

export default WorkExperienceCard;
