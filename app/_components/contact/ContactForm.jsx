import React from "react";

const ContactForm = () => {
  return (
    <div className="flex flex-col w-full bg-white rounded-lg dark:bg-gray-600 dark:text-white">
        <div className="flex flex-col mx-5 ">
            <label className="my-2 text-gray-500 dark:bg-gray-600 dark:text-white" htmlFor="name">
            Name
            </label>
            <input
            type="text"
            id="name"
            name="name"
            className="p-2 border border-gray-300 rounded-md dark:bg-gray-600 dark:text-white"
            />
        </div>
        <div className="flex flex-col mx-5">
            <label className="my-2 text-gray-500 dark:bg-gray-600 dark:text-white" htmlFor="email">
            Email
            </label>
            <input
            type="email"
            id="email"
            name="email"
            className="p-2 border border-gray-300 rounded-md dark:bg-gray-600 dark:text-white"
            />
        </div>
        <div className="flex flex-col mx-5 ">
            <label className="my-2 text-gray-500 dark:bg-gray-600 dark:text-white" htmlFor="email">
            Subject
            </label>
            <input
            type="email"
            id="email"
            name="email"
            className="p-2 border border-gray-300 rounded-md dark:bg-gray-600 dark:text-white"
            />
        </div>
        <div className="flex flex-col mx-5">
            <label className="my-2 text-gray-500 dark:bg-gray-600 dark:text-white" htmlFor="message">
           Your Message
            </label>
            <textarea
            id="message"
            name="message"
            className="p-2 border border-gray-300 rounded-md dark:bg-gray-600 dark:text-white"
            />
        </div>
        <div className="m-5">
            <button className="p-2 text-white bg-yellow-500 rounded-md hover:bg-yellow-600">Submit</button>
        </div>
    </div>
  );
};

export default ContactForm;
