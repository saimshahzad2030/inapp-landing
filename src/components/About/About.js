"use client";
import React, { useState } from "react";
import style from "./About.module.css";
import Modal from "../Modal/Modal";
import AboutText from "./AboutText";
import AboutVideo from "./AboutVideo";
const About = ({ isVisible }) => {
  const [videoVisible, setVideoVisible] = useState(false);

  const handleCloseModal = () => {
    setVideoVisible(false);
    document.body.classList.remove(style["modalOpen"]);
  };
  return (
    <>
      <div
        className={`flex flex-col items-center justify-center w-full h-auto mt-4 mb-20 lg:mt-40 animated-div ${
          isVisible ? "isVisible" : ""
        }`}
      >
        <div
          className={`relative flex flex-row items-center justify-center lg:w-11/12 xl:10/12 2xl:w-8/12 h-full `}
        >
          <div
            className={`hidden w-40 h-40 bg-yellow-400 lg:flex absolute top-0 left-0 ${
              style.box1
            } ${isVisible ? style.animationbox1 : ""}`}
          ></div>
          <div
            className={`flex flex-col lg:flex-row items-center w-full h-3/5 md:mx-20 md:my-20  z-10  bg-white lg:shadow-xl `}
          >
            <AboutText />
            <AboutVideo setVideoVisible={setVideoVisible} />
          </div>
          <div
            className={`hidden w-40 h-40 bg-pink-300 lg:flex absolute bottom-0 right-0 ${
              style.box2
            } ${style.box1} ${isVisible ? style.animationbox2 : ""}`}
          ></div>
        </div>
        {videoVisible && <Modal onClose={handleCloseModal} />}
      </div>
    </>
  );
};

export default About;
