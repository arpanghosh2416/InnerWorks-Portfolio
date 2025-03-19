import React from "react";

const Footer = () => {
  return (
    <div className="relative flex flex-col w-full h-screen overflow-hidden">
      <div className="  inset-0 flex flex-row items-center justify-center text-center  bg-opacity-50 py-4 px-6">
        <div className="bg-black text-white w-[50%] h-100  py-4 px-6 gap-5">
          MAP1
        </div>
        <div className="bg-red-700 text-white py-4 px-6 gap-5">MAP2</div>
      </div>
    </div>
  );
};

export default Footer;
