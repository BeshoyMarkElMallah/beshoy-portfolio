"use client";
import React, { useEffect, useState } from "react";
import { RiContrast2Fill } from "react-icons/ri";
import Menu from "./sides/right/Menu";

const RightNavDiv = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);

  };
  return (
    <div className="flex items-start justify-end h-full ">
      <div className="flex flex-col items-center justify-start w-16 h-full p-4 text-center bg-white dark:bg-gray-800 dark:text-white ">
        <button onClick={toggleTheme}>
          <RiContrast2Fill size={25}  />
        </button>
        <div className="h-[8%]"></div>
        <div style={{ transform: `translateY(${scrollY}px)` }}>
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default RightNavDiv;
