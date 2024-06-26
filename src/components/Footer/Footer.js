import React from "react";
import { socials, inappLogo } from "../../../constants/homepage";
import style from "./Footer.module.css";
import FooterLogo from "./FooterLogo";
import Headquarters from "./Headquarters";
import GetinTouch from "./GetinTouch";
const Footer = ({ isVisible }) => {
  return (
    <div
      className={`flex flex-row-reverse lg:flex-row lg:items-start xl:items-center justify-between h-auto animated-div ${
        isVisible ? "isVisible" : ""
      }`}
    >
      <div
        className={`flex flex-col w-auto h-full  px-8 ${style.socials} pb-8`}
      >
        {socials.map((social, index) => (
          <FooterLogo
            key={index}
            imgSrc={social.img}
            altText={social.altText}
            classname={`w-6 h-6 mt-12`}
          />
        ))}
      </div>
      <div
        className={`flex flex-col ml-8 lg:flex-row w-auto  items-start lg:justify-between xl:justify-evenly lg:w-2/5 xl:w-2/5 2xl:w-2/5 h-auto lg:ml-0 xl:mt-8`}
      >
        <FooterLogo
          imgSrc={inappLogo}
          altText={`inapp-logo`}
          classname={` w-auto h-28 xl:h-36 lg:h-40 2xl:h-56 `}
        />

        <Headquarters />
      </div>
      <GetinTouch />
    </div>
  );
};

export default Footer;
