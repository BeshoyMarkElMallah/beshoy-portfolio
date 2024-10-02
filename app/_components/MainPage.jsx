import React from "react";
import MainBanner from "./MainBanner";
import ServicesPage from "./ServicesPage";

const Education = () => <div id="Education">Education Section</div>;
const WorkHistory = () => <div id="WorkHistory">Work History Section</div>;
const Portfolio = () => <div id="Portfolio">Portfolio Section</div>;
const ContactMe = () => <div id="ContactMe">Contact Me Section</div>;

const MainPage = () => {
  return (
    <div className="h-full mx-4 ">
      <MainBanner />
      <ServicesPage />
      <Education />
      <WorkHistory />
      <Portfolio />
      <ContactMe />
    </div>
  );
};

export default MainPage;
