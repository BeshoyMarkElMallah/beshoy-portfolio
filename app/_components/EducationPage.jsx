import React from "react";
import Divider from "./sides/left/Divider";

const EducationPage = () => {
  return (
    <div id="Education" className="flex flex-col items-center">
      <div className="h-20"></div>
      <h2 className="font-bold text-[32px]">Education</h2>
      <div className="h-10"></div>

      <div className="flex flex-col justify-between w-full p-5 bg-white">
        <div className="grid items-center grid-cols-2">
          <div className="flex flex-col justify-between">
            <h3 className="text-[24px] mb-3">
              Arab Academy for Science, Technology and Maritime Transport
            </h3>
            <div className="flex items-center gap-3 my-4">
              <p className="text-gray-500">Student</p>
              <p className="p-1 text-white bg-yellow-500 rounded-md">
                Oct 2020 - July 2024
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-[24px] mb-3">Bachelor of Computer Science</h3>
            <p className="text-gray-500">
              <ol>
                <li>Gpa:3.85/40</li>
                <li>Graduation Project Grade: A+</li>
                <li>Ranked: 2nd</li>
              </ol>
            </p>
          </div>
        </div>
        <Divider />
        <div className="grid items-center grid-cols-2">
          <div className="flex flex-col justify-between">
            <h3 className="text-[24px] mb-3">Google</h3>
            <div className="flex items-center gap-3 my-4">
              <p className="text-gray-500">Student</p>
              <p className="p-1 text-white bg-yellow-500 rounded-md">
                May 2023 - November 2023
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-[24px] mb-3">
              Data Analytics Professional Certificate
            </h3>
            <p className="text-justify text-gray-500">
              Completed extensive six-month job-ready Google Career Certificate
              training. Demonstrated hands-on experience with data cleaning.
              data visualization. Project management, interpreting and
              communicating data analytics findings. Confidence in transforming
              complex data into actionable and clear insights. Fluency in
              computer programming languages and a solid understanding of
              databases.
            </p>
          </div>
        </div>
        <Divider />
      </div>
    </div>
  );
};

export default EducationPage;
