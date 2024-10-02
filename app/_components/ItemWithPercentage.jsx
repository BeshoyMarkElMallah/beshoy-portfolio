import React from "react";

const ItemWithPercentage = ({item,percentage}) => {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-gray-400 text-[15px]">{item}</h2>
      <h2 className="text-gray-400 text-[15px]">{percentage}%</h2>
    </div>
  );
};

export default ItemWithPercentage;
