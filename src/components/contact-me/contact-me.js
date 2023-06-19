import React, { Fragment } from "react";

import Email from "./email";
import SocialMedia from "./social-media";

const ContactMe = () => {
  return (
    <Fragment>
      <div id="vp-contact-me" />
      <div className="container-fluid mt-5">
        <Email />
        <SocialMedia />
      </div>
      <div className="mb-5" />
      {/* <PageBreak /> */}
    </Fragment>
  );
};

export default ContactMe;
