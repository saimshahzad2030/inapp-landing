import React from "react";
import style from "./About.module.css";
const AboutText = () => {
  return (
    <div
      className={`h-full ${style.leftChild} flex flex-col items-start p-12 pt-24 w-full md:w-2/5 `}
    >
      <div className={`flex flex-row items-center w-full ml-6`}>
        <div className={`${style.line} mr-4 `}></div>
        <span className={`${style.span1} text-xl`}>WHO WE ARE</span>
      </div>

      <p className={`text-md mt-12 text-justify`}>
        Great brands are created to tell a story that never stops unfolding, our
        aim is not only to develop and designs, we want to give our clients an
        experience, an impression, a promise, an outstanding symbol that will
        always connect and remain relevant
      </p>
      <div className={`flex flex-row items-center w-full mt-8 ml-6`}>
        <span className={`${style.span2} text-lg font-bold  mr-4 `}>
          Explore
        </span>
        <div className={`${style.line}`}></div>
      </div>
    </div>
  );
};

export default AboutText;
