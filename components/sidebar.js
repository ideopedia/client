import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Disclosure } from "@headlessui/react";
import Profile from "../pages/dashboard/profile";
import { useRouter } from "next/router";
import {
  MdOutlineSpaceDashboard,
  MdOutlineAnalytics,
  MdOutlineIntegrationInstructions,
  MdOutlineMoreHoriz,
  MdOutlineSettings,
  MdOutlineLogout,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaRegComments } from "react-icons/fa";
import { BiMessageSquareDots } from "react-icons/bi";
import Image from "next/image";
import { useState, useEffect } from "react";
//import {useHistory} from "react-router-dom"
import Axios from "axios";
import question from "../public/question.svg";
import feed from "../public/feed.svg";
import dash from "../public/dash.svg";
import chat from "../public/chat.svg";
import lib from "../public/lib.svg";
import read from "../public/read.svg";
import prime from "../public/prime.svg";
import logo from "../public/logo.svg";
import Link from "next/link";
import dashc from "../public/dashc.svg";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import edit from "../public/Edit.svg";
function SideNavbar() {
  const [data, setData] = useState([]);
  const router = useRouter()

  useEffect(() => {
    Axios.post("https://ideopedia-books.herokuapp.com/listBooks", {
      Password: "Ideopedia@001",
    }).then((data) => {
      setData(data.data);
    });
    console.log(data);
  }, []);

  return (
    <div>
      <Disclosure as="nav" className="h-10">
        <Disclosure.Button className="absolute top-4 left-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-600   focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
          <GiHamburgerMenu
            className="block md:hidden h-6 w-6"
            aria-hidden="true"
          />
        </Disclosure.Button>
        <div className=" p-2 w-full  bg-white z-20 relative top-0 -left-96 md:left-0 md:w-60  peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
          <div className="flex flex-col justify-start item-center">
            <div className="flex">
              <div class=" rounded-md flex items-center justify-start lg:hidden ">
                <Image src={dashc} />
              </div>
              <div class=" flex items-center justify- w-auto h-auto pl-4 pr-4 pb-4">
                <Link href="/" className="cursor-pointer">
                  <Image src={logo} width={150} height={100} />
                </Link>
              </div>
            </div>

            <div className="p-4  border-b border-gray-100 pb-4">
              <div className="flex  justify-center items-center pl-8 pr-8  group cursor-pointer m-auto ">
                <CircularProgressbarWithChildren
                  value={80}
                  styles={buildStyles({
                    pathColor: "#2CB67D",
                    trailColor: "#fff",
                  })}
                >
                  {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                  <div className="mr-2 inne ml-2 mt-3 mb-1">
                    <Image
                      src={prime}
                      className="justify-center items-center  imgr"
                    />
                  </div>
                </CircularProgressbarWithChildren>
              </div>

              <div className="flex justify-center items-center z-10 -mt-1 ml-3 ">
                <div className="flex justify-center items-center  group cursor-pointer pb-2 bg-[#2CB67D] w-3/12 h-5 rounded-md  ">
                  <h3 className="flex text-[12px] font-semibold pt-2 text-white">
                    80%
                  </h3>
                </div>
              </div>

              <div className="flex   justify-center items-center gap-4 pl-5  group cursor-pointer pt-4 pb-4" onClick={function handleRoute(){
                router.push("/dashboard/profile")
              }} >
                <h3 className="text-sm foottext font-semibold ">
                  Complete your Profile
                </h3>
              </div>
              <div className="flex   justify-center items-center gap-1 group cursor-pointer pb-4">
                <h3 className="text-sm  font-semibold ">
                  Good Morning,Mr.Suresh Prabhu
                </h3>
              </div>

              
              <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-1 lg:gap-1">
                <div class=" rounded-md flex items-center justify-center  cursor-pointer  hover:border hover:border-purple-900">
                  <Link href="/dashboard">
                    <Image src={dash} />
                  </Link>
                </div>
                <div class=" rounded-md flex items-center justify-center  cursor-pointer hover:border hover:border-purple-900 ">
                  <Link href="/read">
                    <Image src={read} />
                  </Link>
                </div>
                <div class=" rounded-md flex items-center justify-center  cursor-pointer hover:border hover:border-purple-900 ">
                  <Link href="/mylib">
                    <Image src={lib} />
                  </Link>
                </div>
                <div class="  rounded-md flex items-center justify-center cursor-pointer hover:border hover:border-purple-900">
                  <Link href="chat">
                    <Image src={chat} />
                  </Link>
                </div>
              </div>
            </div>
            {/* setting  */}

            <div className=" my-4 border-b border-gray-100 pb-4">
              <div className="flex mb-2 justify-start items-center gap-4 pl-5  cursor-pointer  m-auto">
                <Image src={question} />
                <h3 className="text-base dashtext  font-semibold ">
                  Help Center
                </h3>
              </div>
              <br />
              <div className="flex mb-2 justify-start items-center gap-4 pl-5  cursor-pointer  m-auto">
                <Image src={feed} />
                <h3 className="text-base dashtext font-semibold ">
                  Send Feedback
                </h3>
              </div>
            </div>
            {/* logout */}
            <div className=" my-4">
              <div className="flex mb-2 justify-center items-center gap-4 pl-4 bg-green-700  hover:bg-green-750 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <h3 className="text-base text-white group-hover:text-white font-semibold ">
                  <Link href="/">Logout</Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </Disclosure>
    </div>
  );
}

export default SideNavbar;
