import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Disclosure } from "@headlessui/react";
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
  

  useEffect(() => {
    Axios.post("https://ideopedia-books.herokuapp.com/listBooks", {
      Password: "Ideopedia@001",
    })
      
      .then((data) => {
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
        <div className="p-7 w-full  bg-white z-20 relative top-0 -left-96 md:left-0 md:w-60  peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
          <div className="flex flex-col justify-start item-center">
            <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-1 lg:gap-1">
              <div class=" rounded-md flex items-center justify-start w-12 h-12">
                <Image src={dashc} />
              </div>
              <div class=" flex items-center justify-start w-20 h-12">
                <Link href="/" className="cursor-pointer">
                  <Image src={logo} />
                </Link>
              </div>
            </div>
            <br />
            <br />
            <div className=" my-4 border-b border-gray-100 pb-4">
              <div className="flex  mb-2 ml-2  justify-center items-center gap-4 pl-5  group cursor-pointer m-auto">
                <CircularProgressbarWithChildren
                  value={66}
                  styles={buildStyles({
                    pathColor: "#7F5AF0",
                    trailColor: "#fff",
                  })}
                >
                  {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                  <div className="m-2 inne ">
                    <Image
                      src={prime}
                      className="justify-center items-center  imgr"
                    />
                  </div>
                </CircularProgressbarWithChildren>
              </div>
                <br />
              <div className="flex  mb-2 ml-2  justify-center items-center gap-4 pl-5  group cursor-pointer m-auto">
                <h3 className="text-sm font-semibold">65%</h3>
              </div>
              <br />
              <div className="flex  mb-2 ml-2  justify-center items-center gap-4 pl-5  group cursor-pointer m-auto">
                <Image src={edit} />
                <h3 className="text-sm foottext font-semibold ">
                  Edit Profile
                </h3>
              </div>
              <br />
              <div className="flex  mb-2 ml-2 justify-center items-center  pl-5 group cursor-pointer m-auto">
                <h3 className=" pl-2 text-base  justify-center items-center text-gray-800 group-hover:text-green-700 font-semibold ">
                  Good Morning ,
                </h3>
              </div>
              <br />
              <div className="flex  mb-2 ml-2 justify-center items-center  pl-5 group cursor-pointer m-auto">
                <h3 className=" pl-2 text-base  justify-center items-center text-gray-800 group-hover:text-green-700 font-semibold ">
                  Shri . Suresh Prabhu
                </h3>
              </div>
              <br />
              <br />
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
