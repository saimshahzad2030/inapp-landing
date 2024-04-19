"use client";
import React, { useEffect, useState } from "react";
import About from "@/components/About/About";
import Brands from "@/components/Brands/Brands";
import Careers from "@/components/Careers/Careers";
import ChatIcon from "@/components/ChatIcon/Chat-Icon";
import Copyright from "@/components/Copyright/Copyright";
import Expertise from "@/components/Expertise/Expertise";
import Footer from "@/components/Footer/Footer";
import MoveToTop from "@/components/MoveToTop/Move-To-Top";
import Navbar from "@/components/Navbar/Navbar";
import Projects from "@/components/Projects/Projects";
import Technologies from "@/components/Technologies/Technologies";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const components = document.querySelectorAll(".animated-div");

      setIsVisible((prevState) => {
        return Array.from(components).map((component, index) => {
          const componentOffset = component.offsetTop;
          return scrollTop + windowHeight > componentOffset;
        });
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Navbar />
      <Projects />
      <ChatIcon />
      <Expertise isVisible={isVisible[0]} />
      <Brands isVisible={isVisible[1]} />
      <Technologies isVisible={isVisible[2]} />
      <Careers isVisible={isVisible[3]} />
      <About isVisible={isVisible[4]} />
      <MoveToTop isVisible={isVisible[5]} />
      <Footer isVisible={isVisible[6]} />
      <Copyright isVisible={isVisible[7]} />
    </>
  );
}
