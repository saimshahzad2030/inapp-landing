import React from "react";

const InAppLogo = ({ imgSrc }) => {
  return (
    <div
      className={` lg:absolute z-0 right-0 bottom-0 w-full lg:w-1/2 h-full lg:pt-40  flex flex-col `}
    >
      <img src={imgSrc} alt="brand" className={` h-full object-cover`} />
    </div>
  );
};

export default InAppLogo;
