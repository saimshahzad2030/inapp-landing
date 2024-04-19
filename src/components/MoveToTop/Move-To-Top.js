import React from "react";
import style from "./Move-To-Top.module.css";
const MoveToTop = ({ isVisible }) => {
  const handleMoveToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll behavior
    });
  };
  return (
    <div
      className={`hidden lg:flex flex-row items-center justify-end animated-div ${
        isVisible ? "isVisible" : ""
      }`}
    >
      <div
        className={`flex flex-col items-center justify-center w-16 cursor-pointer py-4 ${style.moveToTopDiv}`}
        onClick={handleMoveToTop}
      >
        <div className={`bg-white h-28 mt-8 flex-col items-center justfy-end`}>
          <div className={` w-[0.9px] ${style.expand}`}></div>
        </div>
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
