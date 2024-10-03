import React from "react";
import Progressbar from "./Progressbar";
import ItemWithPercentage from "./ItemWithPercentage";
const Skills = () => {
  return (
    <div>
      <h2 className="mb-3 text-start text-[18px]">Skills</h2>
      <ItemWithPercentage item="Flutter" percentage={98} />
      <Progressbar value={98} />

      <ItemWithPercentage item="Nodejs" percentage={70} />
      <Progressbar value={70} />

      <ItemWithPercentage item="Tensorflow" percentage={70} />
      <Progressbar value={70} />

      <ItemWithPercentage item="Python" percentage={97} />
      <Progressbar value={97} />

      <ItemWithPercentage item="Problem Solving" percentage={95} />
      <Progressbar value={95} />

      <ItemWithPercentage item="Machine Learning" percentage={50} />
      <Progressbar value={50} />

      <ItemWithPercentage item="NextJs" percentage={60} />
      <Progressbar value={60} />

      <ItemWithPercentage item="Javascript" percentage={95} />
      <Progressbar value={95} />

      <ItemWithPercentage item="SQL" percentage={95} />
      <Progressbar value={95} />

      <ItemWithPercentage item="Power BI" percentage={65} />
      <Progressbar value={65} />

      <ItemWithPercentage item="Linux" percentage={85} />
      <Progressbar value={85} />

      <ItemWithPercentage item="Docker" percentage={85} />
      <Progressbar value={85} />
    </div>
  );
};

export default Skills;
