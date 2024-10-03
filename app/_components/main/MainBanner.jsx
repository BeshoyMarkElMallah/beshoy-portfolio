import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const MainBanner = () => {
  return (
    <div id="Home" className="flex flex-col justify-end bg-white">
      <div className="flex flex-row justify-between h-full gap-2 dark:bg-gray-900 dark:text-white">
        <div className="w-1/2 p-10 ">
          <h1 className="text-[48px] font-bold text-gray-800 dark:bg-gray-900 dark:text-white">
            I'm Beshoy Mark
          </h1>
          <h1 className="text-[48px] font-bold text-gray-800 dark:bg-gray-900 dark:text-white">
            <span className="text-yellow-500 ">AI</span> Researcher
          </h1>
          <p className="text-justify text-gray-600 dark:bg-gray-900 dark:text-white">
            A Software developer & Programming Instructor with 3+ years of
            experience in developing mobile applications with flutter, 1+ years
            in developing full stack web applications, 4+ years of experience
            being a Programming and Robotics Instructor, 1+ years of experience
            as a Data Analyst, 2+ years of experience as an AI Engineer
          </p>
          <Link
            href="https://drive.google.com/file/d/1-8cSjTVRwEYLumvBkv6SMUI-WqUtTqSC/view?usp=sharing"
            target="_blank"
          >
            <button className="flex items-center justify-center gap-2 px-6 py-3 mt-4 text-black bg-yellow-500 rounded cursor-pointer hover:bg-yellow-600">
              Hire Me
              <FaArrowRight size={15} />
            </button>
          </Link>
        </div>
        <Image
          src="/profile-pic-blank-rect.png"
          className="w-auto"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default MainBanner;
