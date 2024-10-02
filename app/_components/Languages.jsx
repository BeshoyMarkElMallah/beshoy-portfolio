import React from "react";
import Progressbar from "./Progressbar";
import ItemWithPercentage from "./ItemWithPercentage";
const Languages = () => {
  return (
    <div>
      <h2 className="mb-3 text-start text-[18px]">Languages</h2>
      <ItemWithPercentage item="Arabic" percentage={100}/>
      <Progressbar value={100} />

      <ItemWithPercentage item="English" percentage={60}/>
      <Progressbar value={60} />
    </div>
  );
};

export default Languages;
