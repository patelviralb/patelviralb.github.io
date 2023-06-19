import React, { Fragment } from "react";

import socialMediaData from "../../../data/contact-me/contact-me.json";

import { SocialMediaIcon, SocialMediaAnchor } from "../../../styles/contact-me";
import {
  CenterAlignedContainer,
  SectionSubHeadingH4,
} from "../../../styles/common";
import {
  removeButtonFocusAfterClick,
  checkPressedKey,
} from "../../../utils/removeButtonFocusAfterClick";

const SocialMedia = () => {
  return socialMediaData.SocialMedia.length > 0 ? (
    <Fragment>
      <div className="row mt-5">
        <CenterAlignedContainer className="col-md-10 offset-md-1 col-12">
          <SectionSubHeadingH4>
            Or, we can connect over my social media!
          </SectionSubHeadingH4>
        </CenterAlignedContainer>
      </div>
      <div className="row mt-2">
        <CenterAlignedContainer className="col-md-10 offset-md-1 col-12">
          {socialMediaData.SocialMedia.length > 0
            ? socialMediaData.SocialMedia.map((socialMediaProfile, index) => {
                return (
                  <SocialMediaAnchor
                    key={index}
                    className="bg-success m-2 text-decoration-none shadow-lg"
                    href={socialMediaProfile.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseDown={removeButtonFocusAfterClick}
                    onKeyUp={checkPressedKey}
                    title={socialMediaProfile.name}
                  >
                    <SocialMediaIcon className={socialMediaProfile.class} />
                  </SocialMediaAnchor>
                );
              })
            : null}
        </CenterAlignedContainer>
      </div>
    </Fragment>
  ) : null;
};

export default SocialMedia;
