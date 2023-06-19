import React from "react";

import vp_profile_image from "../../data/home/vp-profile-image.jpg";
import { CenterAlignedContainer } from "../../styles/common";

const ProfileImage = () => {
  return (
    <div className="row">
      <CenterAlignedContainer className="col-6 offset-3 col-md-4 offset-md-4">
        <img
          className="rounded-circle w-100 h-100"
          src={vp_profile_image}
          alt={`Hey there ! I'm Viral Patel`}
        />
      </CenterAlignedContainer>
    </div>
  );
};

export default ProfileImage;
