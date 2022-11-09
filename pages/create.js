import React from "react";
import SideNavbar from "../../components/sidebar";
import Card from "../../components/card";
import ReadCard from "../../components/readcard";
import Link from "next/link";
import task from "../../public/task.svg";
import create from "../../public/create.svg";
import fav from "../../public/fav.svg";
import Axios from "axios";
import { useState, useEffect } from "react";
import wtf from "../../public/wtf.svg";
import arr from "../../public/downarr.svg";
import srch from "../../public/srch.svg";
import bmark from "../../public/bmark.svg";
import nodata from "../../public/nodata.svg";
import Loader from "../../components/loader";
import Image from "next/image";

const Read = () => {
  const [data, setData] = useState(false);
  const [inpt, setInpt] = useState("");
  useEffect(() => {
    Axios.post("https://ideopedia-books.herokuapp.com/listBookCards", {
      Password: "Ideopedia@001",
    }).then((data) => {
      setData(data.data);
    });
    console.log(data);
  }, []);
  return (
    <div>
      {data ? (
        <div className="p-4">
          <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-2">
            <div class="pb-4 rounded-md flex items-start justify-start">
              <div>
                <SideNavbar />
              </div>
            </div>
            <div class="p-4 rounded-md flex items-start justify-start">
              <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-1 lg:gap-2">
                <div class="rounded-md flex items-center justify-end">
                  <div className="flex">
                    <Image src={srch} />

                    <input
                      className="int pl-9"
                      type="text"
                      placeholder="Search"
                      onChange={(e) => setInpt(e.target.value)}
                    />
                  </div>
                </div>
                <div class="p-4  rounded-md flex items-center justify-start">
                  <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-1 lg:gap-2">
                    <div class=" rounded-md flex items-center justify-start">
                      <span className="text-3xl text-bold text-black">
                        Launch Of The Month
                      </span>
                    </div>
                    <div class=" rounded-md flex items-center justify-end">
                      <div>
                        {data.map((val) =>
                          val.Book_Name.match(inpt) ? (
                            <ReadCard
                              image={val.Cover_image}
                              name={val.Book_Name.toUpperCase()}
                              author={val.Book_Author}
                              read={val.read_time}
                              listen={val.listen_time}
                            />
                          ) : (
                            console.log("update")
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <Loader />
        </div>
      )}
    </div>
  );
};
export default Read;
