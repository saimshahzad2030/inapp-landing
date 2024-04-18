import React from "react";
import { footer } from "../../../utils/images";
import style from "./Footer.module.css";
const Footer = () => {
  return (
    <div
      className={`flex flex-row-reverse lg:flex-row lg:items-start xl:items-center justify-between h-auto`}
    >
      <div className={`flex flex-col w-auto h-full  px-8 ${style.socials}`}>
        <img src={footer.instagram} alt="logo" className={`w-6 h-6 mt-12`} />
        <img src={footer.twitter} alt="logo" className={`w-6 h-6 mt-12`} />
        <img src={footer.facebook} alt="logo" className={`w-6 h-6 mt-12`} />
        <img src={footer.linkedin} alt="logo" className={`w-6 h-6 my-12`} />
      </div>
      <div
        className={`flex flex-col ml-8 lg:flex-row w-auto  items-start lg:justify-between xl:justify-evenly lg:w-2/5 xl:w-2/5 2xl:w-2/5 h-auto lg:ml-0 xl:mt-8`}
      >
        <img
          src={`/Assets/logo/logo.png`}
          alt="logo"
          className={` w-auto h-28 xl:h-36 lg:h-40 2xl:h-56 `}
        />
        <div className=" flex-col items-start  lg:ml-20">
          <h2 className="font-bold text-2xl mb-4">Headquarters</h2>
          <p>Office No. B2, 23-C,</p>
          <p>Shahra-e-Faisal, Block-6,</p>
          <p>P-E-C-H-S,</p>
          <p>Karachi, Pakistan</p>
        </div>
      </div>
      <div
        className={` hidden lg:flex flex-col items-start mr-0 lg:w-[400px]  xl:w-[500px] 2xl:mr-56 2xl:w-[600px] xl:mt-8`}
      >
        <h2 className="font-bold lg:text-4xl 2xl:text-5xl mb-4">
          Ready to start a project?
        </h2>
        <div className="lg:w-4/5 xl:w-3/5">
          <p className=" ">
            Lets build something awesome together! hello@inappsolutions.com or
            call+92 312 2999338
          </p>
        </div>
        <div className="flex flex-row mt-8">
          <p className=" font-bold text-2xl">Get in touch</p>
          <img
            src={"/Assets/footer/arrow.png"}
            alt="logo"
            className={`w-12 h-auto ml-4`}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
