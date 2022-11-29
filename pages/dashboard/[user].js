import React from "react";
import SideNavbar from "../../components/sidebar";
import Card from "../../components/card";
import Link from "next/link";
import ProgressBar from "@ramonak/react-progress-bar";
import task from "../../public/task.svg";
import create from "../../public/create.svg";
import red from "../../public/red.svg";
import infu from "../../public/influencer1.svg";
import { getCookies, getCookie, setCookies, removeCookies } from "cookies-next";
import Navbar from "../../components/navbar";
import cht from "../../public/cht.svg";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import feed from "../../public/feedp.svg";
import shares from "../../public/shrs.svg";
import bronze from "../../public/bronze.svg";
import UserChart from "../../components/UserChart";
import gold from "../../public/gold.svg";
import silver from "../../public/silver.svg";
import rank1 from "../../public/rank1.svg";
import rank2 from "../../public/rank2.svg";
import Loader from "../../components/loader";
import { useState, useEffect } from "react";
import Axios from "axios";
import { useRouter } from "next/router";
import chatp from "../../public/chatp.svg";
import ReadBox from "../../components/ReadBox";
import ChatBox from "../../components/ChatBox";
import ShareBox from "../../components/ShareBox";
import FeedBox from "../../components/FeedBox";
// import sharep from "../../../public/sharep.svg";
// import feedp from "../../../public/feedp.svg";
// import chart from "../../../public/chart.svg";
// import readp from "../../../public/readp.svg";
import Image from "next/image";
const Dashboard = () => {
  const router = useRouter();
  const favo = router.query;
  var day = new Date();
  var hr = day.getHours();
  console.log(favo.user);
  const [type, setType] = useState("Bronze Influencer");
  const [data, setData] = useState(false);
  useEffect(() => {
    Axios.post("/api/UserDashboard/findUser", {
      User_Id: favo.user,
    }).then((data) => {
      setData(data.data);
    });
  }, []);
  // if (data === true) {
  //   if (
  //     20 * data[0].Read +
  //       10 * data[0].Share +
  //       5 * data[0].Chat +
  //       5 * data[0].Feed <
  //     300
  //   ) {
  //     setType("Bronze Influencer");
  //   } else if (
  //     20 * data[0].Read +
  //       10 * data[0].Share +
  //       5 * data[0].Chat +
  //       5 * data[0].Feed >
  //       300 &&
  //     20 * data[0].Read +
  //       10 * data[0].Share +
  //       5 * data[0].Chat +
  //       5 * data[0].Feed <
  //       700
  //   ) {
  //     setType("Silver Influencer");
  //   } else {
  //     setType("Golden Influencer");
  //   }
  // }
  return (
    <div>
      {data ? (
        <div>
          <Navbar isLogedIn={true} userid={favo.user} />

          <div className="flex justify-start p-4">
            <div className="xl:text-4xl lg:text-3xl md:text-3xl text-[26px] pb-4 font-medium">Welcome Back</div>
          </div>
          <div className="flex  justify-center items-center p-4 ">
            <div className="">
              <CircularProgressbarWithChildren
                strokeWidth={3}
                counterClockwise={true}
                value={data[0].Profile_percent}
                styles={buildStyles({
                  pathColor: "#2CB67D",
                  trailColor: "#fff",
                })}
                className="w-[200px] h-[200px] flex justify-center items-center"
              >
                <div className=" inne pt-3 pl-2 pr-1">
                  <Image
                    src={data[0].Image}
                    width={200}
                    height={200}
                    className="fixed  imgr"
                  />
                </div>
              </CircularProgressbarWithChildren>
              <div className="flex justify-center items-center -mt-2 md:-mt-1 sm:-mt-0 ">
                <span className="p-2 md:p-0 sm:p-5 bg-green-500 px-6 md:px-3 sm:px-1 rounded-md sm:text-base text-base">
                  {data[0].Profile_percent} %
                </span>
              </div>
            </div>
          </div>
          <div className="flex xl:justify-center lg:justify-center md:justify-center justify-center ">
            <div className="xl:text-xl lg:text-lg md:text-lg font-medium pb-4 sm:pl-4 text-gray-500">
              <Link href={`/profile/${favo.user}`}>complete Your profile</Link>
            </div>
          </div>
          <div className="flex xl:justify-center lg:justify-center md:justify-center sm:justify-center p-4">
            <div className="xl:text-4xl lg:text-3xl md:text-3xl text-[26px] font-medium pb-4">
              {hr < 12 ? "Good Morning" : "Good Evening"}, Hon.{data[0].Name}
            </div>
          </div>
          <div className="flex xl:justify-center lg:justify-center md:justify-center sm:justify-center sm:p-4 sm:pb-9 ">
            <div className="xl:text-2xl lg:text-xl md:text-xl text-lg font-medium pt-4 flex">
              {type === "Bronze Influencer" ? (
                <div className="sm:px-0 sm:pt-0 px-5 pt-2">
                  {" "}
                  <Image src={bronze} />
                </div>
              ) : (
                <Image src={silver} />
              )}

              <div className="sm:pt-3 sm:pr-0 pr-6">
                <span className="sm:pl-2 sm:pb-2 pb-4 pt-20 xl:text-2xl lg:text-xl md:text-xl text-lg font-medium"> You are a {type} </span>
                <span className="sm:pl-2 sm:pr-2 text-green-500 xl:text-2xl lg:text-xl md:text-xl text-lg font-medium ">
                  {data[0].Read * 20} Points
                </span>
                <span
                  onClick={function handleLink() {
                    router.push(`/points/${favo.user}`);
                  }}
                  className=" pl-2 cursor-pointer xl:text-xl lg:text-lg md:text-lg text-base font-medium"
                >
                  Learn more
                </span>
              </div>
            </div>
          </div>
          {/* <div className="p-4  pt-9 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8 lg:gap-8 pb-9">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 ">
              <div className="text-4xl pb-4">Welcome</div>
              <div className="flex justify-center items-center pt-7 pl-5">
                <div className="w-4/12">
                  <CircularProgressbarWithChildren
                    strokeWidth={3}
                    counterClockwise={true}
                    value={80}
                    styles={buildStyles({
                      pathColor: "#2CB67D",
                      trailColor: "#fff",
                    })}
                  >
                   
                    <div className="mr-2 inne ml-2 mt-3 mb-1">
                      <Image
                        src={infu}
                        width={200}
                        height={200}
                        className="justify-center items-center  imgr"
                      />
                    </div>
                  </CircularProgressbarWithChildren>
                  <div className="flex justify-center items-center -mt-2 md:-mt-1 sm:-mt-0 ">
                    <span className="p-2 md:p-0 sm:p-5 bg-green-500 px-6 md:px-3 sm:px-1 rounded-md sm:text-base text-base">
                      90 %
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center gap-4 pl-9  group cursor-pointer pt-4 pb-4">
                <Link href={`/dashboard/profile/${favo.user}`}>
                  <h3 className="text-sm foottext font-semibold ">
                    Complete your Profile
                  </h3>
                </Link>
              </div>
            </div>

            <div className="">
              <div className="text-3xl pb-4">
              {hr < 12 ? "Good Morning" : "Good Evening"}, Mr. Narendra Modi
              </div>

              <div className="text-2xl pt-4">
                {type === "Bronze Influencer" ? (
                  <Image src={bronze} />
                ) : (
                  <Image src={silver} />
                )}
                <span className="pl-2 pb-2">{type}</span>
                <span className="pl-2 pr-2 text-green-500">300 Points</span>
                <span onClick={function handleLink(){
                  router.push(`/dashboard/points/${favo.user}`)
                }} className="text-base pl-2">Learn more</span>
              </div>
            </div>
          </div> */}
          <div className="p-2 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:pt-0 pt-8 pb-8">
            <div className="rounded-md flex items-center justify-center">
              <ReadBox amt={data[0].Read} />
            </div>
            <div className=" rounded-md flex items-center justify-center">
              <ShareBox amt={data[0].Share} />
            </div>
            <div className="rounded-md flex items-center justify-center">
              <ChatBox amt={data[0].Feed} />
            </div>
          </div>

          <div className=" pt-8 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 ">
            <div className="p-4  rounded-md  items-center justify-start ">
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-1 lg:gap-4">
                <div className="pb-4 rounded-md  items-center justify-start xl:text-4xl lg:text-3xl md:text-3xl text-[26px] font-medium">
                  ACTIVITY
                </div>
                <div className=" flex rounded-md  items-center  justify-center">
                  <UserChart array={data[0].Activity} />  
                </div>
              </div>
            </div>
            <div className="p-4  rounded-md  items-center justify-center ">
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8 lg:gap-8 ">
                <div className="p-4 rounded-md  items-center justify-center xl:text-4xl lg:text-3xl md:text-3xl text-[26px] font-medium">
                  LEADERBOARD
                </div>
                <div className=" rounded-md items-center justify-center z-50 bg-green-100 drop-shadow-md">
                  <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-1 lg:gap-2">
                    <div className=" rounded-md flex items-center justify-end">
                      <div className="pt-1 pb-1">
                        <h1 className="xl:text-4xl lg:text-3xl md:text-3xl text-xl font-medium">1ND</h1>
                      </div>
                    </div>
                    <div className="  rounded-md flex items-center justify-center">
                      <Image src={rank2} width={52} height={52}/>
                    </div>
                    <div className="  rounded-md flex items-center justify-start">
                      <div className="pt-1 pb-1">
                        <h1 className="xl:text-3xl lg:text-2xl md:text-2xl text-lg font-medium">Nimi Martins</h1>
                      </div>
                    </div>
                    <div className="p-4  rounded-md flex items-center justify-center">
                      <div className="pt-1 pb-1">
                        <h1 className="xl:text-3xl lg:text-2xl md:text-2xl text-lg font-medium text-green-500 ">1000</h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-md  items-center justify-center bg-white  border border-gray-200">
                  <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-1 lg:gap-2">
                    <div className=" rounded-md flex items-center justify-end">
                      <div className="pt-1 pb-1">
                        <h1 className="xl:text-3xl lg:text-2xl md:text-2xl text-lg font-medium">2ND</h1>
                      </div>
                    </div>
                    <div className="  rounded-md flex items-center justify-center">
                      <Image src={rank2} />
                    </div>
                    <div className="  rounded-md flex items-center justify-start">
                      <div className="pt-1 pb-1">
                        <h1 className="xl:text-2xl lg:text-xl md:text-xl text-base font-medium">Nimi Martins</h1>
                      </div>
                    </div>
                    <div className="p-4  rounded-md flex items-center justify-center">
                      <div className="pt-1 pb-1">
                        <h1 className="xl:text-2xl lg:text-xl md:text-xl text-base font-medium text-green-500 ">600</h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-md  items-center justify-center bg-white  border border-gray-200">
                  <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-1 lg:gap-2">
                    <div className=" rounded-md flex items-center justify-end">
                      <div className="pt-1 pb-1">
                        <h1 className="xl:text-3xl lg:text-2xl md:text-2xl text-lg font-medium">3RD</h1>
                      </div>
                    </div>
                    <div className="  rounded-md flex items-center justify-center">
                      <Image src={rank2} />
                    </div>
                    <div className="  rounded-md flex items-center justify-start">
                      <div className="pt-1 pb-1">
                        <h1 className="xl:text-2xl lg:text-xl md:text-xl text-base font-medium">Nimi Martins</h1>
                      </div>
                    </div>
                    <div className="p-4  rounded-md flex items-center justify-center">
                      <div className="pt-1 pb-1">
                        <h1 className="xl:text-2xl lg:text-xl md:text-xl text-base font-medium text-green-500 ">500</h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-md  items-center justify-center bg-white  border border-gray-200">
                  <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-1 lg:gap-2">
                    <div className=" rounded-md flex items-center justify-end">
                      <div className="pt-1 pb-1">
                        <h1 className="xl:text-3xl lg:text-2xl md:text-2xl text-lg font-medium">4TH</h1>
                      </div>
                    </div>
                    <div className="  rounded-md flex items-center justify-center">
                      <Image src={rank2} />
                    </div>
                    <div className="  rounded-md flex items-center justify-start">
                      <div className="pt-1 pb-1">
                        <h1 className="xl:text-2xl lg:text-xl md:text-xl text-base font-medium">Nimi Martins</h1>
                      </div>
                    </div>
                    <div className="p-4  rounded-md flex items-center justify-center">
                      <div className="pt-1 pb-1">
                        <h1 className="xl:text-2xl lg:text-xl md:text-xl text-base font-medium text-green-500 ">400</h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-md  items-center justify-center bg-white  border border-gray-200">
                  <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-1 lg:gap-2">
                    <div className=" rounded-md flex items-center justify-end">
                      <div className="pt-1 pb-1">
                        <h1 className="xl:text-3xl lg:text-2xl md:text-2xl text-lg font-medium">5TH</h1>
                      </div>
                    </div>
                    <div className="  rounded-md flex items-center justify-center">
                      <Image src={rank2} />
                    </div>
                    <div className="  rounded-md flex items-center justify-start">
                      <div className="pt-1 pb-1">
                        <h1 className="xl:text-2xl lg:text-xl md:text-xl text-base font-medium">Nimi Martins</h1>
                      </div>
                    </div>
                    <div className="p-4  rounded-md flex items-center justify-center">
                      <div className="pt-1 pb-1">
                        <h1 className="xl:text-2xl lg:text-xl md:text-xl text-base font-medium text-green-500 ">300</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Dashboard;
