"use client";
import React from "react";
import Divider from "./sides/left/Divider";

const WorkHistory = () => {
  return (
    <div id="WorkHistory" className="flex flex-col items-center sm:w-full dark:bg-gray-900 dark:text-white">
      <div className="h-20"></div>
      <h2 className="font-bold text-[32px] text-gray-700 dark:bg-gray-900 dark:text-white">Work History</h2>
      <div className="h-10"></div>

      <div className="flex flex-col justify-between w-full p-5 bg-white dark:bg-gray-900 dark:text-white">
        <div className="grid items-center grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
          <div className="flex flex-col justify-between">
            <h3 className="text-[18px] mb-3">
              Action for Restitution in Africa
            </h3>
            <div className="flex items-center gap-3 my-4">
              <p className="text-gray-500 text-[15px] dark:bg-gray-900 dark:text-white">Student</p>
              <p className="p-1 text-white bg-yellow-500 rounded-md text-[15px]">
                July 2021 - Present
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-[18px] mb-3">Fullstack Web Developer</h3>
            <p className="text-gray-500 text-[15px] dark:bg-gray-900 dark:text-white">
              The project works to restore Africa's heritage and is a
              cooperation with Oxford University
            </p>
          </div>
        </div>
        <Divider />
        <div className="grid items-center grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
          <div className="flex flex-col justify-between">
            <h3 className="text-[18px] mb-3">Robotak</h3>
            <div className="flex items-center gap-3 my-4">
              <p className="text-gray-500 text-[15px] dark:bg-gray-900 dark:text-white">Student</p>
              <p className="p-1 text-white text-[15px] bg-yellow-500 rounded-md">
                September 2021 - July 2024
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-[18px] mb-3">
              Programming & Robotics Instructor
            </h3>
            <p className="text-justify text-[15px] text-gray-500 dark:bg-gray-900 dark:text-white">
              The project is a Cooperation between the Ministry of Youth and
              Sports in Egypt and the Arab Academy for Science and Technology,
              Aswan Branch that helps kids and youth to develop problem-solving
              and programming skills
            </p>
          </div>
        </div>
        <Divider />
        <div className="grid items-center grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
          <div className="flex flex-col justify-between">
            <h3 className="text-[18px] mb-3">
              Aswan Heart Center (Magdy Yacoub Foundation)
            </h3>
            <div className="flex items-center gap-3 my-4">
              <p className="text-gray-500 text-[15px] dark:bg-gray-900 dark:text-white">Student</p>
              <p className="p-1 text-white text-[15px] bg-yellow-500 rounded-md">
                November 2022 - January 2023
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-[18px] mb-3">Full Stack Web developer</h3>
            <p className="text-justify text-[15px] text-gray-500 dark:bg-gray-900 dark:text-white">
              Internship, worked on a risk factor web app for heart diseases
            </p>
          </div>
        </div>
        <Divider />
      </div>
    </div>
  );
};

export default WorkHistory;
