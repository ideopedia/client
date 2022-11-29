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
import Navbar from "../../components/navbar";
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
  const [user, setUser] = useState(false);
  const router = useRouter();
  const favo = router.query;
  console.log(favo);
  useEffect(() => {
    Axios.post("/api/UserDashboard/findUser", {
      User_Id: favo.book,
    }).then((data) => {
      setUser(data.data);
    });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const result = await Axios("/api/bookCard/listBookcard", {
        Password: "Ideopedia@001",
      });

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
      {data && user ? (
        <div className="">
          {/* <SideNavbar
            per={user[0].Profile_percent}
            image={user[0].Image}
            name={user[0].Name}
            u_id={user[0].User_Id}
          /> */}
          {console.log(data)}
          <Navbar isLogedIn={true} userid={favo.book} />
          <div className="flex justify-end pt-2">
            <div className="p-4  rounded-md flex items-center justify-end ">
              <div className="flex ">
                <Image src={srch} className="-z-50" />

                <input
                  className="int pl-7"
                  type="text"
                  placeholder="Search"
                  onChange={(e) => setInpt(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="lg:mx-20 mx-5 h-screen">
            <div>
              {data.map((val, n) =>
                val.Book_Name.match(inpt) ? (
                  <div
                    className="flex justify-center items-center mt-9"
                    key={n}
                  >
                    {console.log(val.id)}
                    <ReadCard
                      image={val.Cover_image}
                      name={val.Book_Name.toUpperCase()}
                      author={val.Book_Author}
                      read={val.read_time}
                      listen={val.listen_time}
                      b_id={val.id}
                      u_id={favo.book}
                    />
                  </div>
                ) : (
                  <div className="" >
                    <div className="flex items-center   mt-9 " key={n}>
                      {data.map((val, n) => (
                        <div
                          className="flex-column justify-center items-center w-[100%]"
                          key={n}
                        >
                          <div className="text-xl font-medium text-black showRes">
                            Showing results for{" "}
                            <span className="text-green-500">
                              {val.Book_Name[0].toUpperCase() +
                                val.Book_Name.slice(1).toLowerCase()}
                            </span>
                          </div>
                          <div className="text-xl font-medium text-black ">
                            <div className="showRes">
                              {" "}
                              Search instead for{" "}
                              <span className="text-green-500">{inpt}</span>
                            </div>
                          </div>
                          <div
                            className="cursor-pointer "
                            onClick={function handleCick() {
                              router.push(`/read/${val.id}`);
                            }}
                          >
                            <div className="flex justify-center items-center ">
                              <ReadCard
                                image={val.Cover_image}
                                name={val.Book_Name.toUpperCase()}
                                author={val.Book_Author}
                                read={val.read_time}
                                listen={val.listen_time}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
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
