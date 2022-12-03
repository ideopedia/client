import React from "react";
import Image from "next/image";

import userRead from "../public/userRead.svg";
const ReadBox = (props) => {
  return (
    <div className="bg-green-500 drop-shadow rounded-md py-16 px-16">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 " >
        <div className="flex items-center justify-center">
          <Image src={userRead} />
          <span className="pl-2 text-white text-xl">Books Read</span>
        </div>
        <div className="flex items-center justify-center pt-2">
          <span className="text-2xl text-white font-bold">{props.amt} Books</span>
        </div>
      </div>
    </div>
  );
};

export default ReadBox;
