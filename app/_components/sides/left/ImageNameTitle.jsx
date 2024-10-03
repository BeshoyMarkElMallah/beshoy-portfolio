import React from "react";
import Image from "next/image";


const ImageNameTitle = () => {
  return (
    <div>
      <div className="mt-[10%] w-[200px] mx-auto items-start text-center justify-center">
        <Image src={"/profile-pic.png"} width={200} height={200} />
      </div>
      <p className="text-[18px] font-bold">Beshoy Mark El-Mallah</p>
      <p className="mt-3 text-sm text-gray-500 dark:text-white">
        AI Researcher - Data Analyst - Fullstack Developer - Flutter Developer
      </p>
    </div>
  );
};

export default ImageNameTitle;
