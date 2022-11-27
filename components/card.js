import React from "react";
import Image from "next/image";
import Link from "next/link";
import wtf from "../public/wtf.svg";
import {
  CircularProgressbar,
  
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Axios from "axios"
import del from "../public/del.svg";

const Card = (props) => {
  const percentage = 66;
  return (
    <div className=" p-5 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 ">
      <div className=" rounded-md flex items-center  justify-start">
        <div className="flex cover_image p-2">
          <Image src={props.image} width={200} height={300} />
        </div>
        <div className=" book_con ">
          <div className="" style={{ position: "relative", top: "8px" }}>
            <h1 className="b_name">{props.name}</h1>
            <h1 className=" pt-2 b_auth">{props.author}</h1>
          </div>

          <div className="flex pt-12 justify-between">
            <div
              className="ml-3 w-[4rem]"
              style={{ position: "relative", bottom: "10px", right: "20px" }}
            >
              <CircularProgressbar
                value={props.percent}
                text={`${props.percent}%`}
                styles={buildStyles({
                  textColor: "#333",
                  pathColor: "#7F5AF0",
                  trailColor: "#fff",
                })}
              />
            </div>
            <div className="flex ">
              <div
                className="ml-3 pt-2 cursor-pointer"
                onClick={function handleLike({}) {
                  Axios.post(
                    "http://localhost:3000/api/UserFavourites/deleteFavourites",
                    {
                      User_Id: "1212",
                      name: `${props.b_name}`,
                    }
                  );
                }}
              >
                <Image src={del} />
              </div>
              <div className="ml-3 pt-1 cont">
                <Link className="" href={`/read/${props.book_id}`}>
                  Continue
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
