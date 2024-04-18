import React from "react";
import style from "./Copyright.module.css";
const Copyright = () => {
  return (
    <div
      className={`hidden lg:flex flex-row justify-between items-center ${style.copyright} py-8 `}
    >
      <div className={`flex flex-col items-start ml-24 w-auto`}>
        <p className={`text-sm text-white`}>©InApp Solutions 2024.</p>
        <p className={`text-sm text-white`}>All rights reserved</p>
      </div>
      <div
        className={`flex flex-row items-center justify-between xl:w-2/5 2xl:w-1/5 mr-16 `}
      >
        <div className="flex flex-col items-end mr-8">
          <p className="text-sm text-white">Cookies Policy</p>
          <div className={`w-40 bg-white ${style.stroke}`}></div>
        </div>
        <div className="flex flex-col items-end ">
          <p className="text-sm text-white">Privacy Policy</p>
          <div className={`w-40  bg-white ${style.stroke}`}></div>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
