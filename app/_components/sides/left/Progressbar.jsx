import React from "react";

const Progressbar = ({value}) => {
  return (
    <div className="my-2">
      <span id="ProgressLabel" className="sr-only">
        Loading
      </span>

      <span
        role="progressbar"
        aria-labelledby="ProgressLabel"
        aria-valuenow="75"
        className="block bg-gray-200 rounded-full"
      >
        <span
          className="block h-3 bg-yellow-500 rounded-full"
          style={{width:`${value}%`}}
      

        ></span>
      </span>
    </div>
  );
};

export default Progressbar;
