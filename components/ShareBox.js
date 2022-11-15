import React from "react";
import Image from "next/image";

import usershare from "../public/usershare.svg";

const ShareBox = () => {
  return (
    <div className="w-[190px] h-[140px] bg-white drop-shadow-xl rounded-md">
      <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 ">
        <div class="p-3 flex items-center justify-center">
          <Image src={usershare} />
          <span className="pl-2 text-black text-xl">Shares</span>
        </div>
        <div class="flex items-center justify-center">
          <span className="text-2xl text-black font-bold">5 Shares</span>
        </div>
      </div>
    </div>
  );
};

export default ShareBox;
