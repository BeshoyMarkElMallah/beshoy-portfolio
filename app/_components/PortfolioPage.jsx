import React from "react";
import Tabs from "./portfolio/Tabs";

const PortfolioPage = () => {
  return (
    <div id="Portfolio" className="flex flex-col items-center dark:bg-gray-900 dark:text-white">
      <div className="h-20"></div>
      <h2 className="font-bold text-[32px] text-gray-700 dark:text-gray-300">Portfolio</h2>
      <div className="h-10"></div>
      <Tabs />
    </div>
  );
};

export default PortfolioPage;
