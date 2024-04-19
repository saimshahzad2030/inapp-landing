"use client";
import React, { useState } from "react";
import style from "./Careers-Card.module.css";
const CareersCard = ({ text, isVisible }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`flex flex-col items-center w-full px-8 lg:px-0 cursor-pointer `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`flex flex-row items-center justify-between w-full my-2 lg:my-4`}
      >
        <h1
          className={`text-3xl lg:text-2xl ${isVisible ? style.fadeInUp : ""}`}
        >
          {text}
        </h1>
        <img
          src="/Assets/careers/next-black.svg"
          alt="more"
          className="w-4 h-4 "
        />
      </div>
      <div className={`flex flex-col items-start w-full `}>
        <div className={` w-full bg-gray-400  h-[0.7px]`}></div>
        <div
          className={`w-full bg-blue-400  h-[2px] ${style.animated} ${
            isHovered ? style.hovered : ""
          }`}
        ></div>
      </div>
    </div>
  );
};

export default CareersCard;
