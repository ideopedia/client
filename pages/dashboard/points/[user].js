import React from "react";
import SideNavbar from "../../../components/sidebar";
import Card from "../../../components/card";
import Link from "next/link";
import ProgressBar from "@ramonak/react-progress-bar";
import feedbackhis from "../../../public/feedbackhis.svg";
import completedhis from "../../../public/completedhis.svg";
import fav from "../../../public/fav.svg";
import Loader from "../../../components/loader";
import darr from "../../../public/downarr.svg";
import arr from "../../../public/leftarr.svg";
import srch from "../../../public/srch.svg";
import bronze from "../../../public/bronze.svg";
import gold from "../../../public/gold.svg";
import silver from "../../../public/silver.svg";
import chatp from "../../../public/chatp.svg";
import sharep from "../../../public/sharep.svg";
import feedp from "../../../public/feedp.svg";
import readp from "../../../public/readp.svg";
import { useState, useEffect } from "react";
import Axios from "axios";
import { useRouter } from "next/router";
import Image from "next/image";
const Points = () => {
  const router = useRouter();
  const favo = router.query;
  console.log(favo.user);
  const [type, setType] = useState("Bronze Influencer");
  const [data, setData] = useState(false);
  const [comp, setComp] = useState(false);
  useEffect(() => {
    Axios.post("http://localhost:3000/api/UserDashboard/findUser", {
      User_Id: favo.user,
    }).then((data) => {
      setData(data.data);
    });
  }, []);
  useEffect(() => {
    Axios.post("http://localhost:3000/api/UserCompleted/listCompleted", {
      User_Id: favo.user,
      percent: 100,
    }).then((data) => {
      setComp(data.data);
    });
  }, []);
  return (
    <div>
      {data ? (
        <div>
          <div className="md:flex">
            <SideNavbar
              per={data[0].Profile_percent}
              image={data[0].Image}
              name={data[0].Name}
              u_id={data[0].User_Id}
            />

            <div className="md:pl-9 lg:w-9/12 md:w-9/12 sm:pl-1 sm:w-9/12">
              <div className="flex">
                <div className="pl-5 cls pt-9 justify-start">
                  <div className="flex ">
                    <div className="larr cursor-pointer ">
                      <Link href={`/dashboard/${data[0].User_Id}`}>
                        <Image src={arr} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <div class="scrollmenu flex pt-9 ml-9">
                <div className="pr-5 flex">
                  {type === "Bronze Influencer" ? (
                    <Image src={bronze} />
                  ) : (
                    <Image src={silver} />
                  )}
                </div>
                <div className="pr-5 pt-2 flex">
                  <Link href="/mylib/completed" className="navtxt">
                    <span className="text-xl cursor-pointer">{type}</span>
                  </Link>
                </div>
                <div className="pr-5 pt-2 flex">
                  <Link href="/mylib/favourites" className="navtxt">
                    <span className="text-xl text-purple-700 cursor-pointer text-bold new2">
                      {20 * data[0].Read +
                        10 * data[0].Share +
                        5 * data[0].Chat +
                        5 * data[0].Feed}{" "}
                      Points
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

                <ProgressBar
                  completed={
                    20 * data[0].Read +
                    10 * data[0].Share +
                    5 * data[0].Chat +
                    5 * data[0].Feed
                  }
                  customLabel=" "
                />
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
                        <Link href="">Book</Link>
                      </div>

                      <div className="mb-2">
                        <Image src={darr} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              {comp
                ? comp.map((val) => (
                    <div class="grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 gap-1 lg:gap-1">
                      {console.log(comp)}
                      <div class="p-4 rounded-md flex items-center justify-start">
                        <Image src={completedhis} />
                      </div>
                      <div class="p-4  rounded-md flex items-center justify-start">
                        <span>{val.date}</span>
                      </div>
                      <div class="p-4  rounded-md flex items-center justify-start">
                        <span>{val.name}</span>
                      </div>
                      <div class="p-4  rounded-md flex items-center justify-center">
                        <span>Completed Book</span>
                      </div>
                      <div class="p-4  rounded-md flex items-center justify-start">
                        <span className="pointc">20 Points</span>
                      </div>
                    </div>
                  ))
                : console.log("no history")}

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
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Points;
