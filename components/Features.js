import React from "react";

import Image from "next/image";
const Features = (props) => {
  return (
    <div className="h-[260px] w-[260px] bg-white rounded-lg border border-gray-300 hover:border-green-500 hover:drop-shadow infPic">
      <div className="flex justify-center items-center">
        <Image src={props.features} width={180} height={180} />
      </div>
      <div className="flex justify-center items-center">
        <span className="text-[18px] text-green-700 text-center">
          {props.info}
        </span>
      </div>
    </div>
  );
};

export default Features;
