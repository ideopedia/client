import React from "react";
import Image from "next/image";
import Link from "next/link";
import wtf from "../public/wtf.svg";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import airpods from "../public/airpods.svg";
import bookicn from "../public/bookicn.svg";
import del from "../public/del.svg";

const ReadCard = (props) => {
  const percentage = 66;
  return (
    <div class="pt-5 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 w-[100%] text-left ">
      <div class="sm:pl-12 sm:p-8 p-3 rounded-md flex items-center justify-start  drop-shadow-lg bg-white readBk">
        <div className="flex cover_image ">
          <Image src={props.image} width={300} height={300} />
        </div>
        <div className=" book_con md:pl-5 md:pt-5">
          <h1 className="lg:text-[20px] font-medium text-[18px] md:text-left text-center">{props.name}</h1>

          <h1 className=" pt-2 lg:text-[18px] text-[16px] md:text-left text-center">{props.author}</h1>
          <div className="flex pt-5 cenbtn">
            <div className="pt-2 text-center">
              <div className="cont flex items-center justify-between md:text-[18px] text-[16px] font-medium mb-4">
                <Image src={bookicn} width={32}/>
                <Link
                  className=""
                  href={`/read/desc/${props.u_id}:${props.b_id}`}
                >
                  Read
                </Link>
              </div>
              <span className="md:text-[18px] text-[16px] font-medium">{props.read} Minutes</span>
            </div>
            <div className="pl-5 pt-2 text-center">
              <div className="cont flex items-center justify-between mb-4">
                <Image src={airpods} width={32}/>
                <div className=" md:text-[18px] text-[16px] font-medium">
                  <Link
                    className=""
                    href={`/read/audio/${props.u_id}:${props.b_id}1`}
                  >
                    Listen
                  </Link>
                </div>
              </div>
              <span className="md:text-[18px] text-[16px] font-medium">{props.listen} Minutes</span>
            </div>
          </div>
        </div>
        {/* <div className="flex mt-[1rem]">
            <div className="ml-3 pt-2">
              
            </div>
            <div className="ml-12 pt-2">
              
            </div>
          </div> */}
      </div>
    </div>
  );
};

export default ReadCard;
