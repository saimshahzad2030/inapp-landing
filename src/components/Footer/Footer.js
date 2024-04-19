import React from "react";
import { footer } from "../../../utils/images";
import style from "./Footer.module.css";
import { inapplogo } from "../../../utils/images";
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
      <div className={`flex flex-col w-auto h-full  px-8 ${style.socials}`}>
        <FooterLogo
          imgSrc={footer.instagram}
          altText={`insta`}
          classname={`w-6 h-6 mt-12`}
        />
        <FooterLogo
          imgSrc={footer.twitter}
          altText={`twitter`}
          classname={`w-6 h-6 mt-12`}
        />
        <FooterLogo
          imgSrc={footer.facebook}
          altText={`facebook`}
          classname={`w-6 h-6 mt-12`}
        />
        <FooterLogo
          imgSrc={footer.linkedin}
          altText={`linkedin`}
          classname={`w-6 h-6 mt-12`}
        />
      </div>
      <div
        className={`flex flex-col ml-8 lg:flex-row w-auto  items-start lg:justify-between xl:justify-evenly lg:w-2/5 xl:w-2/5 2xl:w-2/5 h-auto lg:ml-0 xl:mt-8`}
      >
        <FooterLogo
          imgSrc={inapplogo}
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
