import { useState } from "react";
import { ChevronDown, ChevronUp } from "react-feather";

export default function DropMenu({ children }) {


  return (
      <div className="hover:!text-black transition duration-150 items-center justify-between relative flex flex-row ">
       
        {children } <ChevronDown size={20}/>
          

      </div>
  )
}