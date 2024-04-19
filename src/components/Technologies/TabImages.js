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
      className={`mx-auto mt-10 grid max-w-lg grid-cols-6 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 ${
        isVisible ? style.imageAnimations : ""
      }`}
    >
      {tabs[activeIndex].images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt="image"
          className={`${
            tabs[activeIndex].images.length !== 2 && index < 3
              ? "col-span-2 max-h-20 w-full object-contain"
              : index === 3 || index === 0
              ? "col-span-2 max-h-20 w-full object-contain col-start-2"
              : "col-span-2 max-h-20 w-full object-contain col-start-auto"
          }`}
        />
      ))}
    </div>
  );
};

export default TabImages;
