import {
  SectionSubHeadingH4,
  SectionHeadingH3,
  SectionHeadingH5,
  SectionHeadingH6,
} from "../../styles/common";
import { getInstituteLogo } from "./utils/getInstituteLogo";

const EducationCard = (props) => {
  const { institute } = props;
  return (
    <div className="container-fluid mt-4">
      <div className="card shadow-lg">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 col-12 d-flex justify-content-center flex-column p-4">
              <div>
                {getInstituteLogo({
                  university: institute.university,
                  universityHomepage: institute.university_homepage,
                })}
              </div>
              <div className="d-flex justify-content-center mt-2">
                <SectionSubHeadingH4>{institute.level}</SectionSubHeadingH4>
              </div>
              <div className="d-flex justify-content-center mt-2">
                <SectionHeadingH5>{institute.duration}</SectionHeadingH5>
              </div>
            </div>
            <div className="col-lg-8 col-12 p-4">
              <a
                style={{ textDecoration: "none", outline: 0 }}
                href={institute.university_homepage}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SectionHeadingH3>{institute.university}</SectionHeadingH3>
              </a>

              <a
                style={{ textDecoration: "none", outline: 0 }}
                href={institute.college_homepage}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SectionHeadingH3>{institute.college}</SectionHeadingH3>
              </a>

              <SectionHeadingH6>{institute.location}</SectionHeadingH6>

              <div className="mt-4">
                <SectionHeadingH5>
                  {institute.degree} - {institute.major}
                </SectionHeadingH5>
                {institute.related_courses.length > 0 && (
                  <SectionHeadingH5 className="mt-4 mb-3">
                    Related Courses:
                  </SectionHeadingH5>
                )}
                <div style={{ overflow: "auto" }}>
                  {institute.related_courses.length > 0 &&
                    institute.related_courses.map((course, index) => {
                      return (
                        <div
                          key={index}
                          className="badge badge-pill badge-warning m-2"
                          style={{ fontWeight: "normal", fontSize: "15px" }}
                        >
                          {course}
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
