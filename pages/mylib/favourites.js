import React from "react";
import SideNavbar from "../../components/sidebar";
import Card from "../../components/card";
import Link from "next/link";
import task from "../../public/task.svg";
import create from "../../public/create.svg";
import arr from "../../public/downarr.svg";

import fav from "../../public/fav.svg";
import srch from "../../public/srch.svg";
import bmark from "../../public/bmark.svg";
import Image from "next/image";
import wtf from "../../public/wtf.svg";
import dmmt from "../../public/dmmt.svg";
const Favourites = () => {
  return (
    <div>
      <div className="lg:flex">
        <SideNavbar />

        <div className="md:pl-9 lg:w-9/12 md:w-9/12 sm:pl-1 sm:w-9/12">
          <br />
          <div class="scrollmenu flex pt-9 ml-9">
            <div className="pr-9 flex">
              <Image src={bmark} />
              <Link href="/mylib/whishlist" className="navtxt">
                <span className="text-xl hover:text-green-700 cursor-pointer ">
                  Whishlist
                </span>
              </Link>
            </div>
            <div className="pr-9 flex">
              <Image src={task} />
              <Link href="/mylib/completed" className="navtxt">
                <span className="text-xl hover:text-green-700 cursor-pointer">
                  Completed
                </span>
              </Link>
            </div>
            <div className="pr-9 flex">
              <Image src={fav} />
              <Link href="/mylib/favourites" className="navtxt">
                <span className="text-xl text-green-700 cursor-pointer">
                  Favourites
                </span>
              </Link>
            </div>
            <div className="pr-9 flex">
              <Image src={create} />
              <Link href="/mylib/notes" className="navtxt">
                <span className="text-xl hover:text-green-700 cursor-pointer">
                  Notes & highlightes
                </span>
              </Link>
            </div>
          </div>

          <br />
          <div className="flex drop-shadow-md bg-white pl-5 cls">
            <Link href="#">
              <span className="pr-4 cursor-pointer">Books</span>
            </Link>
            <Image src={arr} />
          </div>
          <Card image={wtf} name="What's The Future And Why It's Up To Us" author="Tim O'Reilly"/>
          <Card image={wtf} name="What's The Future And Why It's Up To Us" author="Tim O'Reilly"/>
          
          
          <Card image={dmmt} name="Don't Make me think" author="Steve Krug"/>
        </div>
      </div>
    </div>
  );
};

export default Favourites;
