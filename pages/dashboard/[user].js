import React from "react";
import SideNavbar from "../../components/sidebar";
import Card from "../../components/card";
import Link from "next/link";
import ProgressBar from "@ramonak/react-progress-bar";
import task from "../../public/task.svg";
import create from "../../public/create.svg";
import red from "../../public/red.svg";
import Navbar from "../../components/navbar";
import cht from "../../public/cht.svg";
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
  console.log(favo.user);
  const [type, setType] = useState("Bronze Influencer");
  const [data, setData] = useState(false);
  useEffect(() => {
    Axios.post("http://localhost:3000/api/UserDashboard/findUser", {
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
        <div className="p-4 verticalscroll">
          <div className="md:flex">
            {console.log(data)}
            <SideNavbar
              per={data[0].Profile_percent}
              image={data[0].Image}
              name={data[0].Name}
              u_id={data[0].User_Id}
            />
            <div className="md:pl-9 lg:w-9/12 md:w-9/12 sm:pl-1">
              <div className="pt-9">
                <h1 className="text-xl new2 pl-2">Welcome Back</h1>
              </div>
              <div class="scrollmenu flex pt-9 w-[24rem]">
                <div className=" flex justify-center items-center">
                  {type === "Bronze Influencer" ? (
                    <Image src={bronze}/>
                  ) : (
                    <Image src={silver}/>
                  )}
                </div>
                
                <div className="pr-3 pt-2 flex"style={{position:"relative",left:"1rem"}}>
                  <Link href="/mylib/completed" className="navtxt">
                    <span className="text-xl cursor-pointer">{type}</span>
                  </Link>
                </div> 
                <div className="pr-3 pt-2 flex" style={{position:"relative",left:"1rem"}}>
                  <Link href="/mylib/favourites" className="navtxt ">
                    <span className="text-xl text-purple-700 cursor-pointer text-bold new2">
                      {20 * data[0].Read +
                        10 * data[0].Share +
                        5 * data[0].Chat +
                        5 * data[0].Feed}{" "}
                      Points
                    </span>
                  </Link>
                  <div className="pt-1 pl-2">
                    <Link
                      href={`/dashboard/points/${data[0].User_Id}`}
                      className="navtxt"
                    >
                      <span className="text-base text-gray-700 cursor-pointer text-bold new2" >
                        Learn more
                      </span>
                    </Link>
                  </div>
        
                </div>
              </div>
              <br />
              <div className="gridBx">
              <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-1">
                <div class="rounded-md flex items-center " >
                  <ReadBox amt={data[0].Read} />
                </div>
                <div class=" rounded-md flex items-center">
                  <ShareBox amt={data[0].Share} />
                </div>
                <div class="rounded-md flex items-center">
                  <ChatBox amt={data[0].Chat} />
                </div>
                <div class="rounded-md flex items-center">
                  <FeedBox amt={data[0].Feed} />
                </div>
              </div>
              </div>
              <br />
              <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-2">
                <div class=" rounded-md  items-center justify-start mb-[-8rem]">
                  <div className="pt-3 pb-4">
                    <h1 className="text-xl new2 pl-2">ACTIVITY</h1>
                  </div>
                  <div class="">
                  <UserChart array={data[0].Activity} />
                  </div>
                </div>
                <div class="rounded-md  items-center justify-start pt-[3rem] lboard mx-[2rem]">
                    <h1 className="text-xl new2 pl-2 mb-[3rem]">Leaderboard</h1>
                  <div class=""style={{width:"20rem"}}>
                    <div class=" rounded-md ">
                      <div className="pt-3 pb-1 text-center">
                        <h1 className="text-xl ">Most Points</h1>
                      </div>
                      <div className="pl-3 mt-[1rem] text-center">
                          <Image src={rank1} />
                        </div>
                        <div className=" pb-1 text-center mb-[1rem]">
                          <h1 className="text-xl ">Sarah Martins</h1>
                        </div>
                        <div className=" pb-1 text-center">
                          <h1 className="text-xl text-purple-700">1000</h1>
                        </div>
                    </div>
                    <div class="  rounded-md flex items-center justify-start">
                      <div class="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-1 lg:gap-2">
                        <div class=" rounded-md flex items-center justify-end">
                          <div className="pt-1 pb-1">
                            <h1 className="text-xl ">2ND</h1>
                          </div>
                        </div>
                        <div class="  rounded-md flex items-center justify-center">
                          <Image src={rank2} />
                        </div>
                        <div class="  rounded-md flex items-center justify-start">
                          <div className="pt-1 pb-1">
                            <h1 className="text-base ">Nimi Martins</h1>
                          </div>
                        </div>
                        <div class="p-4  rounded-md flex items-center justify-center">
                          <div className="pt-1 pb-1">
                            <h1 className="text-base text-purple-700 ">800</h1>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="  rounded-md flex items-center justify-start">
                      <div class="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-1 lg:gap-2">
                        <div class=" rounded-md flex items-center justify-end">
                          <div className="pt-1 pb-1">
                            <h1 className="text-xl ">2ND</h1>
                          </div>
                        </div>
                        <div class="  rounded-md flex items-center justify-center">
                          <Image src={rank2} />
                        </div>
                        <div class="  rounded-md flex items-center justify-start">
                          <div className="pt-1 pb-1">
                            <h1 className="text-base ">Nimi Martins</h1>
                          </div>
                        </div>
                        <div class="p-4  rounded-md flex items-center justify-center">
                          <div className="pt-1 pb-1">
                            <h1 className="text-base text-purple-700 ">800</h1>
                          </div>
                        </div>
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
