import React, { useState } from "react";
import style from "./Expertise.module.css";
const ExpertiseText = ({ isVisible }) => {
  const [divHovered, setDivHovered] = useState(false);
  return (
    <div
      className={`h-auto  ${
        isVisible ? style.leftChild : ""
      } flex flex-col items-start px-8 lg:px-12 lg:mr-4 mt-8 sm:p-4 sm:pt-24 `}
    >
      <div className={`flex flex-row items-center w-auto ml-6`}>
        <div className={`${style.line} mr-4 w-[60px] h-1`}></div>
        <span className={`${style.span1}  text-sm font-bold`}>WHAT WE DO</span>
      </div>
      <h1
        className={`text-3xl md:text-3xl lg:pr-8 lg font-bold text-black mt-5 ${style.heading}`}
      >
        Captivating and Interactive visuals.
      </h1>
      <p className={`text-smd mt-4 lg:mt-12`}>
        InApp incorporation is a team of proficient, creative, and efficient
        millennials who are incessantly improving their skills in their field of
        expertise.
      </p>
      <div
        className={`flex flex-row items-center w-auto mt-4 lg:mt-12 ml-6  cursor-pointer `}
        onMouseEnter={() => setDivHovered(true)}
        onMouseLeave={() => {
          setDivHovered(false);
        }}
      >
        <span className={`${style.span2} text-lg font-bold  mr-4`}>
          Discover more
        </span>
        <div
          className={`w-[60px] h-1 ${style.line} ${
            divHovered ? style.lineExpand : style.lineCompress
          }`}
        ></div>
      </div>
    </div>
  );
};

export default ExpertiseText;
