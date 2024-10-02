"use client"
import LeftCvDiv from "./_components/LeftCvDev";
import RightNavDiv from "./_components/RightNavDiv";
import MainPage from "./_components/MainPage";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
export default function Home() {
  const [isRightNavVisible, setIsRightNavVisible] = useState(false);

  const toggleRightNav = () => {
    setIsRightNavVisible(!isRightNavVisible);
  };
  return (
    // <div className="grid grid-cols-1 gap-4 lg:grid-cols-[auto,1fr,auto] lg:gap-1 h-screen">
    //   <LeftCvDiv />
    //   <MainPage />
    //   <RightNavDiv />
    // </div>
    <div className="relative h-screen">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[auto,1fr,auto] lg:gap-1 h-full">
        <LeftCvDiv />
        <MainPage />
        <div className={`lg:block ${isRightNavVisible ? "block" : "hidden"}`}>
          <RightNavDiv />
        </div>
      </div>
      <button
        className="absolute p-2 bg-yellow-500 rounded top-4 right-4 lg:hidden"
        onClick={toggleRightNav}
      >
        <FaBars size={20} />
      </button>
    </div>
  );
}
