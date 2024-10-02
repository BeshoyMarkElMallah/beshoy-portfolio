import React from "react";
import Image from "next/image";
const ServiceCard = ({ image, title, desc }) => {
  return (
    <article className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] m-5">
      <div className="flex flex-col items-center rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
        <div className="flex items-center justify-center w-16 h-16 ">
          <Image src={image} alt="icon" height={200} width={200} />
        </div>

        <h3 className="mt-0.5 text-lg font-medium text-gray-900">
          {title}
        </h3>

        {/* <div className="flex flex-wrap gap-1 mt-4">
          <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
            
          </span>

          <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
            JavaScript
          </span>
        </div> */}
      </div>
    </article>
  );
};

export default ServiceCard;
