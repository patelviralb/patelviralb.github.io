import styled from "styled-components";

/**
 * The image used downloaded from https://wallpapercave.com/w/wp3483883
 */
export const BackgroundImage = styled.div`
  background-image: url(${(props) => (props.imagePath ? props.imagePath : "")});

  /* Add the blur effect */
  /* filter: blur(10px);
  -webkit-filter: blur(10px);*/

  /* Full height */
  min-height: 100vh;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  background-color: transparent;
`;

export const HomePageContentContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FontContainer = styled.span`
  font-family: Georgia, serif;
  font-weight: bold;
  color: white;
`;

export const Name = styled.span`
  font-size: xx-large;

  @media screen and (max-width: 330px) {
    font-size: x-large;
  }
`;

export const Position = styled.span`
  font-weight: normal;

  font-size: x-large;

  @media screen and (max-width: 330px) {
    font-size: large;
  }
`;

export const Education = styled.span`
  font-weight: normal;

  font-size: x-large;

  @media screen and (max-width: 370px) {
    font-size: large;
  }
`;

export const DownloadResumeButtonText = styled.span`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-size: 0.875rem;
  text-transform: uppercase;
`;
