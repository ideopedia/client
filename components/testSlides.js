import React from "react";
import Image from "next/image";
const TestSlides = (props) => {
  return (
    <div>
      <div className="slides p-9 ">
        <div class="p-9 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 bg-white drop-shadow">
          <div class="p-4 ounded-md flex items-center justify-center">
            <Image src={props.image} width={200} height={200} />
          </div>
          <div class="rounded-md flex items-center justify-center bg-green-700">
            <span className="p-2 text-3xl text-white ">{props.quotes}</span>
          </div>
          <div class="pl-4 pr-4 rounded-md flex items-center justify-center">
            <span className="pt-9 pl-9 pr-9 text-2xl ">{props.content}</span>
          </div>
          <div class="pl-4 pr-4 rounded-md flex items-center justify-center">
            {props.name}
          </div>
          <div class="pt-1 pl-4 pr-4   rounded-md flex items-center justify-center">
            {props.post}
          </div>
          <div class=" pl-4 pr-4   rounded-md flex items-center justify-center">
            GOVERNMENT OF INDIA
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestSlides;
