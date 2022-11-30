import React from "react";
import ideo from "../public/Card_ideo.svg";
import love from "../public/love.svg";
import sharec from "../public/sharec.svg";
import Image from "next/image";
const SummaryCard = (props) => {
  return (
    <div className="">
      <div className="p-6 h-[95vh] bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 cardbg" id={props.style_id}>
        <div className="flex-column justify-center items-center h-20 pb-9">
          <div className="float">
            <div className="float-left justify-start items-center">
              <Image src={ideo} />
            </div>
            <div className="float-right  justify-end items-center top-6 ">
              <div className="flex justify-center items-center">
                <div>
                  <Image src={love} />
                </div>
                <div>
                  <Image src={sharec} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className=" flex justify-center items-center text-center h-20 p-1   rounded-md bg-[#000000] opp ">
          <span className="text-base xl:text-2xl text-white">
            Quotes from {props.name}
          </span>
        </div>
        <div className=" pb-9"></div>
        <div className=" flex justify-center items-center text-center h-auto leading-loose rounded-md  ">
          <span className="text-[16px] xl:text-xl text-white">
            {props.content}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
