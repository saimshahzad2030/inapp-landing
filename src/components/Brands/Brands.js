import React from "react";
import style from "./Brands.module.css";
import { brands, inappBg } from "../../../constants/homepage";
import BrandsImage from "./BrandsImage";
import InAppLogo from "./InAppLogo";
const Brands = ({ isVisible }) => {
  return (
    <div
      className={`relative flex flex-col  lg:flex-row w-full h-auto mt-20 animated-div ${
        isVisible ? "isVisible" : ""
      }`}
    >
      <div
        className={`  w-full lg:w-1/2 xl:w-1/2 h-auto z-10 flex flex-col items-start ${style.brandsDiv} pt-16 sm:pl-6 pb-16 mb-0 lg:mb-28 `}
      >
        {/*  */}
        <div
          className={`flex flex-col items-start w-full ${
            isVisible ? style.fadeInDown : ""
          }`}
        >
          <div className={`flex flex-row items-center w-full pl-12 `}>
            <div className={`${style.line} mr-4 `}></div>
            <span className={`${style.span1} text-xl text-white  pl-6`}>
              BRANDS
            </span>
          </div>
          <h2 className={`text-3xl text-white font-bold mt-6  pl-6`}>
            Brands weve worked with
          </h2>
          <p className={`text-xl text-white mt-12 px-6 sm:pr-24  sm:pl-6`}>
            Our customer centric approach has encouraged teaming up with our
            clients to create world class marques this has made us one of the
            best brands to work with.
          </p>
        </div>
        <div
          className={`grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 w-full mt-16 gap-4 gap-y-20 ${
            isVisible ? style.fadeInUp : ""
          }`}
        >
          {brands.map((brand, index) => (
            <BrandsImage
              imageSrc={brand.img}
              projectName={brand.name}
              classname={brand.classname}
              key={index}
            />
          ))}
        </div>
      </div>
      <InAppLogo imgSrc={inappBg} />
    </div>
  );
};

export default Brands;
