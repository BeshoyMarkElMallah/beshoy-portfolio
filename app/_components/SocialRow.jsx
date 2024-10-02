import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaWhatsapp, FaYoutube } from "react-icons/fa";


const SocialRow = () => {
  return (
    <div className="flex items-center justify-center gap-3 my-3">
      <div className="p-2 bg-yellow-500 rounded-full">
        <FaFacebookF size={20} />
      </div>
      <div className="p-2 bg-yellow-500 rounded-full">
        <FaGithub size={20} />
      </div>
      <div className="p-2 bg-yellow-500 rounded-full">
        <FaLinkedinIn size={20} />
      </div>
      <div className="p-2 bg-yellow-500 rounded-full">
        <FaYoutube size={20} />
      </div>
      <div className="p-2 bg-yellow-500 rounded-full">
        <FaWhatsapp size={20} />
      </div>
    </div>
  );
};

export default SocialRow;
