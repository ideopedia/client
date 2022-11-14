import React from "react";
import SideNavbar from "../../components/sidebar";
import Card from "../../components/card";
import ReadCard from "../../components/readcard";
import Link from "next/link";
import { useRouter } from "next/router";
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
  const router = useRouter();

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
  // useEffect(() => {
  //   Axios.post("http://localhost:3000/api/bookCard/listBookcard", {
  //     Password: "Ideopedia@001",
  //   }).then((data) => {
  //     setData(data.data);
  //   });
  //   console.log(data);
  // }, []);
  return (
    <div>
      {data ? (
        <div className="md:flex">
          <SideNavbar />
          {console.log(data)}
          <div className="md:pl-9 lg:w-9/12 md:w-9/12 sm:pl-1 sm:w-9/12 h-screen">
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

              
              {data.map((val) =>
                val.Book_Name.match(inpt) ? (
                  <div className="flex justify-center items-center mt-9"
                    onClick={function handleCick() {
                      router.push(`/read/${val.id}`);

                    }}
                  >
                    {console.log(val.id)}
                    <ReadCard
                      image={val.Cover_image}
                      name={val.Book_Name.toUpperCase()}
                      author={val.Book_Author}
                      read={val.read_time}
                      listen={val.listen_time}
                    />
                  </div>
                ) : (
                  <div className="flex justify-center items-center mt-9">
                    {data.map((val) => (
                      <div className="flex-column justify-center items-center">
                        <div className="text-xl font-semibold text-black">
                          Showing results for{" "}
                          <span className="text-green-700">
                            {val.Book_Name.toUpperCase()}
                          </span>
                        </div>
                        <div className="text-xl font-semibold text-black">
                          <i>
                            {" "}
                            Search instaed for{" "}
                            <span className="text-green-700">{inpt}</span>
                          </i>
                        </div>
                        <div
                          onClick={function handleCick() {
                            router.push(`/read/${val.id}`);
                          }}
                        >
                          <ReadCard
                            image={val.Cover_image}
                            name={val.Book_Name.toUpperCase()}
                            author={val.Book_Author}
                            read={val.read_time}
                            listen={val.listen_time}
                          />
                        </div>
                      </div>
                    ))}
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
