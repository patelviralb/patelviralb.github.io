import React, { Fragment } from "react";

import emailData from "../../../data/contact-me/contact-me.json";

import {
  CenterAlignedContainer,
  SectionSubHeadingH4,
} from "../../../styles/common";
import { EmailMeButtonText } from "../../../styles/contact-me";
import {
  removeButtonFocusAfterClick,
  checkPressedKey,
} from "../../../utils/removeButtonFocusAfterClick";

const EMAIL_ID = emailData.Email.emailId
  ? emailData.Email.emailId
  : "pviralb05@gmail.com";
const EMAIL_SUBJECT = emailData.Email.subject
  ? emailData.Email.subject
  : "Hi Viral!";

const Email = () => {
  return (
    <Fragment>
      <div className="row">
        <CenterAlignedContainer className="col-md-10 offset-md-1 col-12">
          <SectionSubHeadingH4>
            Wanna reach out to me? Feel free to e-mail me
          </SectionSubHeadingH4>
        </CenterAlignedContainer>
      </div>
      <div className="row mt-2">
        <CenterAlignedContainer className="col-md-10 offset-md-1 col-12">
          <a
            className="btn btn-primary font-weight-bold shadow-lg rounded text-decoration-none"
            href={`mailto:${EMAIL_ID}?subject=${EMAIL_SUBJECT}`}
            onMouseDown={removeButtonFocusAfterClick}
            onKeyUp={checkPressedKey}
            title={`${EMAIL_ID}`}
          >
            <i className="fas fa-envelope mr-2" />
            <EmailMeButtonText>Let's Talk</EmailMeButtonText>
          </a>
        </CenterAlignedContainer>
      </div>
    </Fragment>
  );
};

export default Email;
