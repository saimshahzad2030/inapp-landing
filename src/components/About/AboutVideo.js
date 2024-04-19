import React from "react";
import style from "./About.module.css";
const AboutVideo = ({ setVideoVisible }) => {
  return (
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
  );
};

export default AboutVideo;
