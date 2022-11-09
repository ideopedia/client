import React from "react";
import SideNavbar from "../../components/sidebar";
import Card from "../../components/card";
import Link from "next/link";
import task from "../../public/task.svg";
import arr from "../../public/downarr.svg";

import create from "../../public/create.svg";
import fav from "../../public/fav.svg";
import note from "../../public/note.svg";
import share from "../../public/share.svg";
import dele from "../../public/delete.svg";
import checked from "../../public/checked.svg";
import unchecked from "../../public/unchecked.svg";
import dropd from "../../public/dropd.svg";

import Image from "next/image";
import wtf from "../../public/wtf.svg";
import dmmt from "../../public/dmmt.svg";
const Notes = () => {
  return (
    <div>
      <div className="lg:flex">
        <SideNavbar />

        <div className="md:pl-9 lg:w-9/12 md:w-9/12 sm:pl-1 sm:w-9/12">
          <br />
          <div class="scrollmenu flex pt-9 ml-9">
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
                <span className="text-xl hover:text-green-700 cursor-pointer">
                  Favourites
                </span>
              </Link>
            </div>
            <div className="pr-9 flex">
              <Image src={create} />
              <Link href="/mylib/notes" className="navtxt">
                <span className="text-xl text-green-700 cursor-pointer">
                  Notes & highlightes
                </span>
              </Link>
            </div>
          </div>

          <br />
          <div className="p-4 flex justify-start items-center">
            <div className="flex  pl-5 cls pr-5">
              <Link href="#">
                <span className="pr-4 cursor-pointer">Notes</span>
              </Link>
              <Image src={arr} />
            </div>
            <div className="flex cls">
              <Image src={note} />
              <Link href="#">
                <span className="pl-4 cursor-pointer">Books</span>
              </Link>
            </div>
            <div className="flex cls">
              <Link href="#">
                <span className="pl-4 pr-4 cursor-pointer bg-white drop-shadow">
                  SortBy
                </span>
              </Link>
            </div>
          </div>
          <br />
          <div class="p-4 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
            <div class=" rounded-md flex items-center justify-center">
              <span className="text-2xl">
                What’s The Future And Why It’s Up To Us
              </span>
            </div>
            <div class="rounded-md flex items-center justify-center">
              <div className="p-4 ">
                <Image src={checked} />
              </div>
              <div className="p-4 ">
                <Image src={dele} />
              </div>
              <div className="p-4 ">
                <Image src={share} />
              </div>
              <div className="p-4 ">
                <Image src={dropd} />
              </div>
            </div>
          </div>
          <br />
          <div className="pl-9 flex justify-start items-start">
            <span>Tim O’Reilly</span>
          </div>
          <Card
            image={wtf}
            name="What's The Future And Why It's Up To Us"
            author="Tim O'Reilly"
          />

          <Card
            image={wtf}
            name="What's The Future And Why It's Up To Us"
            author="Tim O'Reilly"
          />
          <Card image={dmmt} name="Don't Make me think" author="Steve Krug" />
        </div>
      </div>
    </div>
  );
};

export default Notes;
