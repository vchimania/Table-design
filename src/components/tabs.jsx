import React from "react";
import { tabs, tabsIcons } from "./helpers";

const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex">
      {Object.values(tabs).map((tab, index) => (
        <button
          key={tab}
          type="button"
          className={`pr-4 text-center flex-grow ${
            activeTab === tab
              ? "max-w-28 h-12 px-2 py-1 text-xs text-[#7982da] font-bold text-left outline-none border-b-[#7982da]"
              : "max-w-28 h-12 px-2 py-1 text-xs font-bold text-left outline-none  opacity-50"
          } ${index === 0 ? "mr-1" : ""} ${
            index === 0 ? "border-b" : "border-b-[#7982da]"
          }`}
          onClick={() => setActiveTab(tab)}
        >
          <div className="flex items-center">
            <div className="h-15 w-5  mr-3">{tabsIcons[tab]}</div>{" "}
            <div>{tab} </div>
          </div>
        </button>
      ))}
    </div>
  );
};

export default Tabs;
