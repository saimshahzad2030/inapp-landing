import React from "react";
import style from "./Navbar.module.css";
import { navbar } from "../../../utils/images";
const Navbar = () => {
  return (
    <nav className="bg-white  border-gray-200 dark:bg-white dark:border-gray-700 flex flex-row items-start justify-between">
      <img
        src={navbar.logo}
        alt="inapp Logo"
        className="h-16 mx-0 cursor-pointer"
      />
      <div className={`${style.toggleBtn}`}>
        <svg
          className={`h-16 w-16`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;
