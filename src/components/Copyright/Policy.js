import React from "react";
import style from "./Copyright.module.css";
const Policy = ({ text, classname }) => {
  return (
    <div className={classname}>
      <p className="text-sm text-white">{text}</p>
      <div className={`w-40 bg-white ${style.stroke}`}></div>
    </div>
  );
};

export default Policy;
