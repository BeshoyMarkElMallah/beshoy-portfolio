import React from "react";
import ContactForm from "./contact/ContactForm";
import PlaceCard from "./contact/PlaceCard";
import { MdMap } from "react-icons/md";
import { IoMailSharp } from "react-icons/io5";


const ContactPage = () => {
  return (
    <div id="ContactMe" className="items-center justify-center w-full dark:bg-gray-900 dark:text-white ">
      <div className="h-20"></div>
      <div className="flex flex-row justify-around dark:bg-gray-900 dark:text-white">
        <div className="flex flex-col w-3/4 m-5 dark:bg-gray-900 dark:text-white">
          <h2 className="font-bold text-[32px] text-gray-700 dark:bg-gray-900 dark:text-white">
            Leave Us Your Info
          </h2>
          <div className="h-10"></div>
          <div className="flex flex-col justify-between ">
            <ContactForm />
          </div>
        </div>
        <div className="flex flex-col justify-start w-2/4 m-5">
          <h2 className="font-bold text-[32px] text-gray-700 dark:bg-gray-900 dark:text-white">
            Contact Information
          </h2>
          <div className="h-5"></div>
          <div className="flex flex-col justify-start ">
            <PlaceCard
              icon={
                <MdMap className="p-2 bg-yellow-500 rounded-full" size={40} />
              }
              keys={
                <>
                  <p>Country:</p>
                  <p>City:</p>
                </>
              }
              values={
                <>
                  <p>Egypt</p>
                  <p>Cairo</p>
                </>
              }
            />
            <PlaceCard
              icon={
                <IoMailSharp  className="p-2 bg-yellow-500 rounded-full" size={40} />
              }
              keys={
                <>
                  <p>Email:</p>
                  <p>Skype:</p>
                  <p>Telegram:</p>
                </>
              }
              values={
                <>
                  <p>besho.elmallah@gmail.com</p>
                  <p>@bisho.king.980</p>
                  <p>@beshomark</p>
                </>
              }
            />
          </div>
        </div>
      </div>
      {/* <div className="h-10"></div> */}
    </div>
  );
};

export default ContactPage;
