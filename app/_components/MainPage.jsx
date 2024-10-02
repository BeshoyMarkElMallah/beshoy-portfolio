import React from "react";
import MainBanner from "./main/MainBanner";
import ServicesPage from "./services/ServicesPage";
import EducationPage from "./EducationPage";

const WorkHistory = () => <div id="WorkHistory">Work History Section</div>;
const Portfolio = () => <div id="Portfolio">Portfolio Section</div>;
const ContactMe = () => <div id="ContactMe">Contact Me Section</div>;

const MainPage = () => {
  return (
    <div className="h-full mx-4 ">
      <MainBanner />
      <ServicesPage />
      <EducationPage />
      <WorkHistory />
      <Portfolio />
      <ContactMe />
    </div>
  );
};

export default MainPage;
