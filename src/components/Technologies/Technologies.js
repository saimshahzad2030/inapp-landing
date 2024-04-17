"use client";
import { React, useState } from "react";
import { technologies } from "../../../utils/images";
const Technologies = () => {
  const [activeTab, setActiveTab] = useState("Mobile");
  const [activeIndex, setActiveIndex] = useState(0);
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const tabs = [
    {
      tab: "Mobile",
      images: [technologies.android, technologies.ios, technologies.react],
    },
    ,
    {
      tab: "FrontEnd",
      images: [
        technologies.angular,
        technologies.vue,
        technologies.next,
        technologies.html5,
        technologies.react,
      ],
    },
    {
      tab: "Database",
      images: [
        technologies.dynamodb,
        technologies.mysql,
        technologies.postgresql,
        technologies.firebase,
        technologies.mongodb,
      ],
    },
    {
      tab: "Back end",
      images: [technologies.nodejs, technologies.expressjs],
    },
    {
      tab: "CMS",
      images: [technologies.strapi, technologies.graphql],
    },
    {
      tab: "Infra and devops",
      images: [technologies.aws, technologies.digitalocean],
    },
    {
      tab: "WebApp",
      images: [technologies.wordpress, technologies.shopify],
    },
  ];
  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className={`text-3xl font-bold my-8`}>
        Technologies we have worked with
      </h1>
      <div className=" w-full md:w-2/3 flex flex-col items-center ">
        <div className="grid sm:grid-cols-7 grid-cols-9 ">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`
              
              ${
                index < 5
                  ? "col-span-2  w-full object-contain col-start-auto sm:col-auto sm:col-start-auto"
                  : index === 5
                  ? "col-span-2  w-full object-contain col-start-2  sm:col-auto sm:col-start-auto"
                  : "col-span-2 w-full object-contain col-start-auto  sm:col-auto sm:col-start-auto"
              }
              ${
                activeTab === tab.tab
                  ? "border-b-2 border-blue-500 text-blue-500"
                  : "text-black"
              } py-2 px-1 sm:px-5 md:px-4 lg:px-2 focus:outline-none font-bold 
              
              
              `}
              onClick={() => {
                handleTabClick(tab.tab);
                setActiveIndex(index);
              }}
            >
              {tab.tab}
            </button>
          ))}
        </div>
        <div className="p-4 w-full">
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-6 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10">
            {tabs[activeIndex].images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt="image"
                className={`${
                  tabs[activeIndex].images.length !== 2 && index < 3
                    ? "col-span-2 max-h-20 w-full object-contain"
                    : index === 3 || index === 0
                    ? "col-span-2 max-h-20 w-full object-contain col-start-2"
                    : "col-span-2 max-h-20 w-full object-contain col-start-auto"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
