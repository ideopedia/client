import React from "react";
import userfeed from "../public/userfeed.svg";
import Image from "next/image";
const FeedBox = () => {
  return (
    <div className="w-[190px] h-[140px] bg-[#8676FE] drop-shadow-xl rounded-md">
      <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 ">
        <div class="p-3 flex items-center justify-center">
          <Image src={userfeed} />
          <span className="pl-2 text-white text-xl">Feedback</span>
        </div>
        <div class="flex items-center justify-center">
          <span className="text-2xl text-white font-bold">2 Feedback</span>
        </div>
      </div>
    </div>
  );
};

export default FeedBox;
