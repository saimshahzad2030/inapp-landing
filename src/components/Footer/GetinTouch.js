import React from "react";

const GetinTouch = () => {
  return (
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
  );
};

export default GetinTouch;
