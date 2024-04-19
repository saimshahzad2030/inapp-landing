"use client";
import React, { useState, useEffect, useRef } from "react";
import style from "./Projects.module.css";
import { projects, projectsname } from "../../../constants/homepage";
import InAppText from "./InAppText";
import Carousel from "./Carousel";
import NextSlide from "./NextSlide";
import SlideNumber from "./SlideNumber";
import Clients from "./Clients";
import SlidePagination from "./SlidePagination";
const Projects = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextClick = () => {
    sliderRef.current.slickNext();
  };
  return (
    <div className="relative flex flex-col pb-0 sm:pb-0 md:pb-0 lg:pb-20">
      <div className=" relative flex flex-col lg:flex-row items-start pt-16 z-10">
        <InAppText />
        <Carousel
          sliderRef={sliderRef}
          images={projects}
          projectsname={projectsname}
          currentSlide={currentSlide}
          setCurrentSlide={setCurrentSlide}
        />
       
        <NextSlide
          images={projects}
          projectsname={projectsname}
          currentSlide={currentSlide}
          handleNextClick={handleNextClick}
        /> 
        <SlideNumber currentSlide={currentSlide} />
      </div>

      <div
        className={`flex mt-0 lg:mt-4 flex-col-reverse items-center lg:flex-row lg:items-end justify-between sm:mt-0 lg:absolute bottom-0 w-full z-1`}
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
