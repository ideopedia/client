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
    Axios.post("https://ideo-books.herokuapp.com/listBooks").then((data) => {
      setData(data.data);
    });
    console.log(data);
  }, []);
  return (
    <div>
      {data ? (
        <div className="lg:flex">
          <SideNavbar />
          
          <div className="md:pl-9 lg:w-9/12 md:w-9/12 sm:pl-1 sm:w-9/12">
            <br />
            
            <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-1 lg:gap-2">
              <div class="p-4 rounded-md flex items-center justify-start">
                <div className="flex">
                  <Link href="#">
                    <span className="pr-3 text-xl cursor-pointer">Sort By</span>
                  </Link>
                  <Image src={arr} />
                </div>
              </div>
              <div class="p-4  rounded-md flex items-center justify-end">
                <div className="flex">
                  <Image src={srch} />

                  <input
                    className="int pl-7"
                    type="text"
                    placeholder="Search"
                    onChange={(e) => setInpt(e.target.value)}
                  />
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
      ) : (
        <div className="load">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default Read;

/*{<div className="justify-center items-center  pl-7">
<Image src={nodata} />
<h1 className="nod">Oops! No results Found</h1>
<span className="subt"> Try using a different search term</span>
</div>}*/
