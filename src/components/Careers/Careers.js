import React from "react";
import CareersCard from "../CareersCard/Careers-Card";
import style from "./Careers.module.css";
const Careers = () => {
  return (
    <div
      className={`flex flex-col-reverse lg:flex-row items-start justify-evenly mt-40`}
    >
      <div
        className={`flex flex-col items-start w-full lg:w-3/5 mt-16 lg:mt-0`}
      >
        <CareersCard text={"UI/UX Designer"} />
        <CareersCard text={"Frontend Developer"} />
        <CareersCard text={"Backend Developer"} />
        <CareersCard text={"Business Analyst"} />
      </div>
      <div
        className={`flex flex-col items-start px-12 lg:px-8 2xl:px-12 w-full lg:w-1/5`}
      >
        <div className={`flex flex-row items-center w-full ml-6 `}>
          <span className={`${style.span} mr-4 text-xl`}>Careers</span>
          <div className={`${style.line}  `}></div>
        </div>

        <h2 className={` mt-6 font-bold lg:text-xl text-2xl`}>
          Attach with us.
        </h2>
        <p className={`mt-2 lg:text-xl text-xl`}>
          There's always room for game-changers at InApp arena
        </p>
        <div className={`flex flex-row items-center w-full ml-6  mt-6`}>
          <div className={`${style.line}  mr-4 `}></div>
          <span className={`${style.span} text-sm 2xl:text-lg`}>
            See open positions
          </span>
        </div>
      </div>
    </div>
  );
};

export default Careers;
