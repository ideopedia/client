import React from "react";

import Image from "next/image";
const Features = (props) => {
  return (
    <div className="h-[280px] w-[280px] bg-white rounded-lg border border-gray-300 hover:border-green-500 hover:drop-shadow-lg infPic flex flex-col items-center justify-center">
      <div className="flex justify-center items-center">
        <Image src={props.features} width={180} height={180} />
      </div>
      <div className="flex justify-center items-center">
        <span className="lg:md:text-[18px] md:text-[18px] sm:text-[16px] text-[16px] text-black text-center px-5">
          {props.info}
        </span>
      </div>
    </div>
  );
};

export default Features;
