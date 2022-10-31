import React from "react";
import SideNavbar from "../../components/sidebar";
import Card from "../../components/card";
import Link from "next/link";
import task from "../../public/task.svg";
import create from "../../public/create.svg";
import fav from "../../public/fav.svg";
import arr from "../../public/downarr.svg";
import srch from "../../public/srch.svg";
import bmark from "../../public/bmark.svg";
import nodata from "../../public/nodata.svg";
import Image from "next/image";

const Chat = () => {
  return (
    <div>
      <div className="lg:flex">
        <SideNavbar />

        <div className="md:pl-9 lg:w-9/12 md:w-9/12 sm:pl-1 sm:w-9/12">
            <Image src={nodata} />
        </div>
      </div>
    </div>
  );
};

export default Chat;
