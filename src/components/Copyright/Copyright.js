import React from "react";
import style from "./Copyright.module.css";
import CopyrightSection from "./CopyrightSection";
import Policy from "./Policy";
const Copyright = ({ isVisible }) => {
  return (
    <div
      className={`hidden lg:flex flex-row justify-between items-center ${
        style.copyright
      } py-8 animated-div ${isVisible ? "isVisible" : ""}`}
    >
      <CopyrightSection />
      <div
        className={`flex flex-row items-center justify-between xl:w-2/5 2xl:w-1/5 mr-16 `}
      >
        <Policy
          classname={`flex flex-col items-end mr-8`}
          text={`Cookies Policy`}
        />

        <Policy classname={`flex flex-col items-end`} text={`Privacy Policy`} />
      </div>
    </div>
  );
};

export default Copyright;
