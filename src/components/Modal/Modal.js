import React from "react";
import style from "./Modal.module.css";
const Modal = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
      <div className="relative w-full   h-screen flex flex-row items-center justify-center">
        <img
          src="/Assets/about/close.svg"
          alt="close"
          onClick={onClose}
          className={`absolute top-0 right-0 w-16 h-16 text-white text-lg cursor-pointer ${style.close}`}
        />

        <video autoPlay loop className="w-4/5 xl:w-3/5" controls={false}>
          <source src="/Assets/video/inapp-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Modal;
