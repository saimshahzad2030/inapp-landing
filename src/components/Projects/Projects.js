"use client";
import React, { useState, useEffect, useRef } from "react";
import style from "./Projects.module.css";
import Slider from "react-slick";
import { projects } from "../../../utils/images";
const Projects = () => {
  const sliderRef = useRef(null);
  const images = [
    projects.project1,
    projects.project2,
    projects.project3,
    projects.project4,
    projects.project5,
    projects.project6,
    projects.project7,
  ];
  const projectsname = [
    "Discover Blockshain",
    "Sasco Traders",
    "Cooperswitch",
    "AudioGrab",
    "Dia Games",
    "Jackwarm",
    "Gram i segrueje",
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Auto-play slides
    autoplaySpeed: 3000,
    afterChange: (index) => {
      setCurrentSlide(index);
    },
  };
  const handleNextClick = () => {
    sliderRef.current.slickNext();
  };
  return (
    <div className="relative flex flex-col pb-28 sm:pb-28 md:pb-40 lg:pb-0">
      <div className=" relative flex flex-col lg:flex-row items-start pt-16 z-10">
        <div className="flex flex-col items-start w-full   lg:w-4/12 mt-12 lg:mt-56">
          <div className={`flex flex-row items-center w-full px-8 lg:ml-6`}>
            <div className={`${style.line} mr-4 px-8`}></div>
            <span className={`${style.span1} text-xl lg:px-8`}>WE ARE</span>
          </div>
          <h1 className="text-4xl sm:text-3xl lg:text-5xl xl:text-7xl font-bold mt-8 px-8">
            InApp Solutions
          </h1>
          <p className=" md:text-md lg:text-lg 2xl:text-2xl text-justify mt-8 font-light px-8">
            InApp Solutions is the one-stop solution for all your technology
            needs in this rapidly transforming digital world. We dive into the
            depth of technology to discover the most innovative, efficient, and
            robust digital solutions for you.
          </p>
          <div
            className={`hidden lg:flex flex-col items-center justify-center w-16 cursor-pointer mt-8 py-6 ${style.moveToTopDiv}`}
          >
            <span
              className={`inline-block transform -rotate-90  text-white font-bold`}
            >
              More
            </span>
            <div className="bg-white w-1 h-28 mt-8"></div>
          </div>
        </div>
        <div
          className={`w-full lg:w-8/12 relative ${style.rectangularDiv} h-[auto] sm:h-[700px] md:h-[800px] lg:mr-16 mt-28 lg:mt-0 `}
        >
          <Slider ref={sliderRef} {...settings}>
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={image}
                className={`${style.rectangularImage} `}
              />
            ))}
          </Slider>
          <div
            className={`absolute z-40 w-full h-full top-0 ${style.imageCurtain}`}
          ></div>
          <div
            className={`absolute z-45 left-0 bottom-5 sm:bottom-20 sm:left-10 flex-col items-start ${style.curtain}`}
          >
            <div className={`flex flex-row items-center w-full px-8 ml-6 pt-4`}>
              <div className={`${style.line} sm:mr-4 px-8 w-8 `}></div>
              <span
                className={`${style.span1} text-md sm:text-xl px-8 text-white`}
              >
                {" "}
                LATEST PROJECT
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-7xl font-bold mt-2 sm:mt-8 px-8 py-4 text-white">
              {projectsname[currentSlide]}
            </h1>
          </div>
        </div>
        <div
          className={`hidden absolute bottom-[100px] lg:top-[600px] right-0 sm:flex flex-row w-56 z-50  ${style.bg}  h-[150px] `}
        >
          <div className={`w-40 bg-white`}>
            <img
              src={images[currentSlide < 6 ? currentSlide + 1 : 0]}
              alt={projectsname[currentSlide < 6 ? currentSlide + 1 : 0]}
              className="w-40 h-full"
            />
          </div>
          <div
            className={`w-16 flex items-center justify-center  cursor-pointer`}
            onClick={handleNextClick}
          >
            <img
              src="/Assets/careers/next-svgrepo-com.svg"
              alt="more"
              className="w-4 h-4"
            />
          </div>
        </div>
        <div
          className={`hidden absolute top-[200px] right-8 lg:flex flex-row  ${style.bg}  p-8`}
        >
          <p className={`text-white font-bold`}>{currentSlide + 1}</p>
        </div>
      </div>

      <div
        className={`flex mt-4 flex-col-reverse items-center lg:flex-row lg:items-end justify-between sm:mt-0 sm:absolute bottom-0 w-full z-1`}
      >
        <div
          className={`flex flex-col items-center  w-full lg:w-4/12 mx-8 lg:ml-20 py-2`}
        >
          <div className={`w-full bg-gray-200 h-[2px]`}></div>
          <div
            className={`flex flex-col sm:flex-row items-center justify-evenly lg:justify-start mt-2`}
          >
            <p className="text-xl lg:text-lg">Now proudly working with </p>
            <p className={`sm:ml-8 font-bold text-2xl sm:text-2xl lg:text-xl`}>
              {projectsname[currentSlide < 6 ? currentSlide : 0]}
            </p>
          </div>
        </div>
        <div
          className={`flex flex-row items-end lg:justify-start justify-between w-full lg:w-7/12 h-[50px] lg:h-[200px] ${style.pagination}`}
        >
          <div
            className={`flex flex-row items-center justify-evenly m-4 w-5/12 lg:w-5/12 xl:w-3/12`}
          >
            <p className={`text-white`}>0{currentSlide + 1}</p>
            <div className={`w-40 bg-white h-[1px]`}></div>
            <p className={` text-white`}>07</p>
          </div>
          <div
            className={`w-16 lg:hidden flex flex-col items-center justify-center  cursor-pointer h-full bg-blue-500`}
            onClick={handleNextClick}
          >
            <img
              src="/Assets/careers/next-svgrepo-com.svg"
              alt="more"
              className="w-4 h-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
