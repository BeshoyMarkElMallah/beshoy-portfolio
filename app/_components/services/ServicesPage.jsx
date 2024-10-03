import React from "react";
import ServiceCard from "./ServiceCard";

const ServicesPage = () => {
  return (
    <div id="Services" className="flex flex-col items-center dark:bg-gray-900 dark:text-white ">
      <div className="h-20"></div>
      <h2 className="font-bold text-[32px] text-gray-700 dark:bg-gray-900 dark:text-white">My Services</h2>
      <p className="text-gray-500 dark:bg-gray-900 dark:text-white">Here is a list of services that I offer.</p>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <ServiceCard image={""} title={"Web Development"} />
        <ServiceCard image={""} title={"AI & Machine Learning Model"} />
        <ServiceCard image={""} title={"Mobile Apps"} />
        <ServiceCard image={""} title={"Backend Services"} />
        <ServiceCard image={""} title={"Data Analysis"} />
        <ServiceCard image={""} title={"Design Database"} />
      </div>
    </div>
  );
};

export default ServicesPage;
