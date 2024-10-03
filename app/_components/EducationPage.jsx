"use client";
import React from "react";
import Divider from "./sides/left/Divider";

const EducationPage = () => {
  return (
    <div id="Education" className="flex flex-col items-center sm:w-full">
      <div className="h-20"></div>
      <h2 className="font-bold text-[32px] text-gray-700">Education</h2>
      <div className="h-10"></div>

      <div className="flex flex-col justify-between w-full p-5 bg-white">
        <div className="grid items-center grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
          <div className="flex flex-col justify-between">
            <h3 className="text-[18px] mb-3">
              Arab Academy for Science, Technology and Maritime Transport
            </h3>
            <div className="flex items-center gap-3 my-4">
              <p className="text-gray-500 text-[15px]">Student</p>
              <p className="p-1 text-white bg-yellow-500 rounded-md text-[15px]">
                Oct 2020 - July 2024
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-[18px] mb-3">Bachelor of Computer Science</h3>
            <p className="text-gray-500 text-[15px]">
              <ol>
                <li>Gpa:3.85/40</li>
                <li>Graduation Project Grade: A+</li>
                <li>Ranked: 2nd</li>
              </ol>
            </p>
          </div>
        </div>
        <Divider />
        <div className="grid items-center grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
          <div className="flex flex-col justify-between">
            <h3 className="text-[18px] mb-3">Google</h3>
            <div className="flex items-center gap-3 my-4">
              <p className="text-gray-500 text-[15px]">Student</p>
              <p className="p-1 text-white text-[15px] bg-yellow-500 rounded-md">
                May 2023 - November 2023
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-[18px] mb-3">
              Data Analytics Professional Certificate
            </h3>
            <p className="text-justify text-[15px] text-gray-500">
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
        <div className="grid items-center grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
          <div className="flex flex-col justify-between">
            <h3 className="text-[18px] mb-3">Graduation Project.</h3>
            <div className="flex items-center gap-3 my-4">
              <p className="text-gray-500 text-[15px]">Student</p>
              <p className="p-1 text-white text-[15px] bg-yellow-500 rounded-md">
                July 2024
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-[18px] mb-3">
              Deep Learning Approach for Predictive Modelling in Healthcare
            </h3>
            <p className="text-justify text-[15px] text-gray-500">
              The project is centered around the development of a comprehensive
              telemedicine system that includes a mobile app and a dedicated
              website for healthcare professionals. The focus was on leveraging
              state-of-the-art AI models to revolutionize medical image analysis
              (Image segmentation for Aorta) and digital medical record
              management.
            </p>
            <p className="mt-4">
              <b><i>Technologies used</i></b>
            <ul className="pl-5 list-disc">
              <li className="text-gray-500"><span className="font-bold text-gray-700">Programming Languages:</span> Python, JavaScript, Dart</li>
              <li className="text-gray-500"><span className="font-bold text-gray-700">Frameworks and Tools:</span> TensorFlow, Keras, Flutter, Flask, Strapi, Node.js, Next.js</li>
              <li className="text-gray-500"><span className="font-bold text-gray-700">Database:</span> Supabase (Postgres)</li>
              <li className="text-gray-500"><span className="font-bold text-gray-700">Development Platforms:</span> Android, iOS, Web</li>
            </ul>
            </p>
          </div>
        </div>
        <Divider />
      </div>
    </div>
  );
};

export default EducationPage;
