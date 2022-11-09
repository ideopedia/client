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
    <div class=" p-5 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2">
      <div class=" rounded-md flex items-center w-screen justify-start drop-shadow-md bg-white">
        <div className="flex cover_image  p-2">
          <Image src={props.image} width={100} height={100} />
        </div>
        <div className=" book_con pl-9 ">
          <h1 className="b_name">{props.name}</h1>

          <h1 className=" pt-2 b_auth">{props.author}</h1>
          <div className="flex pt-5">
            <div className="ml-1 pt-2">
              <div className="cont flex">
                <Image src={bookicn} />
                <Link className="" href="/read/book">
                  Read
                </Link>
              </div>
            </div>
            <div className="ml-5 pt-2">
              <div className="cont flex">
                <Image src={airpods} />
                <Link className="" href="/read/book">
                  Listen
                </Link>
              </div>
            </div>
          </div>
          <div className="flex pt-2">
            <div className="ml-3 pt-2">
              <span>{props.read} Minutes</span>
            </div>
            <div className="ml-12 pt-2">
              <span>{props.listen} Minutes</span>
            </div>
          </div>
        </div>
      </div>
      <div class=" rounded-md flex items-center justify-center drop-shadow-md bg-white"></div>
    </div>
  );
};

export default ReadCard;
