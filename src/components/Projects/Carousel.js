import React from "react";
import style from "./Projects.module.css";
import Slider from "react-slick";
const Carousel = ({
  images,
  currentSlide,
  sliderRef,
  projectsname,
  setCurrentSlide,
}) => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    afterChange: (index) => {
      setCurrentSlide(index);
    },
  };
  return (
    <div
      className={`w-full lg:w-8/12 relative ${style.rectangularDiv} h-[auto] sm:h-[700px] md:h-[800px] lg:mr-16 mt-8 lg:mt-0 `}
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
        className={`absolute z-36 w-full h-full top-0 ${style.imageCurtain}`}
      ></div>
      <div
        className={`absolute z-40 left-0 bottom-5 sm:bottom-20 sm:left-10 flex-col items-start ${style.curtain}`}
      >
        <div className={`flex flex-row items-center w-full px-8 ml-6 pt-4`}>
          <div className={`${style.line} sm:mr-4 px-8 w-8 `}></div>
          <span
            className={`${style.span1} text-md sm:text-xl px-8 text-white z-45`}
          >
            {" "}
            LATEST PROJECT
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-7xl font-bold mt-2 sm:mt-8 px-8 py-4 z-50 text-white">
          {projectsname[currentSlide]}
        </h1>
      </div>
    </div>
  );
};

export default Carousel;
