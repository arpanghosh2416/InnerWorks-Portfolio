import React from "react";
import { Brandlogo } from "../../assets";

const Footer = () => {
  return (
    <div className="bg-black relative w-auto h-auto overflow-hidden">
      <div className=" flex flex-row items-center justify-center text-center  bg-opacity-50 py-4 px-6">
        <div className="bg-amber-500 text-white w-[50%] h-100  py-4 px-6 gap-5">
          MAP1
        </div>
        <div className="bg-red-700 text-white w-[50%] h-100 py-4 px-6 gap-5">
          MAP2
        </div>
        <div className="flex ">
          <img
            src={Brandlogo}
            alt="iwa"
            className="w-40 h- 20 py-3 px-2 flex justify-between items-center absolute bottom-0 left-0 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
