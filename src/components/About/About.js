"use client";
import React, { useState } from "react";
import style from "./About.module.css";
import Modal from "../Modal/Modal";
const About = () => {
  const [videoVisible, setVideoVisible] = useState(false);

  const handleCloseModal = () => {
    setVideoVisible(false);
    document.body.classList.remove(style["modalOpen"]);
  };
  return (
    <>
      <div
        className={`flex flex-col items-center justify-center w-full  h-auto mt-4 sm:mt-40 `}
      >
        <div
          className={`relative flex flex-row items-center justify-center w-full lg:w-4/5 h-full `}
        >
          <div
            className={`w-40 h-40 bg-yellow-400 absolute top-0 left-0 ${style.box1}`}
          ></div>
          <div
            className={`flex flex-col md:flex-row items-center w-full h-3/5 md:mx-20 md:my-20  z-10  bg-white shadow-xl `}
          >
            <div
              className={`h-full ${style.leftChild} flex flex-col items-start p-12 pt-24 w-full md:w-2/5 `}
            >
              <div className={`flex flex-row items-center w-full ml-6`}>
                <div className={`${style.line} mr-4 `}></div>
                <span className={`${style.span1} text-xl`}>WHO WE ARE</span>
              </div>

              <p className={`text-md mt-12 text-justify`}>
                Great brands are created to tell a story that never stops
                unfolding, our aim is not only to develop and designs, we want
                to give our clients an experience, an impression, a promise, an
                outstanding symbol that will always connect and remain relevant
              </p>
              <div className={`flex flex-row items-center w-full mt-8 ml-6`}>
                <span className={`${style.span2} text-lg font-bold  mr-4 `}>
                  Explore
                </span>
                <div className={`${style.line}`}></div>
              </div>
            </div>

            <div
              className={` flex flex-row justify-center items-center bg-gray-400 w-4/5  md:w-3/5`}
            >
              <img
                src="/Assets/about/about.png"
                alt="about"
                className="cursor-pointer"
                onClick={() => {
                  setVideoVisible(true);

                  document.body.classList.add(style["modalOpen"]);
                }}
              />
            </div>
          </div>
          <div
            className={`w-40 h-40 bg-pink-300 absolute bottom-0 right-0 ${style.box2}`}
          ></div>
        </div>
        {videoVisible && <Modal onClose={handleCloseModal} />}
      </div>
    </>
  );
};

export default About;
