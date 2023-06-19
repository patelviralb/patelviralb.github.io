import styled from "styled-components";

export const InstituteLogoAnchor = styled.a`
  outline: 0;
  display: flex;
  justify-content: center;
`;

export const NortheasternUniversityImage = styled.img`
  width: 100%;
  align-self: center;

  @media screen and (max-width: 991px) {
    width: 60%;
  }

  @media screen and (max-width: 576px) {
    width: 100%;
  }
`;

export const UniversityOfMumbaiImage = styled.img`
  width: 50%;
  align-self: center;
  margin-top: 2rem;
  margin-bottom: 1.5rem;

  @media screen and (max-width: 991px) {
    width: 30%;
  }

  @media screen and (max-width: 576px) {
    width: 50%;
  }
`;

export const SbmpImage = styled.img`
  width: 50%;
  align-self: center;
  margin-top: 1rem;
  margin-bottom: 1rem;

  @media screen and (max-width: 991px) {
    width: 30%;
  }

  @media screen and (max-width: 576px) {
    width: 50%;
  }
`;
