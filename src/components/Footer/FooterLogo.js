import React from "react";

const FooterLogo = ({ imgSrc, altText, classname }) => {
  return <img src={imgSrc} alt={altText} className={classname} />;
};

export default FooterLogo;
