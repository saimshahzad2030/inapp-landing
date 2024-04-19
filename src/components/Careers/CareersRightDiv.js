"use client";
import React, { useState } from "react";
import style from "./Careers.module.css";
const CareersRightDiv = ({ isVisible }) => {
  const [divHovered, setDivHovered] = useState(false);

  return (
    <div
      className={`flex flex-col items-start px-12 lg:px-8 2xl:px-12 w-full lg:w-1/5 ${
        isVisible ? style.fadeInDown : ""
      }`}
    >
      <div className={`flex flex-row items-center w-full ml-6 `}>
        <span className={`${style.span} mr-4 text-xl`}>Careers</span>
        <div className={`${style.line} w-[60px] h-1 `}></div>
      </div>

      <h2 className={` mt-6 font-bold lg:text-xl text-2xl`}>Attach with us.</h2>
      <p className={`mt-2 lg:text-xl text-xl`}>
        Theres always room for game-changers at InApp arena
      </p>
      <div
        className={`flex flex-row items-center w-full ml-6  mt-6 cursor-pointer`}
        onMouseEnter={() => setDivHovered(true)}
        onMouseLeave={() => {
          setDivHovered(false);
        }}
      >
        <div
          className={`${style.line} w-[40px] h-1 mr-4 ${
            divHovered ? style.lineExpand : style.lineCompress
          }`}
        ></div>
        <span className={`${style.span} text-sm 2xl:text-lg `}>
          See open positions
        </span>
      </div>
    </div>
  );
};

export default CareersRightDiv;
