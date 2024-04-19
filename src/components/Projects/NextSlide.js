import React from "react";
import style from "./Projects.module.css";
const NextSlide = ({ images, currentSlide, projectsname, handleNextClick }) => {
  return (
    <div
      className={`hidden absolute bottom-[100px] lg:top-[600px] right-0 sm:flex flex-row w-56 z-50  ${style.bg}  h-[150px] `}
    >
      <div className={`w-40 bg-white`}>
        <img
          src={images[currentSlide < 6 ? currentSlide + 1 : 0]}
          alt={projectsname[currentSlide < 6 ? currentSlide + 1 : 0]}
          className="w-40 h-full"
        />
      </div>
      <div
        className={`w-16 flex items-center justify-center  cursor-pointer`}
        onClick={handleNextClick}
      >
        <img
          src="/Assets/careers/next-svgrepo-com.svg"
          alt="more"
          className="w-4 h-4"
        />
      </div>
    </div>
  );
};

export default NextSlide;
