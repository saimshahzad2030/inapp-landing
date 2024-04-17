import React from "react";
import { footer } from "../../../utils/images";
import style from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={`flex flex-row items-center justify-between h-auto`}>
      <div
        className={`flex flex-col w-auto h-full bg-blue-400 px-8 ${style.socials}`}
      >
        <img src={footer.instagram} alt="logo" className={`w-6 h-6 mt-8`} />
        <img src={footer.twitter} alt="logo" className={`w-6 h-6 mt-8`} />
        <img src={footer.facebook} alt="logo" className={`w-6 h-6 mt-8`} />
        <img src={footer.linkedin} alt="logo" className={`w-6 h-6 my-8`} />
      </div>
      <img
        src={`/Assets/logo/logo.png`}
        alt="logo"
        className={`w-auto xl:h-36 lg:h-24 2xl:h-48 `}
      />
      <div className="flex flex-col items-start">
        <h2 className="font-bold text-2xl mb-4">Headquarters</h2>
        <p>Office No. B2, 23-C,</p>
        <p>Shahra-e-Faisal, Block-6,</p>
        <p>P-E-C-H-S,</p>
        <p>Karachi, Pakistan</p>
      </div>
      <div className="flex flex-col items-start 2xl:mr-56 ">
        <h2 className="font-bold lg:text-4xl 2xl:text-5xl mb-4">
          Ready to start a project?
        </h2>
        <div className="w-3/5">
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
