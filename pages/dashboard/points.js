import React from "react";
import SideNavbar from "../../components/sidebar";
import Card from "../../components/card";
import Link from "next/link";
import ProgressBar from "@ramonak/react-progress-bar";
import task from "../../public/task.svg";
import create from "../../public/create.svg";
import fav from "../../public/fav.svg"; 
import darr from "../../public/downarr.svg";
import arr from "../../public/leftarr.svg";
import srch from "../../public/srch.svg";
import bronze from "../../public/bronze.svg";
import gold from "../../public/gold.svg";
import silver from "../../public/silver.svg";
import chatp from "../../public/chatp.svg";
import sharep from "../../public/sharep.svg";
import feedp from "../../public/feedp.svg";
import readp from "../../public/readp.svg";
import Image from "next/image";
const Points = () => {
  return (
    <div>
      <div className="lg:flex">
        <SideNavbar />

        <div className="md:pl-9 lg:w-9/12 md:w-9/12 sm:pl-1 sm:w-9/12">
          <div className="flex">
            <div className="pl-5 cls pt-9 justify-start">
              <div className="flex ">
                <div className="larr cursor-pointer ">
                  <Link href="/dashboard"><Image src={arr} /></Link>
                </div>
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
          <div>
            <div class="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-1 lg:gap-2">
              <div class="rounded-md flex items-center justify-start">
                <Image src={bronze} />
              </div>
              <div class="p-4  rounded-md flex items-center justify-center">
                <Image src={silver} />
              </div>
              <div class="p-4  rounded-md flex items-center justify-end">
                <Image src={gold} />
              </div>
            </div>

            <ProgressBar completed={20} customLabel=" " />
          </div>
          <br />
          <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-1 lg:gap-2">
            <div class="p-4 rounded-md flex items-center justify-start">
              <h1 className="text-xl new2 pl-2">History</h1>
            </div>
            <div class="p-4  rounded-md flex items-center justify-end">
              <div className="flex">
                <span className="pr-3 text-xl cursor-pointer">Sort By</span>
                <div className="flex mt-1">
                  <div className="pr-3 text-base">
                    <Link href="#">Book</Link>
                  </div>

                  <div className="mb-2">
                    <Image src={darr} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div class="grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 gap-1 lg:gap-1">
            <div class="p-4 rounded-md flex items-center justify-start">
              <Image src={srch} />
            </div>
            <div class="p-4  rounded-md flex items-center justify-start">
              <span>Oct 13, 2022</span>
            </div>
            <div class="p-4  rounded-md flex items-center justify-start">
              <span>What's The Future And Why It's Up To Us</span>
            </div>
            <div class="p-4  rounded-md flex items-center justify-center">
              <span>Completed Book</span>
            </div>
            <div class="p-4  rounded-md flex items-center justify-start">
              <span className="pointc">20 Points</span>
            </div>
          </div>
          <div class="grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 gap-1 lg:gap-1">
            <div class="p-4 rounded-md flex items-center justify-start">
              <Image src={srch} />
            </div>
            <div class="p-4  rounded-md flex items-center justify-start">
              <span>Oct 13, 2022</span>
            </div>
            <div class="p-4  rounded-md flex items-center justify-start">
              <span>What's The Future And Why It's Up To Us</span>
            </div>
            <div class="p-4  rounded-md flex items-center justify-center">
              <span>Completed Book</span>
            </div>
            <div class="p-4  rounded-md flex items-center justify-start">
              <span className="pointc">20 Points</span>
            </div>
          </div>
          <div class="grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 gap-1 lg:gap-1">
            <div class="p-4 rounded-md flex items-center justify-start">
              <Image src={srch} />
            </div>
            <div class="p-4  rounded-md flex items-center justify-start">
              <span>Oct 13, 2022</span>
            </div>
            <div class="p-4  rounded-md flex items-center justify-start">
              <span>What's The Future And Why It's Up To Us</span>
            </div>
            <div class="p-4  rounded-md flex items-center justify-center">
              <span>Completed Book</span>
            </div>
            <div class="p-4  rounded-md flex items-center justify-start">
              <span className="pointc">20 Points</span>
            </div>
          </div>
          <div class="grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 gap-1 lg:gap-1">
            <div class="p-4 rounded-md flex items-center justify-start">
              <Image src={srch} />
            </div>
            <div class="p-4  rounded-md flex items-center justify-start">
              <span>Oct 13, 2022</span>
            </div>
            <div class="p-4  rounded-md flex items-center justify-start">
              <span>What's The Future And Why It's Up To Us</span>
            </div>
            <div class="p-4  rounded-md flex items-center justify-center">
              <span>Completed Book</span>
            </div>
            <div class="p-4  rounded-md flex items-center justify-start">
              <span className="pointc">20 Points</span>
            </div>
          </div>

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

export default Points;
