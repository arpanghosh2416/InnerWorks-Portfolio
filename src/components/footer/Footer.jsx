import React from "react";
import { Brandlogo } from "../../assets";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMobileAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-black relative w-[100%] h-[100%] overflow-hidden">
      <div className="relative flex flex-row items-center justify-center text-center bg-opacity-50 py-4 px-2 space-x-3">
        {/* ---------------------------------- */}
        <div className="bg-amber-500 text-white w-[35%] h-[100%] py-4 px-6 rounded-lg">
          MAP1
        </div>
        <div className="bg-red-700 text-white w-[35%] h-[100%]  py-4 px-6 rounded-lg">
          MAP2
        </div>
      </div>
      {/* ---------------------------------- */}
      <div className="left-0 bottom-0 relative flex flex-col w-[30%] py-3 px-3 ">
        <img
          src={Brandlogo}
          alt="iwa"
          className="h-auto justify-between items-center relative bottom-0 left-0 border-black w-40 py-3 px-1 "
        />
        <p className="relative items-center justify-between text-white bottom-0 left-0 text-justify py-3 px-1">
          Kolkata’s most trusted provider private investigation and man power
          provider solutions in Kolkata.
        </p>
        {/* <div className="flex-row"></div> */}
        <div className="flex space-x-2 bottom-0 left-0 py-3 px-1">
          {/* Twitter */}
          <div className="bg-[#3b5998] rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#C9A267] hover:scale-110 transition-transform cursor-pointer">
            <FaTwitter className="text-white text-sm" />
          </div>
          {/* Facebook */}
          <div className="bg-[#3b5998] rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#C9A267] hover:scale-110 transition-transform cursor-pointer">
            <FaFacebookF className="text-white text-sm" />
          </div>
          {/* Instagram */}
          <div className="bg-[#3b5998] rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#C9A267] hover:scale-110 transition-transform cursor-pointer">
            <FaInstagram className="text-white text-sm" />
          </div>
          {/* LinkedIn */}
          <div className="bg-[#3b5998] rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#C9A267] hover:scale-110 transition-transform cursor-pointer">
            <FaLinkedinIn className="text-white text-sm" />
          </div>
          <div className="bg-[#3b5998] rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#C9A267] hover:scale-110 transition-transform cursor-pointer">
            <FaMobileAlt className="text-white text-sm" />
          </div>
          <div className="bg-[#3b5998] rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#C9A267] hover:scale-110 transition-transform cursor-pointer">
            <FaPhoneAlt className="text-white text-sm" />
          </div>
          <div className="bg-[#3b5998] rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#C9A267] hover:scale-110 transition-transform cursor-pointer">
            <FaEnvelope className="text-white text-sm" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
