import React from "react";
import style from "./Expertise.module.css";
const ExpertiseCard = ({ text, description, imgSrc }) => {
  return (
    <div
      className={`py-4 sm:py-12  flex flex-col items-center sm:items-start px-4`}
    >
      <div className="flex flex-col items-center sm:items-start h-48">
        <img src={imgSrc} alt="digital workplace" />
        <h3 className={`text-2xl font-bold text-blue-950 ${style.cardHeading}`}>
          {text}
        </h3>
      </div>
      <p className={`mt-4 text-sm ${style.cardText}`}>{description}</p>
    </div>
  );
};

export default ExpertiseCard;
