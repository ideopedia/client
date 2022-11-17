import React from "react";
import Axios from "axios";
import { useState, useEffect } from "react";
import SideNavbar from "../../components/sidebar";
import Card from "../../components/card";
import Link from "next/link";

import ReadCard from "../../components/readcard";
import task from "../../public/task.svg";
import create from "../../public/create.svg";
import fav from "../../public/fav.svg";
import arr from "../../public/downarr.svg";
import wtf from "../../public/wtf.svg";
import recomend from "../../public/recomend.svg";
import dmmt from "../../public/dmmt.svg";
import srch from "../../public/srch.svg";
import bmark from "../../public/bmark.svg";

import Image from "next/image";
const New = () => {
  const [data, setData] = useState(false);
  const [Recommended, setRecommended] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await Axios(
        "http://localhost:3000/api/bookCard/listBookcard",
        {
          Password: "Ideopedia@001",
        }
      );

      setData(result.data);
    };

    fetchData();
    console.log(data);
  }, []);

  return (
    <div>
      {data ? (
        <div className="md:flex">
          <SideNavbar />

          <div className="md:pl-9 lg:w-9/12 md:w-9/12 sm:pl-1 sm:w-9/12">
            <br />
            <div class="scrollmenu flex pt-9 ml-9">
              <div className="pr-9 flex">
                <Image src={task} />
                <Link href="/mylib/completed/1212" className="navtxt">
                  <span className="text-xl hover:text-green-500 cursor-pointer pl-2">
                    Completed
                  </span>
                </Link>
              </div>
              <div className="pr-9 flex">
                <Image src={fav} />
                <Link href="/mylib/favourites/1212" className="navtxt">
                  <span className="text-xl hover:text-green-500 cursor-pointer pl-2">
                    Favourites
                  </span>
                </Link>
              </div>
              <div className="pr-9 flex">
                <Image src={create} />
                <Link href="/mylib/notes/1212" className="navtxt">
                  <span className="text-xl hover:text-green-500 cursor-pointer pl-2">
                    Notes & highlightes
                  </span>
                </Link>
              </div>
            </div>
            <br />
            
            <div>
              <div className="p-4">
                <span className="text-xl text-black text-bold">
                  Launch of the Month
                </span>
              </div>
              <br />
              <ReadCard
                image={data[0].Cover_image}
                name={data[0].Book_Name.toUpperCase()}
                author={data[0].Book_Author}
                read={data[0].read_time}
                listen={data[0].listen_time}
              />

              <br />
              <br />
              <div className="p-4">
                <span className="text-xl text-black text-bold">
                  Recent Books
                </span>
              </div>
              <br />
              <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-1 ">
                {data.map((val) => (
                  <div class="rounded-md flex items-start justify-start">
                    <ReadCard
                      image={val.Cover_image}
                      name={val.Book_Name.toUpperCase()}
                      author={val.Book_Author}
                      read={val.read_time}
                      listen={val.listen_time}
                    />
                  </div>
                ))}
              </div>
              <div className="p-4">
                <span className="text-xl text-black text-bold">
                  Recommended For You
                </span>
              </div>
              <div>
                {Recommended ? (
                  <ReadCard
                    image={data[0].Cover_image}
                    name={data[0].Book_Name.toUpperCase()}
                    author={data[0].Book_Author}
                    read={data[0].read_time}
                    listen={data[0].listen_time}
                  />
                ) : (
                  <div className="pb-10">
                    <div className="flex justify-center items-center">
                      <Image src={recomend} />
                    </div>
                    <br />
                    <div className="flex justify-center items-center">
                      <span className="text-md">
                        Complete Reading A Book To Get Personalized
                        Recommendations{" "}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        console.log("false")
      )}
    </div>
  );
};

export default New;
