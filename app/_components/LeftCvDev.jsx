import React from "react";
import SocialRow from "./sides/left/SocialRow";
import ImageNameTitle from "./sides/left/ImageNameTitle";
import Divider from "./sides/left/Divider";
import Languages from "./sides/left/Languages";

import Skills from "./sides/left/Skills";
import CvButton from "./sides/left/CvButton";
const LeftCvDiv = () => {
  return (
    <div className="flex items-start justify-center h-full p-4 text-center bg-white w-60 ">
      <div className="text-center">
        <ImageNameTitle />
        <SocialRow />
        <Divider />
        <Languages />
        <Divider />
        <Skills />
        <Divider />

        <CvButton />
      </div>
    </div>
  );
};

export default LeftCvDiv;
