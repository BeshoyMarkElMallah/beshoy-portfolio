import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import Link from "next/link";

const CvButton = () => {
  return (
    <div>
      <Link
        href="https://drive.google.com/file/d/1-8cSjTVRwEYLumvBkv6SMUI-WqUtTqSC/view?usp=sharing"
        target="_blank"
        className="cursor-pointer"
      >
        <div className="flex items-center justify-center px-4 py-2 font-bold text-center text-black bg-yellow-500 rounded-lg hover:bg-yellow-600">
          <h2 className="mx-3 text-[15px]"> Dowload CV </h2>
          <MdOutlineFileDownload size={20} />
        </div>
      </Link>
    </div>
  );
};

export default CvButton;
