import React from "react";
import style from "./Expertise.module.css";
const ExpertiseText = () => {
  return (
    <div
      className={`h-auto ${style.leftChild} flex flex-col items-start p-12 pt-24 `}
    >
      <div className={`flex flex-row items-center w-full ml-6`}>
        <div className={`${style.line} mr-4 `}></div>
        <span className={`${style.span1} text-xl`}>WHAT WE DO</span>
      </div>
      <h1 className={`text-3xl md:text-3xl lg:pr-8 font-bold text-black mt-5`}>
        Captivating and Interactive visuals.
      </h1>
      <p className={`text-smd mt-12`}>
        InApp incorporation is a team of proficient, creative, and efficient
        millennials who are incessantly improving their skills in their field of
        expertise.
      </p>
      <div className={`flex flex-row items-center w-full mt-8 ml-6`}>
        <span className={`${style.span2} text-lg font-bold  mr-4 `}>
          Discover more
        </span>
        <div className={`${style.line}`}></div>
      </div>
    </div>
  );
};

export default ExpertiseText;
