import React from "react";
import SideNavbar from "../../components/sidebar";
import Card from "../../components/card";
import Link from "next/link";
import { useState } from "react";
import task from "../../public/task.svg";
import arr from "../../public/downarr.svg";
import Modal from "../../components/notesModal";
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
  const [arr, setArr] = useState(false);
  const [nts, setNts] = useState(false);
  function handleDown() {
    setArr(!arr);
  }
  function handleNotes() {
    setNts(!nts);
  }
  return (
    <div>
      <div className="md:flex">
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
                <div>
                  <span className="text-xl text-green-700 cursor-pointer">
                    Notes & highlightes
                  </span>
                  <hr className="w-8/12 nhr" />
                </div>
              </Link>
            </div>
          </div>

          <br />
          <div className="p-4 flex justify-start items-center">
            <div className="flex cls">
              <div className="inline-flex bg-white border rounded-md border-none drop-shadow">
                <a
                  href="#"
                  className="px-4 py-2 text-sm text-gray-600 hover:text-gray-700 hover:bg-gray-50 rounded-l-md"
                >
                  Notes
                </a>

                <div className="relative">
                  <button
                    onClick={handleNotes}
                    type="button"
                    className="inline-flex items-center justify-center h-full px-2 text-gray-600 border-l border-gray-100 hover:text-gray-700 rounded-r-md hover:bg-gray-50"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {nts ? (
                    <div className="absolute z-10 w-56 mt-4 origin-top-right bg-white border border-gray-100 rounded-md shadow-lg">
                      <div className="p-2">
                        <a
                          href="#"
                          className="block  py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                        >
                          Highlightes
                        </a>
                        <a
                          href="#"
                          className="block  py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                        >
                          Notes
                        </a>
                      </div>
                    </div>
                  ) : (
                    console.log("")
                  )}
                </div>
              </div>
            </div>
            <div className="flex cls">
              <Image src={note} />
              <Link href="#">
                <span className="pl-4 cursor-pointer">Books </span>
              </Link>
            </div>
            <div className="flex cls">
              <div className="inline-flex bg-white border rounded-md border-none drop-shadow">
                <a
                  href="#"
                  className="px-4 py-2 text-sm text-gray-600 hover:text-gray-700 hover:bg-gray-50 rounded-l-md"
                >
                  SortBy
                </a>

                <div className="relative">
                  <button
                    onClick={handleDown}
                    type="button"
                    className="inline-flex items-center justify-center h-full px-2 text-gray-600 border-l border-gray-100 hover:text-gray-700 rounded-r-md hover:bg-gray-50"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {arr ? (
                    <div className="absolute z-10 w-56 mt-4 origin-top-right bg-white border border-gray-100 rounded-md shadow-lg">
                      <div className="p-2">
                        <a
                          href="#"
                          className="block  py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                        >
                          Author
                        </a>
                        <a
                          href="#"
                          className="block  py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                        >
                          Tittle
                        </a>
                      </div>
                    </div>
                  ) : (
                    console.log("")
                  )}
                </div>
              </div>
            </div>
          </div>
          <br />
          <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
            <div class=" rounded-md flex items-center justify-center">
              <span className="text-2xl">
                What’s The Future And Why It’s Up To Us
              </span>
            </div>
            <div class="rounded-md flex items-center justify-center">
              <div className="p-4 ">
                <input
                  class="form-check-input appearance-none h-4 w-4 border border-black rounded-sm bg-white checked:bg-black checked:border-black focus:outline-none   transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
              </div>
              <div className="p-4">
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
                    
          <div className="pl-9 flex justify-start items-start">
            <span>Tim O’Reilly</span>
          </div>
          

          <Modal />
        </div>
      </div>
    </div>
  );
};

export default Notes;
