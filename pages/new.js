import React from "react";
import SideNavbar from "../components/sidebar";
import Card from "../components/card";
import Link from "next/link";
import task from "../public/task.svg";
import create from "../public/create.svg";
import fav from "../public/fav.svg";
import srch from "../public/srch.svg";
import bmark from "../public/bmark.svg";
import Image from "next/image";
const New = () => {
  return (
    <div>
      <div className="lg:flex">
        <SideNavbar />

        <div className="md:pl-9 lg:w-9/12 md:w-9/12 sm:pl-1 sm:w-9/12">
          <br />
          <div class="scrollmenu flex pt-9 ml-9">
            <div className="pr-9 flex">
              <Image src={bmark} />
              <Link href="#contact" className="navtxt">
                <span className="text-xl hover:text-green-700 cursor-pointer">
                  Whishlist
                </span>
              </Link>
            </div>
            <div className="pr-9 flex">
              <Image src={task} />
              <Link href="#contact" className="navtxt">
                <span className="text-xl hover:text-green-700 cursor-pointer">
                  Completed
                </span>
              </Link>
            </div>
            <div className="pr-9 flex">
              <Image src={fav} />
              <Link href="#contact" className="navtxt">
                <span className="text-xl hover:text-green-700 cursor-pointer">
                  Favourites
                </span>
              </Link>
            </div>
            <div className="pr-9 flex">
              <Image src={create} />
              <Link href="#contact" className="navtxt">
                <span className="text-xl hover:text-green-700 cursor-pointer">
                  Notes & highlightes
                </span>
              </Link>
            </div>
            
          </div>
          <br />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default New;
