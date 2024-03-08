import React from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import { LuClock3 } from "react-icons/lu";

const CardDetails = () => {
  return (
    //parent div
    <div className="w-full sm:w-1/2">
    {/* inner parent to flex the items */}
      <div
        className=" flex flex-col sm:items-start items-center  justify-center w-full gap-6"
      >
      {/* Maintaing the div size and writing text */}
        <div className="flex flex-col gap-2 sm:items-start items-center">
          <div className="w-[103px] h-[22px] bg-white font-bold text-[11px] grid place-items-center rounded-[5px]">
            <p className="text-[#E58158]">After Effects</p>
          </div>
          <p className="text-[#2B62CF] text-xl  sm:text-[25px] font-bold">
            Animation in UI <br /> Design (Part 2)
          </p>
        </div>
        {/* Two names along with react-icons */}
        <div className="flex items-center justify-center flex-col sm:flex-row sm:justify-start gap-3 sm:gap-6 w-full">
          <div className="flex justify-center items-center gap-1">
            <HiOutlineUserCircle className="text-[#699BF7]" />
            <p className="text-[#699BF7] text-[11px] font-bold">
              Vishal Pulikottil
            </p>
          </div>
          <div className="flex justify-center items-center gap-1">
            <LuClock3 className="text-[#699BF7]" />
            <p className="text-[#699BF7] text-[11px] font-bold">15 minutes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
