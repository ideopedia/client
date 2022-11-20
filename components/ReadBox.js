import React from "react";
import Image from "next/image";

import userRead from "../public/userRead.svg";
const ReadBox = (props) => {
  return (
    <div className="w-[190px] h-[140px] bg-green-400 drop-shadow-xl rounded-md">
      <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 " >
        <div class="p-3 flex items-center justify-center">
          <Image src={userRead} />
          <span className="pl-2 text-white text-xl">Books Read</span>
        </div>
        <div class="flex items-center justify-center">
          <span className="text-2xl text-white font-bold">{props.amt} Books</span>
        </div>
      </div>
    </div>
  );
};

export default ReadBox;
