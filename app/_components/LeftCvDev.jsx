import React from "react";
import SocialRow from "./SocialRow";
import ImageNameTitle from "./ImageNameTitle";
import Divider from "./Divider";
import Languages from "./Languages";

import Skills from "./Skills";
import CvButton from "./CvButton";
const LeftCvDiv = () => {
  return (
    <div className="flex items-center justify-center h-full p-4 text-center bg-white w-60">
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
