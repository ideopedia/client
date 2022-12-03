import React from "react";
import Image from "next/image";

import usershare from "../public/usershare.svg";

const ShareBox = (props) => {
  return (
    <div className="bg-white drop-shadow rounded-md py-16 px-20">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 ">
        <div className="flex items-center justify-center">
          <Image src={usershare} />
          <span className="pl-2 text-black text-xl">Shares</span>
        </div>
        <div className="flex items-center justify-center pt-2">
          <span className="text-2xl text-black font-bold">{props.amt} Shares</span>
        </div>
      </div>
    </div>
  );
};

export default ShareBox;
