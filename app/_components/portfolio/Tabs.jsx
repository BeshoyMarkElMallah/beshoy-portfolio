"use client";
import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";

const Tabs = () => {
  const [tabs, setTabs] = useState([]);
  const [activeTab, setActiveTab] = useState(null);
  const [tabContent, setTabContent] = useState({});
  const staticData = {
    tabs: [
      {
        name: "All Categories",
        content: [
          {
            image: "icon",
            type: "AI",
            title: "Project 1",
            url: "url goes here",
          },
          {
            image: "icon",
            type: "Web",
            title: "Project 2",
            url: "url goes here",
          },
          {
            image: "icon",
            type: "Mobile",
            title: "Project 3",
            url: "url goes here",
          },
          {
            image: "icon",
            type: "Data Science",
            title: "Project 4",
            url: "url goes here",
          },
        ],
      },
      {
        name: "AI Researches",
        content: [
          {
            image: "ssssss",
            type: "AI",
            title: "Project 1",
            url: "url goes here",
          },
        ],
      },
      {
        name: "Mobile Apps",
        content: [
          {
            image: "ssssss",
            type: "Mobile",
            title: "Project 1",
            url: "url goes here",
          },
        ],
      },
      {
        name: "Websites",
        content: [
          {
            image: "ssssss",
            type: "website",
            title: "Project 1",
            url: "url goes here",
          },
        ],
      },
      {
        name: "AI & Machine Learning Models",
        content: [
          {
            image: "ssssss",
            type: "AI",
            title: "Project 1",
            url: "url goes here",
          },
        ],
      },
    ],
  };
  useEffect(() => {
    // Fetch tabs data from an API or database
    const fetchTabs = async () => {
      try {
        // const response = await fetch("/api/tabs"); // Replace with your API endpoint
        // const data = await response.json();
        const data = staticData;
        setTabs(data.tabs);
        setActiveTab(data.tabs[0].name); // Set the first tab as active by default
        setTabContent(data.tabs[0].content); // Set the content of the first tab
      } catch (error) {
        console.error("Error fetching tabs data:", error);
      }
    };

    fetchTabs();
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab.name);
    setTabContent(tab.content);
  };

  return (
    <div id="Portfolio" className="flex flex-col items-center">
      <div className="sm:hidden">
        <label htmlFor="Tab" className="sr-only">
          Tab
        </label>

        <select
          id="Tab"
          className="w-full border-gray-200 rounded-md"
          value={activeTab}
          onChange={(e) => {
            const selectedTab = tabs.find((tab) => tab.name === e.target.value);
            handleTabClick(selectedTab);
          }}
        >
          {tabs.map((tab) => (
            <option key={tab.name} value={tab.name}>
              {tab.name}
            </option>
          ))}
        </select>
      </div>

      <div className="hidden sm:block">
        <nav className="flex gap-6" aria-label="Tabs">
          {tabs.map((tab) => (
            <a
              key={tab.name}
              //   href="#"
              className={`shrink-0 rounded-lg p-2 text-sm font-medium ${
                activeTab === tab.name
                  ? "text-white bg-yellow-500"
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              }`}
              onClick={() => handleTabClick(tab)}
            >
              {tab.name}
            </a>
          ))}
        </nav>
      </div>

      <div className="flex flex-col items-center mt-4">
        <div className="grid grid-cols-3">
          {Array.isArray(tabContent) ? (
            tabContent.map((content) => (
              <ProjectCard key={content.title} content={content} />
            ))
          ) : (
            <div className="w-[400px] h-[400px] bg-slate-200 rounded-lg animate-pulse"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
