import React from "react";
import style from "./Expertise.module.css";
import { expertise } from "../../../constants/homepage";
import ExpertiseText from "./ExpertiseText";
import ExpertiseCard from "./ExpertiseCard";
const Expertise = ({ isVisible }) => {
  return (
    <div
      className={` w-100 ${style.grid} mt-0 lg:mt-32 lg:mb-16 animated-div ${
        isVisible ? "isVisible" : ""
      }`}
    >
      <ExpertiseText isVisible={isVisible} />
      <div className={`h-auto ${style.rightChild}`}>
        <div className={`flex flex-row ${style.rightChildChild}`}>
          <div
            className={`grid grid-cols-1 sm:grid-cols-3 ${
              isVisible ? style.fadeInUp : ""
            }`}
          >
            {expertise.map((expertise, index) => (
              <ExpertiseCard
                key={index}
                imgSrc={expertise.img}
                text={expertise.text}
                description={expertise.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Expertise;
