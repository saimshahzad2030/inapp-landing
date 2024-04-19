import React from "react";
import style from "./Expertise.module.css";
import { expertise } from "../../../utils/images";
import ExpertiseText from "./ExpertiseText";
import ExpertiseCard from "./ExpertiseCard";
const Expertise = ({ isVisible }) => {
  return (
    <div
      className={` w-100 ${style.grid} mt-8 lg:mt-32 lg:mb-16 animated-div ${
        isVisible ? "isVisible" : ""
      }`}
    >
      <ExpertiseText />
      <div className={`h-auto ${style.rightChild}`}>
        <div className={`flex flex-row ${style.rightChildChild}`}>
          <div
            className={`grid grid-cols-1 sm:grid-cols-3 ${
              isVisible ? style.fadeInUp : ""
            }`}
          >
            <ExpertiseCard
              imgSrc={expertise.digitalWorkplace}
              text={"Digital Workplace"}
              description={
                "We aims to transform businesses into digitalization in order to align them with modern-technology. Our concept of workplace is beyond transformation of processes, but also the transformation of mindsets towards high-end technologies."
              }
            />
            <ExpertiseCard
              imgSrc={expertise.applicationDevelopment}
              text={"Application Development"}
              description={
                "We believes in revolutionizing itself every day to meet the rapidly changing technology trends. We keep ourselves up to date so that we can provide our clients with state-of-the-art software solutions."
              }
            />
            <ExpertiseCard
              imgSrc={expertise.productStrategy}
              text={"Product Strategy"}
              description={
                "We would love to engage with our clients as a solid partner not only to outline their products end-to-end vision, but to enhance their technology, and business strategy as well."
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Expertise;
