export const getCssClasses = (index) => {
  let cssClasses = "col-12 col-md-6 col-lg-3";
  switch (index) {
    case 0:
      cssClasses += "";
      break;
    case 1:
      cssClasses += " mt-md-0 mt-4";
      break;
    case 2:
      cssClasses += " mt-lg-0 mt-4";
      break;
    case 3:
      cssClasses += " mt-lg-0 mt-4";
      break;
    default:
      cssClasses += " mt-4";
      break;
  }

  return cssClasses;
};
