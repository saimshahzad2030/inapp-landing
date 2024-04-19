"use client";
import React, { useState, useEffect } from "react";
import style from "./Projects.module.css";
const SlidePagination = ({ currentSlide, handleNextClick }) => {
  const [animationKey, setAnimationKey] = useState(0);

  // Increment the animation key whenever currentSlide changes
  useEffect(() => {
    setAnimationKey(animationKey + 1);
  }, [currentSlide]);

  return (
    <div
      className={`flex flex-row items-end lg:justify-start justify-between w-full lg:w-7/12 h-[50px] lg:h-[200px] ${style.pagination}`}
    >
      <div
        className={`flex flex-row items-center justify-evenly m-4 w-7/12 sm:w-5/12 lg:w-5/12 xl:w-3/12`}
      >
        <p className={`text-white`}>0{currentSlide + 1}</p>
        <div
          className={`${style.expandHorizontal2Parent} h-[1px] w-[80px] sm:w-40 flex-row items-center justify-end`}
          key={animationKey} // Ensure re-rendering when animationKey changes
        >
          <div className={`bg-white h-full ${style.expandHorizontal2}`}></div>
        </div>
        <p className={` text-white`}>07</p>
      </div>
      <div
        className={`w-16 lg:hidden flex flex-col items-center justify-center  cursor-pointer h-full bg-blue-500`}
        onClick={handleNextClick}
      >
        <img
          src="/Assets/careers/next-svgrepo-com.svg"
          alt="more"
          className="w-4 h-4"
        />
      </div>
    </div>
  );
};
export default SlidePagination;
