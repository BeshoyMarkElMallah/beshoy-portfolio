"use client"
import React from "react";

const ProjectCard = ({content}) => {
  return (
    <a href="#" className="relative block m-5 bg-black rounded-xl group">
      <div className="w-[400px]">
      <img
        alt=""
        src={content.image}
        className="absolute inset-0 object-cover w-full h-full transition-opacity opacity-75 rounded-xl group-hover:opacity-50"
      />

      <div className="relative p-4 sm:p-6 lg:p-8">
        <p className="text-sm font-medium tracking-widest text-pink-500 uppercase">
          {content.type}
        </p>

        <p className="text-xl font-bold text-white sm:text-2xl">{content.title}</p>

        <div className="mt-32 sm:mt-48 lg:mt-64">
          <div className="transition-all transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
            <p className="text-sm text-white">
             Click to see the project 
            </p>
          </div>
        </div>
      </div>
      </div>
    </a>
  );
};

export default ProjectCard;
