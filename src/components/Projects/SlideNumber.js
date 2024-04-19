import React from "react";
import style from "./Projects.module.css";
const SlideNumber = ({ currentSlide }) => {
  return (
    <div
      className={`hidden absolute top-[200px] right-8 lg:flex flex-row  ${style.bg} px-8 py-6 z-50`}
    >
      <p className={`text-white font-bold`}>{currentSlide + 1}</p>
    </div>
  );
};

export default SlideNumber;
