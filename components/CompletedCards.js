import React from "react";
import Image from "next/image";
import Link from "next/link";
import wtf from "../public/wtf.svg";
import { useRouter } from "next/router";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Axios from "axios";
import del from "../public/del.svg";
import bookicn from "../public/bookicn.svg";
import airpods from "../public/airpods.svg";
const CompletedCard = (props) => {
  const router = useRouter();
  const percentage = 66;
  return (
    <div
      class=" py-5 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4"
      style={{ maxWidth: "100rem", width: "100%" }}
    >
      <div class=" rounded-md flex items-center  justify-start drop-shadow-lg bg-white py-[1.5rem] pl-[2rem] pr-[2rem] flex-col sm:flex-row">
        <div className="flex cover_image p-2 mr-[1.3rem]">
          <Image src={props.image} width={200} height={300} />
        </div>
        <div className=" book_con ">
          <div className="" style={{ marginTop: "8px" }}>
            <h1 className="b_name text-[20px] readCardBk">
              {props.name[0].toUpperCase() + props.name.slice(1).toLowerCase()}
            </h1>
            <h1 className=" pt-2 b_auth text-[18px] readBkAuth">
              {props.author}
            </h1>
          </div>

          <div className="flex pt-12 sm:justify-between justify-center">
            <div className="  mr-[2rem] sm:w-[4rem]  w-[3rem] sm:mt-[-0.5rem]">
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
            <div className="flex justify-between ">
              <div
                className="ml-3 pt-2 cursor-pointer mr-[1.8rem] sm:mr-[0]"
                onClick={function handleLike({}) {
                  Axios.post(
                    "http://localhost:3000/api/UserCompleted/deleteCompleted",
                    {
                      User_Id: "1212",
                      name: `${props.b_name}`,
                      percent: 100,
                    }
                  );
                  router.reload();
                }}
              >
                <Image src={del} />
              </div>
              <div
                className="ml-3 pt-1 cont mb-[2rem]"
                style={{ paddingTop: "13px" }}
              >
                <Link
                  className=""
                  href={`/desc/${props.b_id}?user=${props.u_id}&book=${props.b_id}`}
                >
                  Continue
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    //      <div className="flex mt-[1rem]">
    //         <div className="ml-3 pt-2">

    //         </div>
    //         <div className="ml-12 pt-2">

    //         </div>
    //       </div>
    //   </div>
    // </div>
  );
};

export default CompletedCard;
