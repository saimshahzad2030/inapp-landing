"use client";
import React, { useState } from "react";
import style from "./About.module.css";
const AboutText = () => {
  const [divHovered, setDivHovered] = useState(false);
  return (
    <div
      className={`h-full ${style.leftChild} flex flex-col items-start mt-4 px-2 lg:p-12 lg:pt-24 w-full lg:w-2/5 `}
    >
      <div className={`flex flex-row items-center w-full ml-2 sm:ml-6`}>
        <div className={`${style.line} mr-4 w-[60px] h-1`}></div>
        <span className={`${style.span1} text-sm sm:text-xl font-bold`}>
          WHO WE ARE
        </span>
      </div>

      <p className={`text-md mt-12 text-justify`}>
        Great brands are created to tell a story that never stops unfolding, our
        aim is not only to develop and designs, we want to give our clients an
        experience, an impression, a promise, an outstanding symbol that will
        always connect and remain relevant
      </p>
      <div
        className={`flex flex-row items-center w-full my-4 sm:mt-8 ml-2 sm:ml-6 cursor-pointer`}
        onMouseEnter={() => setDivHovered(true)}
        onMouseLeave={() => {
          setDivHovered(false);
        }}
      >
        <span className={`${style.span2} text-lg font-bold  mr-4 `}>
          Explore
        </span>
        <div
          className={`${style.line} w-[60px] h-1 ${
            divHovered ? style.lineExpand : style.lineCompress
          }`}
        ></div>
      </div>
    </div>
  );
};

export default AboutText;
