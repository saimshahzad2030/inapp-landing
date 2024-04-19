import React from "react";

const BrandsImage = ({ imageSrc, classname, projectName }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full pr-8">
      <img src={imageSrc} alt={projectName} className={classname} />
    </div>
  );
};

export default BrandsImage;
