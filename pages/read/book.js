import React from "react";
import { useState, useEffect } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import Axios from "axios";
import Loader from "../../components/loader";
import ReadCard from "../../components/readcard";
import bookicn from "../../public/bookicn.svg";
import arrow from "../../public/arrow.svg";
import downarr from "../../public/downarr.svg";
import ben1 from "../../public/ben1.svg";
import uparr from "../../public/uparrow.svg";
import ok from "../../public/ok.svg";
import before from "../../public/before.svg";
import after from "../../public/after.svg";
import airpods from "../../public/airpods.svg";

import Image from "next/image";
import Link from "next/link";
const Book = () => {
  const [data, setData] = useState(false);
  const [arr, setArr] = useState(false);
  const [benarr, setBenarr] = useState(false);
  const [tick, setTick] = useState(false);
  function handleBenifits() {
    setBenarr(!benarr);
  }
  function handleClick() {
    setArr(!arr);
  }
  function handleTick() {
    setTick(!tick);
  }

  useEffect(() => {
    Axios.post("https://ideopedia-books.herokuapp.com/findpreBook", {
      Book_Name: "What’s The Future (WTF) And Why It’s Up to Us",
    }).then((data) => {
      setData(data.data);
    });
    console.log(data);
  }, []);
  console.log(arr);
  return (
    <div>
      {data ? (
        
        <div className="p-9">
          {console.log(data)}
          <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-1 lg:gap-2">
            <div class=" rounded-md flex items-center justify-center">
              <div>
                <Image src={data.Cover_image} width={400} height={350} />
              </div>
            </div>
            <div class=" rounded-md flex items-center justify-center">
              <span className="lg:text-xl sm:text-base text-gray-800">
                IDEOS OF
              </span>
            </div>
            <div class=" rounded-md flex items-center justify-center">
              <span className="lg:text-xl sm:text-base text-black">
                {data.Book_Name}
              </span>
            </div>
            <div class=" rounded-md flex items-center justify-center">
              <span className="text-base text-black">{data.Book_Author}</span>
            </div>
            <div class=" rounded-md flex items-center justify-center">
              <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-8">
                <div class=" rounded-md flex items-center justify-start">
                  <div className="cont flex">
                    <Image src={bookicn} />
                    <Link className="" href="/read/book">
                      Read
                    </Link>
                  </div>
                </div>
                <div class="  rounded-md flex items-center justify-end">
                  <div className="cont flex">
                    <Image src={airpods} />
                    <Link className="" href="/read/book">
                      Listen
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div class=" rounded-md flex items-center justify-center">
              <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-8">
                <div class=" rounded-md flex items-center justify-start">
                  <span className="text-base text-black">
                    {data.read_time} Minutes
                  </span>
                </div>
                <div class="  rounded-md flex items-center justify-end">
                  <span className="text-base text-black">
                    {data.listen_time} Minutes
                  </span>
                </div>
              </div>
            </div>
            <div class="p-4  rounded-md flex items-center justify-center"></div>
          </div>

          <div className="desc">
            <h1 className="text-xl new2 pl-2">Description</h1>
            <div className="p-4 text-xl text-gray-700 indent-12">
              {data.Book_Description}
            </div>
          </div>
          <div className="benifits">
            <h1 className="text-xl new2 pl-2">Benifits</h1>
            {data.benifits.map((val, n) => (
              <div className="p-3 bg-white ">
                <br />
                <div
                  className="text-base p-2 bg-white filter drop-shadow-md  text-green-700 cursor-pointer"
                  onClick={handleBenifits}
                >
                  {n + 1} . {val.name}
                </div>
                {benarr ? (
                  <div className="ben-con  bg-white filter drop-shadow-md">
                    <div class="p-2 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 pb-2">
                      <div class=" rounded-md flex items-center justify-center lg:justify-start">
                        <Image src={ben1} />
                      </div>
                      {val.benifits.map((dat) => (
                        <div class=" rounded-md flex items-center justify-start">
                          {dat} 
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  console.log("Error")
                )}
              </div>
            ))}
          </div>
          <div>
            <h1 className="text-xl new2 pt-4 pb-4 ">Time Saved</h1>
            <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
              <div class=" rounded-md flex items-center justify-center">
                <div className="w-6/12">
                  <Image src={before} />
                  <h1>What’s the Future</h1>
                  <div className="text-green-700">
                    {data.book_page} pages - {data.original_read_time} Hours
                  </div>
                </div>
              </div>
              <div class=" rounded-md flex items-center justify-center">
                <div className="w-6/12">
                  <Image src={arrow} />
                  <br />
                  <h1>
                    SAVE OVER{" "}
                    {(data.original_read_time * 60 - data.read_time) / 60} HOURS
                  </h1>
                </div>
              </div>
              <div class="  rounded-md flex items-center justify-center">
                <div className="w-6/12">
                  <Image src={after} />
                  <h1>IDEOS of What’s the Future</h1>
                  <div className="text-green-700">
                    {" "}
                    Key points finely distilled – {data.read_time} min
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div>
              <h1 className="text-xl new2 pl-2">About Author</h1>
              <div class="pt-9 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-0">
                <div class="pb-5 rounded-md flex items-center lg:justify-center justify-center">
                  <Image
                    src={data.Author_image}
                    width={100}
                    height={100}
                    className="authimg"
                  />
                </div>
                <div class="p-0 rounded-md flex items-center justify-start">
                  <div>{data.About_Author}</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <br />
            <br />
            <hr />
            <div class="pt-5 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-2">
              <div class=" rounded-md flex items-center justify-start">
                <h1 className="text-xl new2">Contents</h1>
              </div>
              <div class="rounded-md flex items-center justify-end">
                {arr ? (
                  <Image
                    src={uparr}
                    className="cursor-pointer"
                    onClick={handleClick}
                  />
                ) : (
                  <Image
                    src={downarr}
                    className="cursor-pointer"
                    onClick={handleClick}
                  />
                )}
              </div>
            </div>
            <br />
            {arr ? (
              <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 lg:gap-8 pb-9">
                {data.Ideos.map((idea, n) => (
                  <div
                    class="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-8 cursor-pointer"
                    onClick={handleTick}
                  >
                    <div class="p-4 rounded-md flex items-center justify-center">
                      <h1 className="text-sm lg:text-xl  ">
                        {"IDEO" + " " + n}
                      </h1>
                    </div>
                    <div class="p-4 rounded-md flex items-center justify-start">
                      <span className="text-sm lg:text-xl">{idea}</span>
                    </div>

                    {tick ? (
                      <div class="p-4 rounded-md flex items-center justify-center">
                        <Image src={ok} width={25} height={25} />
                      </div>
                    ) : (
                      console.log("error")
                    )}
                  </div>
                ))}
              </div>
            ) : (
              console.log("Error")
            )}
          </div>
        </div>
      ) : (
        <div className="load">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default Book;
