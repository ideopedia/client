import React from "react";
import SideNavbar from "../../components/sidebar";
import Card from "../../components/card";
import Link from "next/link";
import Navbar from "../../components/navbar";
import ProgressBar from "@ramonak/react-progress-bar";
import feedbackhis from "../../public/feedbackhis.svg";
import completedhis from "../../public/completedhis.svg";
import fav from "../../public/fav.svg";
import Loader from "../../components/loader";
import drop from "../../public/dropdownlogo.svg";
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
    Axios.post("/api/UserDashboard/findUser", {
      User_Id: favo.user,
    }).then((data) => {
      setData(data.data);
    });
  }, []);
  useEffect(() => {
    Axios.post("/api/UserCompleted/listCompleted", {
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
          <Navbar isLogedIn={true} userid={data[0].User_Id} />
          <div className="p-2">
            {/* <SideNavbar
              per={data[0].Profile_percent}
              image={data[0].Image}
              name={data[0].Name}
              u_id={data[0].User_Id}
            /> */}

            <div className="md:pl-9 lg:w-11/12 md:w-12/12 sm:pl-1 sm:w-12/12">
              <div className="flex pt-9 sm:ml-9 ml-4">
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
              <br />
              <br />
              <h1 className="text-xl new2 ">Progress</h1>
              <div className="medalAndProg ml-[2rem] mt-[2rem] mx-[3rem]">
                <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-1 lg:gap-2 ">
                  <div className="rounded-md flex items-center">
                    <Image src={bronze} />
                  </div>
                  <div className="p-4  rounded-md flex items-center justify-center">
                    <Image src={silver} />
                  </div>
                  <div className="p-0  rounded-md flex items-center justify-end">
                    <Image src={gold} />
                  </div>
                </div>
                <div className="">
                  <ProgressBar
                    height="10"
                    completed={
                      20 * data[0].Read +
                      10 * data[0].Share +
                      5 * data[0].Chat +
                      5 * data[0].Feed
                    }
                    customLabel=" "
                  />
                </div>
              </div>
              <br />
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-1 lg:gap-2">
                <div className=" rounded-md flex items-center justify-start">
                  <h1 className="text-xl new2">History</h1>
                </div>
                <div className="  rounded-md flex items-center lg:justify-end justify-start">
                  <div className="flex">
                    <div className="dropdown">
                      <button
                        className="dropbtn flex items-center justify-center"
                        
                      >
                        Sort By{" "}
                        <div className="mt-2 ml-2">
                          <Image src={drop} />
                        </div>
                      </button>
                      <div className="dropdown-content relative ">
                        <Link href={`/points/${favo.user}`}  >Completed</Link>
                        <Link href={`/points/${favo.user}`}>Shared</Link>
                        <Link href={`/points/${favo.user}`}>Feed back</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              {comp
                ? comp.map((val,n) => (
                    <div className="flex justify-between items-center mb-[3rem] mr-[0.5rem]" key={n}>
                      {console.log(comp)}
                      <div className="flex justify-between w-[10rem] items-center unWantMob">
                        <Image src={completedhis} />
                        <span>{val.date}</span>
                      </div>
                      <span className="bookDet">{val.name}</span>
                      <span className="bookDet">Completed Book</span>
                      <span className="pointc">20 Points</span>
                    </div>
                  ))
                : console.log("no history")}

              <h1 className="text-xl new2 pt-5">How to Earn Points ?</h1>
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-1 lg:gap-2">
                <div className="p-4 rounded-md flex items-center">
                  <Image src={readp} />
                </div>
                <div className="p-4  rounded-md flex items-center">
                  <Image src={sharep} />
                </div>
                <div className="p-4  rounded-md flex items-center">
                  <Image src={chatp} />
                </div>
                <div className="p-4  rounded-md flex items-center">
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
