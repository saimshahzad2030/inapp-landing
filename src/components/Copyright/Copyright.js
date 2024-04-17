import React from "react";
import style from "./Copyright.module.css";
const Copyright = () => {
  return (
    <div
      className={`flex flex-row justify-between items-center ${style.copyright} py-8 pl-24`}
    >
      <div className={`flex flex-col items-start `}>
        <p className={`text-sm text-white`}>©InApp Solutions 2024.</p>
        <p className={`text-sm text-white`}>All rights reserved</p>
      </div>
      <div className={`flex flex-row items-center justify-between w-1/5 mr-16`}>
        <div className="flex flex-col items-end">
          <p className="text-sm text-white">Cookies Policy</p>
          <div className={`w-40 h-1 bg-white`}></div>
        </div>
        <div className="flex flex-col items-end">
          <p className="text-sm text-white">Privacy Policy</p>
          <div className={`w-40 h-1 bg-white`}></div>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
