import React from "react";
import CareersCard from "../CareersCard/Careers-Card";
import style from "./Careers.module.css";
import { careers } from "../../../constants/homepage";
import CareersRightDiv from "./CareersRightDiv";
const Careers = ({ isVisible }) => {
  return (
    <div
      className={`flex flex-col-reverse lg:flex-row items-start justify-evenly mt-20 lg:mt-40 animated-div ${
        isVisible ? "isVisible" : ""
      }`}
    >
      <div
        className={`flex flex-col items-start w-full lg:w-6/12 mt-16 lg:mt-0`}
      >
        {careers.map((career, index) => (
          <CareersCard text={career} isVisible={isVisible} key={index} />
        ))}
      </div>
      <CareersRightDiv isVisible={isVisible} />
    </div>
  );
};

export default Careers;
