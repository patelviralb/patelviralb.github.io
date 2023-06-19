import React from "react";

import {
  Barclays,
  QuickBase,
  KhouryCollegeOfComputerSciences,
  NortheasternUniversity,
  Prolifics,
  Infosys,
} from "../company-logos/company-logos";

export const defaultState = {
  BARCLAYS: "SHOW",
  QB: "SHOW",
  PROLIFICS: "SHOW",
  INFOSYS_TA: "SHOW",
  INFOSYS_SSE: "SHOW",
  INFOSYS_SE: "SHOW",
};

export const getCompanyLogo = (organisation) => {
  switch (organisation) {
    case "BARCLAYS":
      return <Barclays />;
    case "QB":
      return <QuickBase />;
    case "KHOURY_ADMIN":
      return <KhouryCollegeOfComputerSciences />;
    case "DRC_NOTE_TAKER":
      return <NortheasternUniversity />;
    case "PROLIFICS":
      return <Prolifics />;
    case "INFOSYS_TA":
    case "INFOSYS_SSE":
    case "INFOSYS_SE":
      return <Infosys />;
    default:
      return null;
  }
};
