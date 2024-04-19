import React from "react";
import style from ".//Projects.module.css";
const InAppText = () => {
  return (
    <div className="flex flex-col items-start w-full   lg:w-4/12 mt-12 lg:mt-36">
      <div className={`flex flex-row items-center w-full px-8  lg:pl-12`}>
        <div className={`${style.line} px-8`}></div>
        <span className={`${style.span1} text-sm px-4 lg:px-4`}>WE ARE</span>
      </div>
      <h1
        className={`text-4xl sm:text-3xl lg:text-5xl xl:text-7xl font-bold mt-8 px-8 lg:pl-12 ${style.fadeinDown}`}
      >
        InApp Solutions
      </h1>
      <p
        className={`md:text-md lg:text-lg 2xl:text-2xl text-justify mt-8 font-light px-8 lg:pl-12 ${style.fadeinUp}`}
      >
        InApp Solutions is the one-stop solution for all your technology needs
        in this rapidly transforming digital world. We dive into the depth of
        technology to discover the most innovative, efficient, and robust
        digital solutions for you.
      </p>
      <div
        className={`hidden lg:flex flex-col items-center justify-center w-16 cursor-pointer mt-8 py-6 ${style.moveToTopDiv} ${style.fadeinLeft}`}
      >
        <span className={`inline-block transform -rotate-90  text-white`}>
          MORE
        </span>
        <div className={`bg-white h-24 mt-8 flex-col items-center justfy-end`}>
          <div className={` w-[0.4px] ${style.expand}`}></div>
        </div>
      </div>
    </div>
  );
};

export default InAppText;
