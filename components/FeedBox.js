import React from "react";
import userfeed from "../public/userfeed.svg";
import Image from "next/image";
const FeedBox = (props) => {
  return (
    <div className="w-[190px] h-[140px] bg-[#8676FE] drop-shadow-xl rounded-md">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 ">
        <div className="p-3 flex items-center justify-center">
          <Image src={userfeed} />
          <span className="pl-2 text-white text-xl">Feedback</span>
        </div>
        <div className="flex items-center justify-center">
          <span className="text-2xl text-white font-bold">{props.amt} Feedback</span>
        </div>
      </div>
    </div>
  );
};

export default FeedBox;
