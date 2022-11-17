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
    <div class=" p-5 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 w-[100%] text-left">
      <div class=" rounded-md flex items-center   bg-white readBk">
        <div className="flex cover_image ">
          <Image src={props.image} width={300} height={300} />
        </div>
        <div className=" book_con pl-4 ">
          <h1 className="b_name ">{props.name}</h1>

          <h1 className=" pt-2 b_auth">{props.author}</h1>
          <div className="flex pt-5 bkActions">
            <div className="lg:ml-1 pt-2 text-center">
              <div className="cont flex mb-[0.8rem]">
                <Image src={bookicn} />
                <Link
                  className=""
                  href={`/read/desc/${props.u_id}:${props.b_id}`}
                >
                  Read
                </Link>
              </div>
              <span>{props.read} Minutes</span>
            </div>
            <div className="ml-5 pt-2 text-center">
              <div className="cont flex mb-[0.8rem]">
                <Image src={airpods} />
                <Link className="" href="/read/book">
                  Listen
                </Link>
              </div>
              <span>{props.listen} Minutes</span>
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
      <div class=" rounded-md flex items-center justify-center drop-shadow-md bg-white"></div>
    </div>
  );
};

export default ReadCard;
