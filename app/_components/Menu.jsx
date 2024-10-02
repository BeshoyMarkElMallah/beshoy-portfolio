"use client";
import React, { useState } from "react";
import { GrServices } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";

import MenuItemWithHover from "./MenuItemWithHover";
import { FaUserGraduate } from "react-icons/fa";
import { MdWorkHistory } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";
import { RiHome2Fill } from "react-icons/ri";

const Menu = () => {
  const [activeButton, setActiveButton] = useState("Home");

  const handleActiveButton = (title) => {
    setActiveButton(title);
  };
  return (
    <div>
      <MenuItemWithHover
        icon={<RiHome2Fill size={20} />}
        title="Home"
        isActive={activeButton === "Home"}
        onClick={() => handleActiveButton("Home")}
      />
      <MenuItemWithHover
        icon={<GrServices size={20} />}
        title="Services"
        isActive={activeButton === "Services"}
        onClick={() => handleActiveButton("Services")}
      />
      <MenuItemWithHover
        icon={<FaUserGraduate size={20} />}
        title="Education"
        isActive={activeButton === "Education"}
        onClick={() => handleActiveButton("Education")}
      />
      <MenuItemWithHover
        icon={<MdWorkHistory size={20} />}
        title="Work History"
        isActive={activeButton === "Work History"}
        onClick={() => handleActiveButton("Work History")}
      />
      <MenuItemWithHover
        icon={<CgProfile size={20} />}
        title="Portfolio"
        isActive={activeButton === "Portfolio"}
        onClick={() => handleActiveButton("Portfolio")}
      />
      <MenuItemWithHover
        icon={<SiMinutemailer size={20} />}
        title="Contact Me"
        isActive={activeButton === "Contact Me"}
        onClick={() => handleActiveButton("Contact Me")}
      />
    </div>
  );
};

export default Menu;
