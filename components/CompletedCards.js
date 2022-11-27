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
    // <div class=" p-5 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 ">
    //   <div class=" rounded-md flex items-center  justify-start drop-shadow-lg bg-white pr-6">
    //     <div className="flex cover_image p-2">
    //       <Image src={props.image} width={200} height={300} />
    //     </div>
    //     <div className=" book_con ">
    //       <div className="" style={{ position: "relative", top: "8px" }}>
    //         <h1 className="b_name">{props.name}</h1>
    //         <h1 className=" pt-2 b_auth">{props.author}</h1>
    //       </div>

    //       <div className="flex pt-12 justify-between">
    //         <div
    //           className="ml-3 w-[4rem]"
    //           style={{ position: "relative", bottom: "10px", right: "20px" }}
    //         >
    //           <CircularProgressbar
    //             value={props.percent}
    //             text={`${props.percent}%`}
    //             styles={buildStyles({
    //               textColor: "#333",
    //               pathColor: "#7F5AF0",
    //               trailColor: "#fff",
    //             })}
    //           />
    //         </div>
    //         <div className="flex ">
    //           <div
    //             className="ml-3 pt-2 cursor-pointer"
    //             onClick={function handleLike({}) {
    //               Axios.post(
    //                 "http://localhost:3000/api/UserCompleted/deleteCompleted",
    //                 {
    //                   User_Id: "1212",
    //                   name: `${props.b_name}`,
    //                   percent: 100,
    //                 }
    //               );
    //               router.reload();
    //             }}
    //           >
    //             <Image src={del} />
    //           </div>
    //           <div className="ml-3 pt-1 cont">
    //             <Link className="" href={`/read/${props.book_id}`}>
    //               Continue
    //             </Link>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div class="pt-5 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 w-[100%] text-left ">
      <div class="sm:pl-12 sm:p-8 p-3 rounded-md flex items-center justify-start  drop-shadow-lg bg-white readBk">
        <div className="flex cover_image ">
        <Image src={props.image} width={200} height={300} />
        </div>
        <div className=" book_con md:pl-5 md:pt-5">
          <h1 className="lg:text-[20px] font-medium text-[18px] md:text-left text-center">{props.name}</h1>

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
                    "/api/UserCompleted/deleteCompleted",
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
              <div className="ml-3 pt-1 cont">
                <Link className="" href={`/read/${props.book_id}`}>
                  Continue
                </Link>
              </div>
              <span className="md:text-[18px] text-[16px] font-medium">{props.read} Minutes</span>
            </div>
            <div className="pl-5 pt-2 text-center">
              <div className="cont flex items-center justify-between mb-4">
                <div className=" mt-1">
                <Image src={airpods} width={32} />
                </div>
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

export default CompletedCard;
