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
const Read = () => {
  return (
    <div>
      <div className="lg:flex">
        <SideNavbar />

        <div className="md:pl-9 lg:w-9/12 md:w-9/12 sm:pl-1 sm:w-9/12">
          <div className="flex">
            <div className="pl-5 cls pt-9 justify-start">
              <div className="flex">
                <Link href="#">
                  <span className="pr-3 text-xl cursor-pointer">Sort By</span>
                </Link>
                <Image src={arr} />
              </div>
            </div>
            <div className=" cls pt-9 top-4 right-4">
              <div className="flex">
                <Image src={srch} />

                <input className="int pl-7" type="text" placeholder="Search" />
              </div>
            </div>
          </div>
          <br />
          <div class="scrollmenu flex pt-9 ml-9">
            <div className="pr-9 flex">
              <Link href="/mylib/whishlist" className="navtxt">
                <span className="text-xl hover:text-green-700 cursor-pointer">
                  Author
                </span>
              </Link>
            </div>
            <div className="pr-9 flex">
              <Link href="/mylib/completed" className="navtxt">
                <span className="text-xl hover:text-green-700 cursor-pointer">
                  Tittle
                </span>
              </Link>
            </div>
            <div className="pr-9 flex">
              <Link href="/mylib/favourites" className="navtxt">
                <span className="text-xl hover:text-green-700 cursor-pointer">
                  Date
                </span>
              </Link>
            </div>
          </div>
          <br />

          <div className="justify-center items-center  pl-7">
            <Image src={nodata} />
            <h1 className="nod">Oops! No results Found</h1>
            <span className="subt"> Try using a different search term</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Read;
