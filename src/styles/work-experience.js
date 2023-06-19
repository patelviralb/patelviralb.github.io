import styled from "styled-components";

export const Proficiency = styled.span`
  font-weight: bold;
  font-size: small;
  color: #666666;
`;

export const CenterAlignedContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const CompanyHeadingH5 = styled.h5`
  font-family: Georgia, sans-serif;
  font-weight: bold;
  text-justify: inter-word;
  color: rgba(0, 0, 0, 0.54);
  align-self: center;
  margin-top: 0.5rem;
`;

export const DetailsIcon = styled.i`
  transform: rotate(0deg);
  transition: all 0.4s ease-out;
  transform: ${(props) => (props.details === "HIDE" ? `rotate(180deg)` : "")};
`;

export const VisaImage = styled.img`
  width: 100%;
  height: auto;
  padding: 0.5rem;

  @media screen and (max-width: 576px) {
    width: 100%;
  }
`;

export const BarclaysImage = styled.img`
  width: 60%;
  height: auto;
  padding: 0.5rem;

  @media screen and (max-width: 576px) {
    width: 100%;
  }
`;

export const QuickBaseSvg = styled.svg`
  fill: #74489d;
  width: 50%;

  @media screen and (max-width: 768px) {
    width: 65%;
  }

  @media screen and (max-width: 576px) {
    width: 100%;
  }
`;

export const KhouryImage = styled.img`
  width: 50%;
  align-self: center;

  @media screen and (max-width: 768px) {
    width: 65%;
  }

  @media screen and (max-width: 576px) {
    width: 100%;
  }
`;

export const NortheasternImage = styled.img`
  width: 30%;
  align-self: center;

  @media screen and (max-width: 768px) {
    width: 65%;
  }

  @media screen and (max-width: 576px) {
    width: 100%;
  }
`;

export const ProlificsImage = styled.img`
  background: #4297d2;
  width: 75%;
  height: auto;
  padding: 0.5rem;

  @media screen and (max-width: 576px) {
    width: 100%;
  }
`;

export const CompanyLogoAnchor = styled.a`
  outline: 0;
  align-self: center;
  display: flex;
  justify-content: center;
`;

export const InfosysSvg = styled.svg`
  background: #0070b7;
  width: 125px;
  height: 125px;
  padding: 0.5rem;
`;

export const UnorderedList = styled.ul`
  border-left: 10px solid #303f9f;
`;

export const CompanyHeadingContainerLarge = styled.div`
  @media screen and (min-width: 991px) {
    display: block;
  }
  @media screen and (max-width: 991px) {
    display: none;
  }
`;

export const CompanyHeadingContainerSmall = styled.div`
  @media screen and (max-width: 991px) {
    display: block;
  }
  @media screen and (min-width: 991px) {
    display: none;
  }
`;
