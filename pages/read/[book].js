import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Player } from "@lottiefiles/react-lottie-player";
import Axios from "axios";
import Loader from "../../components/loader";
import ReadCard from "../../components/readcard";
import bookicn from "../../public/bookicn.svg";
import arrow from "../../public/arrow.svg";
import cards from "../../public/cards.svg";
import downarr from "../../public/downarr.svg";
import ben1 from "../../public/ben1.svg";
import uparr from "../../public/uparrow.svg";
import ok from "../../public/ok.svg";
import before from "../../public/before.svg";
import beforetime from "../../public/timebefore.svg";
import time from "../../public/time.svg";
import arrowone from "../../public/arrowone.svg";
import arrowtwo from "../../public/arrowtwo.svg";
import aftertime from "../../public/timeafter.svg";
import airpods from "../../public/airpods.svg";
import DropdownComponent from "../../components/dropdown";
import Image from "next/image";
import Link from "next/link";
const Book = () => {
  const [data, setData] = useState(false);
  const [arr, setArr] = useState(false);
  const [benarr, setBenarr] = useState(false);
  const [tick, setTick] = useState(false);
  const router = useRouter();
  const { book } = router.query;
  var num = Number(book);
  function handleClick() {
    setArr(!arr);
  }
  useEffect(() => {
    Axios.post("http://localhost:3000/api/prebook/findPrebook", {
      id: num,
    }).then((data) => {
      setData(data.data);
    });
    console.log(data);
  }, []);
  // useEffect(() => {
  //   fetch("/api/prebook/findPrebook", {
  //     method: "POST",

  //     body: JSON.stringify({ id: 1 }),

  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //       console.log(data);
  //     });
  // }, []);

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
              <div class="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-8">
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
                <div class="  rounded-md flex items-center justify-end">
                  <div className="cont flex">
                    <Image src={cards} />
                    <Link className="" href="/read/book">
                      Cards
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div class=" rounded-md flex items-center justify-center">
              <div class="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-8">
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
                <div class="  rounded-md flex items-center justify-end">
                  <span className="text-base text-black"></span>
                </div>
              </div>
            </div>
            <div class="p-4  rounded-md flex items-center justify-center"></div>
          </div>

          <div className="desc">
            <h1 className="text-xl new2 pl-2">Description</h1>
            <div className="flex justify-center">
              <div className="p-4 text-xl text-gray-700 indent-12 lg:pr-9 pr-0">
                <Image src={before} height={200} width={200} />
                {data.Book_Description}
              </div>
            </div>
          </div>
          <br />
          <div className="desc">
            <h1 className="text-xl new2 pl-2">Description</h1>
            <div className="flex justify-center">
              <div className="p-4 text-xl text-gray-700 indent-12 lg:pr-9 pr-0">
                <Image
                  src={data.Author_image}
                  width={100}
                  height={100}
                  className="authimg"
                />
                {data.About_Author}
              </div>
            </div>
          </div>
          <br />
          <div>
            <h1 className="text-xl new2 pt-4 pb-4 ">Time Saved</h1>
            <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-5 gap-4">
              <div class=" rounded-md flex items-center justify-center">
                <div className="w-11/12">
                  <Image src={beforetime} />

                  <div className="bg-green-700 high">
                    <div className="text-white p-2">
                      Read {data.book_page} pages in {data.original_read_time}{" "}
                      Hours
                    </div>
                  </div>
                </div>
              </div>
              <div class=" rounded-md flex items-center justify-center">
                <div className="w-6/12">
                  <Image src={arrowone} />
                </div>
              </div>
              <div class=" rounded-md flex items-center justify-center">
                <div className="w-11/12">
                  <h1 className="pl-9">SAVE OVER </h1>
                  <Image src={time} />
                  <br />
                  <h1 className="pl-9">HOURS</h1>
                </div>
              </div>
              <div class=" rounded-md flex items-center justify-center">
                <div className="w-6/12">
                  <Image src={arrowtwo} />
                </div>
              </div>
              <div class="  rounded-md flex items-center justify-center">
                <div className="w-full">
                  <Image src={aftertime} />

                  <div className="bg-green-700 high">
                    <div className="text-white p-2">
                      Read finely distilled Ideos in {data.read_time} min
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
          </div>

          <div className="benifits">
            <h1 className="text-xl new2 pl-2">Benifits</h1>
            {data.benifits.map((val, n) => (
              <div className="pt-6 pb-6">
                <DropdownComponent
                  name={n + 1 + ". " + val.name}
                  image={val.image}
                  content={
                    val.benifits[0] +
                    "." +
                    val.benifits[1] +
                    "." +
                    val.benifits[1]
                  }
                />
                <br />
              </div>
            ))}
          </div>
          <br />
          <br />

          <div>
            <br />
            <br />
            <hr />
            <div class="pt-5 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-2">
              <div
                class=" rounded-md flex items-center justify-start"
                onClick={handleClick}
              >
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
              <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2 pb-9">
                {data.Ideos.map((idea, n) => (
                  <div
                    class="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-2 cursor-pointer bg-white drop-shadow-md"
                    onClick={function handleTick() {
                      router.push(`/read/summary/${idea.Ideo_id}`);
                    }}
                  >
                    <div class="p-4 rounded-md flex items-center justify-center">
                      <h1 className="text-sm lg:text-xl  ">
                        {"IDEO" + " " + n}
                      </h1>
                    </div>
                    <div class="p-4 rounded-md flex items-center justify-start">
                      <span className="text-sm lg:text-xl">{idea.name}</span>
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
          <br />
          <br />
          <br />
          <div>
            <div className="flex justify-center items-center">
              <span className="text-xl">
                {"The Book  " + data.Book_Name + "has been Acclaimed  by"}{" "}
              </span>
            </div>
            <br />
            <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-1 ">
              {data.Aclaimed.map((val) => (
                <div class="p-4 rounded-md flex items-center justify-center">
                  <Image src={val} width={300} height={300} />
                </div>
              ))}
            </div>
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