import React from "react";
import style from "./Brands.module.css";
import { brands } from "../../../utils/images";
const Brands = () => {
  return (
    <div className={`relative flex flex-col  lg:flex-row w-full h-auto mt-20`}>
      <div
        className={`  w-full lg:w-1/2 xl:w-1/2 h-auto z-10 flex flex-col items-start ${style.brandsDiv} pt-16 sm:pl-6 pb-16 mb-4 lg:mb-28`}
      >
        <div className={`flex flex-row items-center w-full sm:ml-6  pl-6`}>
          <div className={`${style.line} mr-4 `}></div>
          <span className={`${style.span1} text-xl text-white  pl-6`}>
            BRANDS
          </span>
        </div>
        <h2 className={`text-3xl text-white font-bold mt-6  pl-6`}>
          Brands weve worked with
        </h2>
        <p className={`text-xl text-white mt-12 pr-24  pl-6`}>
          Our customer centric approach has encouraged teaming up with our
          clients to create world class marques this has made us one of the best
          brands to work with.
        </p>
        <div
          className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 w-full mt-16 gap-4 gap-y-20 `}
        >
          <div className="flex justify-center items-center">
            <img src={brands.diagame} alt="diagame" className={`w-24 h-24`} />
          </div>

          <div className="flex justify-center items-center">
            <img
              src={brands.cooperswitch}
              alt="cooper switch"
              className={`w-40 h-auto`}
            />
          </div>

          <div className="flex justify-center items-center">
            <img
              src={brands.audiograb}
              alt="cooper switch"
              className={`w-40 h-auto`}
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src={brands.sasco}
              alt="cooper switch"
              className={`w-20 h-20`}
            />
          </div>

          <div className="flex justify-center items-center">
            <img
              src={brands.entice}
              alt="cooper switch"
              className={`w-30 h-20`}
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src={brands.discoverblockchain}
              alt="cooper switch"
              className={`w-40 h-auto`}
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src={brands.zombie}
              alt="cooper switch"
              className={`w-40 h-auto`}
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src={brands.handoff}
              alt="cooper switch"
              className={`w-40 h-auto`}
            />
          </div>

          <div className="flex justify-center items-center">
            <img
              src={brands.sortwaste}
              alt="cooper switch"
              className={`w-20 h-20`}
            />
          </div>

          <div className="flex justify-center items-center">
            <img
              src={brands.pushup}
              alt="cooper switch"
              className={`w-40 h-auto`}
            />
          </div>

          <div className="flex justify-center items-center">
            <img
              src={brands.jackwarm}
              alt="cooper switch"
              className={`w-40 h-auto`}
            />
          </div>
        </div>
      </div>
      <div
        className={` lg:absolute z-0 right-0 bottom-0 w-full lg:w-1/2 h-full lg:pt-40  flex flex-col `}
      >
        <img
          src={brands.inapp}
          alt="brand"
          className={` h-full object-cover`}
        />
      </div>
    </div>
  );
};

export default Brands;
