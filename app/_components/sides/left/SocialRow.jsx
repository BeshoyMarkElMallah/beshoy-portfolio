import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const SocialRow = () => {
  return (
    <div className="flex items-center justify-center gap-3 my-3">
      <Link
        href={"https://www.facebook.com/beshoy.mark.elmallah"}
        target="_blank"
      >
        <div className="p-2 bg-yellow-500 rounded-full hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700">
          <FaFacebookF size={20} />
        </div>
      </Link>
      <Link href={"https://github.com/BeshoyMarkElMallah"} target="_blank">
        <div className="p-2 bg-yellow-500 rounded-full hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700">
          <FaGithub size={20} />
        </div>
      </Link>
      <Link
        href={"https://www.linkedin.com/in/beshoy-mark-elmallah/"}
        target="_blank"
      >
        <div className="p-2 bg-yellow-500 rounded-full hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700">
          <FaLinkedinIn size={20} />
        </div>
      </Link>
      <Link
        href={"https://www.youtube.com/@beshomarkelmallah8437"}
        target="_blank"
      >
        <div className="p-2 bg-yellow-500 rounded-full hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700">
          <FaYoutube size={20} />
        </div>
      </Link>
      <Link href={"https://wa.me/+201278003266"} target="_blank">
        <div className="p-2 bg-yellow-500 rounded-full hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700">
          <FaWhatsapp size={20} />
        </div>
      </Link>
    </div>
  );
};

export default SocialRow;
