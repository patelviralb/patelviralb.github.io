import React, { Fragment } from "react";

import vp_background_image_path from "../../data/home/home-backgroung-image_keyboard-mouse.jpeg";
import { BackgroundImage, HomePageContentContainer } from "../../styles/home";
import ProfileImage from "./ProfileImage";
import ProfileHeading from "./ProfileHeading";
import DownloadResumeButton from "./DownloadResumeButton";

const Home = () => {
  return (
    <Fragment>
      <div id="vp-home" />
      <BackgroundImage imagePath={vp_background_image_path}>
        <HomePageContentContainer>
          <div className="container">
            <ProfileImage />

            <ProfileHeading />

            <DownloadResumeButton />

            <div id="vp-about-me" />
          </div>
        </HomePageContentContainer>
      </BackgroundImage>
    </Fragment>
  );
};

export default Home;
