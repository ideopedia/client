import React from "react";
import SideNavbar from "../../components/sidebar";
import Card from "../../components/card";
import Link from "next/link";
import ProgressBar from "@ramonak/react-progress-bar";
import task from "../../public/task.svg";
import create from "../../public/create.svg";
import red from "../../public/red.svg";
import cht from "../../public/cht.svg";
import feed from "../../public/feedp.svg";
import shares from "../../public/shrs.svg";
import bronze from "../../public/bronze.svg";
import gold from "../../public/gold.svg";
import silver from "../../public/silver.svg";
import rank1 from "../../public/rank1.svg";
import rank2 from "../../public/rank2.svg";
import chatp from "../../public/chatp.svg";
import ReadBox from "../../components/ReadBox";
import ChatBox from "../../components/ChatBox";
import ShareBox from "../../components/ShareBox";
import FeedBox from "../../components/FeedBox";
import sharep from "../../public/sharep.svg";
import feedp from "../../public/feedp.svg";
import chart from "../../public/chart.svg";
import readp from "../../public/readp.svg";
import Image from "next/image";
const Dashboard = () => {
  return (
    <div className="p-4 verticalscroll">
      <div className="md:flex">
        <SideNavbar />
        <div className="md:pl-9 lg:w-9/12 md:w-9/12 sm:pl-1 sm:w-9/1">
          <div className="pt-9">
            <h1 className="text-xl new2 pl-2">Welcome Back</h1>
          </div>
          <div class="scrollmenu flex pt-9 ">
            <div className="pr-3 flex justify-center items-center">
              <Image src={silver} />
            </div>
            <div className="pr-3 pt-2 flex">
              <Link href="/mylib/completed" className="navtxt">
                <span className="text-xl cursor-pointer">
                  Silver Influencer
                </span>
              </Link>
            </div>
            <div className="pr-3 pt-2 flex">
              <Link href="/mylib/favourites" className="navtxt ">
                <span className="text-xl text-purple-700 cursor-pointer text-bold new2">
                  300 Points
                </span>
              </Link>
              <div className="pt-1 pl-2">
                <Link href="/dashboard/points" className="navtxt">
                  <span className="text-base text-gray-700 cursor-pointer text-bold new2">
                    Learn more
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <br />
          <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-1 lg:gap-2">
            <div class="rounded-md flex items-center justify-center">
              <ReadBox />
            </div>
            <div class=" rounded-md flex items-center justify-center">
              <ShareBox />
            </div>
            <div class="rounded-md flex items-center justify-center">
              <ChatBox />
            </div>
            <div class="rounded-md flex items-center justify-center">
              <FeedBox />
            </div>
          </div>
          <br />
          <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-2">
            <div class=" rounded-md  items-center justify-start">
              <div className="pt-3 pb-4">
                <h1 className="text-xl new2 pl-2">ACTIVITY</h1>
              </div>
              <Image src={chart} />
            </div>
            <div class="  rounded-md  items-center justify-start">
              <div className="pt-3 ">
                <h1 className="text-xl new2 pl-2">Leaderboard</h1>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-1 lg:gap-2">
                <div class=" rounded-md flex items-center justify-center">
                  <div className="pt-3 pb-1">
                    <h1 className="text-xl ">Most Points</h1>
                  </div>
                </div>
                <div class=" rounded-md flex items-center justify-center">
                  <div>
                    <div className="pl-3">
                      <Image src={rank1} />
                    </div>
                    <div className="pt-1 pb-1">
                      <h1 className="text-xl ">Sarah Martins</h1>
                    </div>
                    <div className="pl-6 pb-1">
                      <h1 className="text-xl text-purple-700">1000</h1>
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
  );
};

export default Dashboard;
