"use client";
import React, { useState, useEffect } from "react";
import style from "./Technologies.module.css";
const TabImages = ({ tabs, activeIndex, isVisible }) => {
  const [animationKey, setAnimationKey] = useState(0);

  // Increment the animation key whenever activeIndex changes
  useEffect(() => {
    setAnimationKey(animationKey + 1);
  }, [activeIndex]);
  return (
    <div
      key={animationKey}
      className={`mx-auto mt-10 grid w-full grid-cols-6 items-center gap-x-8 gap-y-10 sm:max-w-3xl sm:grid-cols-6 sm:gap-x-10 ${
        isVisible ? style.imageAnimations : ""
      }`}
    >
      {tabs[activeIndex].images.map((image, index) => (
        <div
        key={index}
          className={`flex flex-col items-center ${
            tabs[activeIndex].images.length !== 2 && index < 3
              ? "col-span-2 max-h-12 w-full object-contain"
              : index === 3 || index === 0
              ? "col-span-2 max-h-12 w-full object-contain col-start-2"
              : "col-span-2 max-h-12 w-full object-contain col-start-auto"
          }`}
        >
          <img key={index} src={image.url} alt="image" className="w-12 h-12" />
          <p className={`text-center text-sm mt-4 font-bold`}>{image.name}</p>
        </div>
      ))}
    </div>
  );
};

export default TabImages;
