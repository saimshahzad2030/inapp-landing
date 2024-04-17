import React from "react";
import style from "./Careers-Card.module.css";
const CareersCard = ({ text }) => {
  return (
    <div className={`flex flex-col items-center w-full px-8 lg:px-0 `}>
      <div className={`flex flex-row items-center justify-between w-full `}>
        <h1 className={`text-3xl lg:text-2xl `}>{text}</h1>
        <img
          src="/Assets/careers/next-svgrepo-com.svg"
          alt="more"
          className="w-4 h-4"
        />
      </div>
      <div
        className={` w-full bg-gray-400  mt-2 lg:mt-4 ${style.stroke}`}
      ></div>
    </div>
  );
};

export default CareersCard;
