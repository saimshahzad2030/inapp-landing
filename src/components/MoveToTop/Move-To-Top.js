import React from "react";
import style from "./Move-To-Top.module.css";
const MoveToTop = () => {
  return (
    <div className={`flex flex-row items-center justify-end `}>
      <div
        className={`flex flex-col items-center justify-center w-16 cursor-pointer py-4 ${style.moveToTopDiv}`}
      >
        <div className="bg-white w-1 h-28 "></div>
        <span
          className={`inline-block transform -rotate-90 mt-8 text-white font-bold`}
        >
          Top
        </span>
      </div>
    </div>
  );
};

export default MoveToTop;
