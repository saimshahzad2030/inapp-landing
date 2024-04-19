"use client";
import React, { useState, useEffect, useRef } from "react";
import style from "./Projects.module.css";
import { projects } from "../../../utils/images";
import InAppText from "./InAppText";
import Carousel from "./Carousel";
import NextSlide from "./NextSlide";
import SlideNumber from "./SlideNumber";
import Clients from "./Clients";
import SlidePagination from "./SlidePagination";
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

  const handleNextClick = () => {
    sliderRef.current.slickNext();
  };
  return (
    <div className="relative flex flex-col pb-28 sm:pb-28 md:pb-40 lg:pb-0">
      <div className=" relative flex flex-col lg:flex-row items-start pt-16 z-10">
        <InAppText />
        <Carousel
          sliderRef={sliderRef}
          images={images}
          projectsname={projectsname}
          currentSlide={currentSlide}
          setCurrentSlide={setCurrentSlide}
        />
        <NextSlide
          images={images}
          projectsname={projectsname}
          currentSlide={currentSlide}
          handleNextClick={handleNextClick}
        />
        <SlideNumber currentSlide={currentSlide} />
      </div>

      <div
        className={`flex mt-4 flex-col-reverse items-center lg:flex-row lg:items-end justify-between sm:mt-0 sm:absolute bottom-0 w-full z-1`}
      >
        <Clients currentSlide={currentSlide} projectsname={projectsname} />
        <SlidePagination
          currentSlide={currentSlide}
          handleNextClick={handleNextClick}
        />
      </div>
    </div>
  );
};

export default Projects;
