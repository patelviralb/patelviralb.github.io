import styled from "styled-components";

export const SectionHeadingH1 = styled.h1`
  font-family: Georgia, sans-serif;
  font-weight: bold;
  text-justify: inter-word;
  color: rgba(0, 0, 0, 0.54);
`;

export const SectionHeadingH2 = styled.h2`
  font-family: Georgia, sans-serif;
  font-weight: bold;
  text-justify: inter-word;
  color: rgba(0, 0, 0, 0.54);
`;

export const SectionHeadingH3 = styled.h3`
  font-family: Georgia, sans-serif;
  font-weight: bold;
  text-justify: inter-word;
  color: rgba(0, 0, 0, 0.54);
`;

export const SectionSubHeadingH4 = styled.h4`
  font-family: Georgia, sans-serif;
  font-weight: bold;
  text-justify: inter-word;
  color: rgba(0, 0, 0, 0.54);
`;

export const SectionHeadingH5 = styled.h5`
  font-family: Georgia, sans-serif;
  font-weight: bold;
  text-justify: inter-word;
  color: rgba(0, 0, 0, 0.54);
`;

export const SectionHeadingH6 = styled.h6`
  font-family: Georgia, sans-serif;
  font-weight: bold;
  text-justify: inter-word;
  color: rgba(0, 0, 0, 0.54);
`;

export const CenterAlignedContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const CenterAlignedItem = styled.div`
  align-self: center;
`;

export const Image = styled.img`
  width: 150px;
  height: 150px;
  align-self: center;
  background: #f5f5f5;
`;

export const TimelineContent = styled.div`
  position: relative;
  width: 45%;
  padding: 10px 30px;
  border-radius: 4px;
  background: #f5f5f5;
  box-shadow: 0 20px 25px -15px rgba(0, 0, 0, 0.3);

  &::after {
    content: "";
    position: absolute;
    border-style: solid;
    width: 0;
    height: 0;
    top: 30px;
    right: -15px;
    border-width: 10px 0 10px 15px;
    border-color: transparent transparent transparent #f5f5f5;
  }
`;

export const Date = styled.div`
  background: #ff4081;
  display: inline-block;
  color: #ffffff;
  padding: 10px;
  position: absolute;
  top: 0;
  right: 0;
`;

export const TimelineItem = styled.div`
  width: 100%;
  margin-bottom: 70px;

  &:nth-child(even) {
    ${TimelineContent} {
      float: right;

      ${Date} {
        right: auto;
        left: 0;
      }

      &::after {
        content: "";
        position: absolute;
        border-style: solid;
        width: 0;
        height: 0;
        top: 30px;
        left: -15px;
        border-width: 10px 15px 10px 0;
        border-color: transparent #f5f5f5 transparent transparent;
      }
    }
  }

  &::after {
    content: "";
    display: block;
    clear: both;
  }
`;

export const TimelineBullet = styled.div`
  width: 30px;
  height: 30px;
  background: #3f51b5;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  margin-top: 25px;
  margin-left: -15px;
`;

export const TimelineBar = styled.section`
  position: relative;

  &::before {
    content: "";
    background: #c5cae9;
    width: 5px;
    height: 100%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  @media screen and (max-width: 991px) {
    &::before {
      left: 20px;
    }

    ${TimelineBullet} {
      left: 20px;
    }

    ${TimelineContent} {
      max-width: 100%;
      width: auto;
    }

    ${TimelineItem} {
      max-width: 100%;
      width: auto;
      margin-left: 40px;

      &:nth-child(even) {
        ${TimelineContent} {
          float: none;
        }
      }
    }

    &:nth-child(odd) {
      ${TimelineContent} {
        &::after {
          content: "";
          position: absolute;
          border-style: solid;
          width: 0;
          height: 0;
          top: 30px;
          left: -15px;
          border-width: 10px 15px 10px 0;
          border-color: transparent #f5f5f5 transparent transparent;
        }
      }
    }
  }
`;
