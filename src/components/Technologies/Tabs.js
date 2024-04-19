import React from "react";
const Tabs = ({ tabs, activeTab, handleTabClick, setActiveIndex }) => {
  return (
    <div className="grid sm:grid-cols-7 grid-cols-8 ">
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
        } py-2 px-2 text-sm sm:text-md sm:px-5 md:px-4 lg:px-2 focus:outline-none font-bold 
        
        
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
  );
};

export default Tabs;
