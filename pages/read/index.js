import React from "react";
import SideNavbar from "../../components/sidebar";
import Card from "../../components/card";
import ReadCard from "../../components/readcard";
import Link from "next/link";
import task from "../../public/task.svg";
import create from "../../public/create.svg";
import fav from "../../public/fav.svg";
import recomend from "../../public/recomend.svg";
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
  const [Recommended, setRecommended] = useState(false);

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
        <div className="lg:flex">
          <SideNavbar />

          <div className="md:pl-9 lg:w-9/12 md:w-9/12 sm:pl-1 sm:w-9/12">
            <div>
              <br />

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
                        <div>
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
                )
              )}
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

export default Read;

/*{<div className="justify-center items-center  pl-7">
<Image src={nodata} />
<h1 className="nod">Oops! No results Found</h1>
<span className="subt"> Try using a different search term</span>
</div>}*/
