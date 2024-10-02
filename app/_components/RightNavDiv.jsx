import React from "react";
import { RiContrast2Fill } from "react-icons/ri";
import Menu from "./Menu";

const RightNavDiv = () => {
  return (
    <div className="flex items-start justify-end">
      <div className="flex flex-col items-center justify-start w-16 h-[60%] p-4 text-center bg-white">
        <RiContrast2Fill size={25} />
        <div className="h-[8%]"></div>
        <Menu />
      </div>
    </div>
  );
};

export default RightNavDiv;
