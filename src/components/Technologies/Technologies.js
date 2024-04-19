"use client";
import { React, useState } from "react";
import { technologies } from "../../../utils/images";
import Tabs from "./Tabs";
import TabImages from "./TabImages";
const Technologies = ({ isVisible }) => {
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
    <div
      className={`flex flex-col items-center mt-20 animated-div ${
        isVisible ? "isVisible" : ""
      }`}
    >
      <h1 className={`text-3xl font-bold my-8 text-center`}>
        Technologies we have worked with
      </h1>
      <div className=" w-full md:w-2/3 flex flex-col items-center ">
        <Tabs
          tabs={tabs}
          activeTab={activeTab}
          setActiveIndex={setActiveIndex}
          handleTabClick={handleTabClick}
        />
        <div className="p-4 w-full h-[200px]">
          <TabImages tabs={tabs} activeIndex={activeIndex} isVisible={isVisible}/>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
