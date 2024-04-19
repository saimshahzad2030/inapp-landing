import React from "react";
import style from "./Projects.module.css";
const Clients = ({ projectsname, currentSlide }) => {
  return (
    <div
      className={`flex flex-col items-center sm:items-start  w-full lg:w-4/12 mx-0 lg:ml-20 py-2`}
    >
      <div className={`w-full bg-gray-200 h-[2px]`}></div>
      <div
        className={`flex flex-col sm:flex-row items-center  w-full justify-evenly lg:justify-start mt-2  `}
      >
        <p className={`text-lg text-gray-600 lg:text-lg w-5/12 ${style.fadeinLeft}`}>
          Now proudly working with{" "}
        </p>

        <div
          className={`relative flex items-center  justify-end ${style.fadeinRight}`}
        >
          <p
            className={`sm:ml-8 font-bold text-xl sm:text-2xl lg:text-xl z-40`}
          >
            {projectsname[currentSlide < 6 ? currentSlide : 0].toUpperCase()}
          </p>
          <div
            className={`absolute top-0 right-0 w-full h-full bg-white z-50 ${style.expandHorizontal}`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
