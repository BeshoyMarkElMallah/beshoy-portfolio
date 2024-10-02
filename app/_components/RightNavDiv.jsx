"use client";
import React, { useEffect, useState } from "react";
import { RiContrast2Fill } from "react-icons/ri";
import Menu from "./sides/right/Menu";

const RightNavDiv = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="flex items-start justify-end h-full">
      <div className="flex flex-col items-center justify-start w-16 h-full p-4 text-center bg-white">
        <RiContrast2Fill size={25} />
        <div className="h-[8%]"></div>
        <div style={{ transform: `translateY(${scrollY}px)` }}>
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default RightNavDiv;
