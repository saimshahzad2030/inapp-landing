import React from "react";
import style from "./Expertise.module.css";
import { expertise } from "../../../utils/images";
const Expertise = () => {
  return (
    <div className={` w-100 ${style.grid}`}>
      <div
        className={`h-auto ${style.leftChild} flex flex-col items-start p-12 pt-24 `}
      >
        <div className={`flex flex-row items-center w-full ml-6`}>
          <div className={`${style.line} mr-4 `}></div>
          <span className={`${style.span1} text-xl`}>WHAT WE DO</span>
        </div>
        <h1
          className={`text-3xl md:text-3xl lg:pr-8 font-bold text-black mt-5`}
        >
          Captivating and Interactive visuals.
        </h1>
        <p className={`text-smd mt-12`}>
          InApp incorporation is a team of proficient, creative, and efficient
          millennials who are incessantly improving their skills in their field
          of expertise.
        </p>
        <div className={`flex flex-row items-center w-full mt-8 ml-6`}>
          <span className={`${style.span2} text-lg font-bold  mr-4 `}>
            Discover more
          </span>
          <div className={`${style.line}`}></div>
        </div>
      </div>
      <div className={`h-auto ${style.rightChild}`}>
        {/* <div className="flex flex-col md:flex-row items-center"> */}
        <div className={`flex flex-row ${style.rightChildChild}`}>
          <div className="grid grid-cols-1 sm:grid-cols-3">
            <div
              className={` py-12  flex flex-col items-center sm:items-start px-4`}
            >
              <div className="flex flex-col items-center sm:items-start h-48">
                <img src={expertise.digitalWorkplace} alt="digital workplace" />
                <h3
                  className={`text-2xl font-bold text-blue-950 ${style.cardHeading}`}
                >
                  Digital Workplace
                </h3>
              </div>
              <p className={`mt-4 text-sm ${style.cardText}`}>
                We aims to transform businesses into digitalization in order to
                align them with modern-technology. Our concept of workplace is
                beyond transformation of processes, but also the transformation
                of mindsets towards high-end technologies.
              </p>
            </div>
            <div
              className={` py-12  flex flex-col items-center sm:items-start px-4`}
            >
              <div className="flex flex-col  items-center sm:items-start  h-48">
                <img
                  src={expertise.applicationDevelopment}
                  alt="aplication development"
                />
                <h3
                  className={`text-2xl font-bold text-blue-950 ${style.cardHeading}`}
                >
                  Application Development
                </h3>
              </div>
              <p className={`mt-4 text-sm ${style.cardText}`}>
                We believes in revolutionizing itself every day to meet the
                rapidly changing technology trends. We keep ourselves up to date
                so that we can provide our clients with state-of-the-art
                software solutions.
              </p>
            </div>
            <div
              className={` py-12  flex flex-col items-center sm:items-start px-4`}
            >
              <div className="flex flex-col  items-center sm:items-start  h-48">
                <img src={expertise.productStrategy} alt="product strategy" />
                <h3
                  className={`text-2xl font-bold text-blue-950 ${style.cardHeading}`}
                >
                  Product Strategy
                </h3>
              </div>
              <p className={`mt-4 text-sm ${style.cardText}`}>
                We would love to engage with our clients as a solid partner not
                only to outline their products end-to-end vision, but to enhance
                their technology, and business strategy as well.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Expertise;
