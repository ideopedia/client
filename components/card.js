import React from "react";
import Image from "next/image";
import wtf from "../public/wtf.svg";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import del from "../public/del.svg";

const Card = (props) => {
  const percentage = 66;
  return (
    <div class=" p-5 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 lg:gap-8">
      <div class=" rounded-md flex items-center lg:12 sm:w-12 md:w-9/12 justify-start drop-shadow-md bg-white">
        <div className="flex cover_image p-2">
          <Image src={props.image} />
        </div>
        <div className=" book_con pl-9 ">
          <h1 className="b_name">{props.name}</h1>

          <h1 className=" pt-2 b_auth">{props.author}</h1>
          <div className="flex pt-12">
            <div className="ml-3 w-10 pt-2">
              <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                styles={buildStyles({
                  textColor: "#333",
                  pathColor: "#7F5AF0",
                  trailColor: "#fff",
                })}
              />
            </div>

            <div className="ml-3 pt-3">
              <Image src={del} />
            </div>
            <div className="ml-3 pt-2">
              <button className="log">Continue</button>
            </div>
          </div>
        </div>
      </div>
      <div class=" rounded-md flex items-center justify-center drop-shadow-md bg-white"></div>
    </div>
  );
};
/*
function Card() {
  const percentage = 66;
  return (
    <div class=" p-5 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 lg:gap-8">
      <div class=" rounded-md flex items-center lg:12 sm:w-12 md:w-9/12 justify-start drop-shadow-md bg-white">
        <div className="flex cover_image p-2">
          <Image src={wtf} />
        </div>
        <div className=" book_con pl-9 ">
          <h1 className="b_name">What's The Future And Why It's Up To Us</h1>

          <h1 className=" pt-2 b_auth">Tim O,Reilly</h1>
          <div className="flex pt-12">
            <div className="ml-3 w-10 pt-2">
              <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                styles={buildStyles({
                  textColor: "#333",
                  pathColor: "#7F5AF0",
                  trailColor: "#fff",
                })}
              />
            </div>

            <div className="ml-3 pt-3">
              <Image src={del} />
            </div>
            <div className="ml-3 pt-2">
              <button className="log">Continue</button>
            </div>
          </div>
        </div>
      </div>
      <div class=" rounded-md flex items-center justify-center drop-shadow-md bg-white"></div>
    </div>
  );
}
*/
export default Card;
