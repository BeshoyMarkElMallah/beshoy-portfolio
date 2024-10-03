import React from "react";
import MainBanner from "./main/MainBanner";
import ServicesPage from "./services/ServicesPage";
import EducationPage from "./EducationPage";
import WorkHistory from "./WorkHistory";
import PortfolioPage from "./PortfolioPage";
import ContactPage from "./ContactPage";
import Footer from "./Footer";

const MainPage = () => {
  return (
    <div className="h-full lg:mx-4 md:mx-4 sm:mx-0">
      <MainBanner />
      <ServicesPage />
      <EducationPage />
      <WorkHistory />
      <PortfolioPage />
      <ContactPage/>
      <Footer/>
    </div>
  );
};

export default MainPage;
