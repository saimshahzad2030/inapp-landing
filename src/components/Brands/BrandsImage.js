import React from "react";

const BrandsImage = ({ imageSrc, classname, projectName }) => {
  return (
    <div className="flex justify-center items-center">
      <img src={imageSrc} alt={projectName} className={classname} />
    </div>
  );
};

export default BrandsImage;
