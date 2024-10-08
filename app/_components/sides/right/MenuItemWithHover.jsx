import Link from "next/link";
import React from "react";

const MenuItemWithHover = ({ icon, title, onClick, isActive,link }) => {
  return (
    <Link
      href={`#${link}`}
      onClick={onClick}
      className="flex items-center justify-center mt-[90%]"
    >
      <div
        className={`relative flex items-center justify-center p-3 dark:text-black rounded-full group ${
          isActive ? "bg-yellow-500" : "bg-gray-300"
        }`}
      >
        {icon}
        <div className="absolute hidden px-2 py-1 mb-1 text-xs text-white bg-black rounded bottom-full group-hover:block">
          {title}
        </div>
      </div>
    </Link>
  );
};

export default MenuItemWithHover;
