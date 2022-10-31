import React from "react";
import SideNavbar from "../../components/sidebar";
import Card from "../../components/card";
import Link from "next/link";
import ProgressBar from "@ramonak/react-progress-bar";
import task from "../../public/task.svg";
import create from "../../public/create.svg";
import fav from "../../public/fav.svg";
import arr from "../../public/leftarr.svg";
import srch from "../../public/srch.svg";
import silver from "../../public/silver.svg";
import chatp from "../../public/chatp.svg";
import sharep from "../../public/sharep.svg";
import feedp from "../../public/feedp.svg";
import readp from "../../public/readp.svg";
import Image from "next/image";
const Dashboard = () => {
  return (
    <div>
      <div className="lg:flex">
        <SideNavbar />

        <div className="md:pl-9 lg:w-9/12 md:w-9/12 sm:pl-1 sm:w-9/12">
          <div className="flex">
            <div className="pl-5 cls pt-9 justify-start">
              <div className="flex ">
                <div className="larr">
                  <Image src={arr} />
                </div>
              </div>
            </div>
            <div className=" cls pt-9 top-4 right-4">
              <div className="flex">
                <Image src={srch} />

                <input className="int pl-9" type="text" placeholder="Search" />
              </div>
            </div>
          </div>
          <br />
          <div class="scrollmenu flex pt-9 ml-9">
            <div className="pr-5 flex">
              <Image src={silver} />
            </div>
            <div className="pr-5 pt-2 flex">
              <Link href="/mylib/completed" className="navtxt">
                <span className="text-xl cursor-pointer">
                  Silver Influencer
                </span>
              </Link>
            </div>
            <div className="pr-5 pt-2 flex">
              <Link href="/mylib/favourites" className="navtxt">
                <span className="text-xl text-purple-700 cursor-pointer text-bold new2">
                  300 Points
                </span>
              </Link>
            </div>
          </div>
          <br />
          <h1 className="text-xl new2 pl-2">Progress</h1>
          <br />
          <br />
          <ProgressBar completed={50} customLabel=" "/>
          <br />
          <h1 className="text-xl new2 pl-2 pt-5">How to Earn Points ?</h1>
          <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-1 lg:gap-2">
            <div class="p-4 rounded-md flex items-center justify-center">
              <Image src={readp} />
            </div>
            <div class="p-4  rounded-md flex items-center justify-center">
              <Image src={sharep} />
            </div>
            <div class="p-4  rounded-md flex items-center justify-center">
              <Image src={chatp} />
            </div>
            <div class="p-4  rounded-md flex items-center justify-center">
              <Image src={feedp} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
