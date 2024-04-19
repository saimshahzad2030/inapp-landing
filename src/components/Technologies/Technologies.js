// "use client";
// import { React, useState } from "react";
// import Tabs from "./Tabs";
// import TabImages from "./TabImages";
// const Technologies = ({ isVisible }) => {
//   const [activeTab, setActiveTab] = useState("Mobile");
//   const [activeIndex, setActiveIndex] = useState(0);
//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <div
//       className={`flex flex-col items-center mt-20 animated-div ${
//         isVisible ? "isVisible" : ""
//       }`}
//     >
//       <h1 className={`text-3xl font-bold my-8 text-center`}>
//         Technologies we have worked with
//       </h1>
//       <div className=" w-full md:w-2/3 flex flex-col items-center ">
//         <Tabs
//           tabs={technologies}
//           activeTab={activeTab}
//           setActiveIndex={setActiveIndex}
//           handleTabClick={handleTabClick}
//         />
//         <div className="p-4 w-full h-[200px]">
//           <TabImages
//             tabs={technologies}
//             activeIndex={activeIndex}
//             isVisible={isVisible}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Technologies;

"use client";
import { React, useState } from "react";
import { technologies } from "../../../constants/homepage";
import Tabs from "./Tabs";
import TabImages from "./TabImages";
const Technologies = ({ isVisible }) => {
  const [activeTab, setActiveTab] = useState("Mobile");
  const [activeIndex, setActiveIndex] = useState(0);
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

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
          tabs={technologies}
          activeTab={activeTab}
          setActiveIndex={setActiveIndex}
          handleTabClick={handleTabClick}
        />
        <div className="p-4 w-full h-[200px]">
          <TabImages
            tabs={technologies}
            activeIndex={activeIndex}
            isVisible={isVisible}
          />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
