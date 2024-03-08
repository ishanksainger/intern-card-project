import React from "react";
import image from "../../assets/Illustration.jpg";
import star from "../../assets/Vector.jpg";

const InnerCard = () => {
  return (
    // parent div
    <div className="relative rounded-[22px] w-full sm:w-[155px] h-[181px] bg-white flex justify-center items-center flex-col">
      {/* inner div to gather the inner content and images */}
      <div className="rounded-full absolute flex justify-center items-center w-[31px] h-[31px] top-[5px] right-3 z-10 shadow-xl border-2 border-[#FAFAFA]">
        {/* start image imported from assets */}
        <img src={star} alt="" className="absolute" />
      </div>
      {/* 2nd image imported from assets */}
      <img src={image} alt="" className="absolute m-auto" />
      {/* progress bar div */}
      <div className="absolute bottom-4 w-[119px] h-1 bg-[#F4F4F4]">
        {/* inner color on the progress bar */}
        <div className="h-full bg-[#A4E8FD] w-1/2 "></div>
      </div>
    </div>
  );
};

export default InnerCard;
