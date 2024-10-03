import React from "react";

const PlaceCard = ({ icon, keys, values }) => {
  return (
    <div className="flex flex-col w-full p-8 my-5 bg-white rounded-lg dark:bg-gray-600 dark:text-white">
      <div className="flex justify-center ">{icon}</div>
      <div className="flex flex-row items-center justify-between">
        <div className="font-bold text-gray-500 dark:bg-gray-600 dark:text-white">{keys}</div>
        <div className="text-gray-500 dark:bg-gray-600 dark:text-white">{values}</div>
      </div>
    </div>
  );
};

export default PlaceCard;
