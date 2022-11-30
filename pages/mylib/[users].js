import React from "react";
import Axios from "axios";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import SideNavbar from "../../components/sidebar";
import Card from "../../components/card";
import CompletedCard from "../../components/CompletedCards";
import Link from "next/link";
import Loader from "../../components/loader";
import ReadCard from "../../components/readcard";
import task from "../../public/newtask.svg";
import Navbar from "../../components/navbar";
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
  const [Recent, setRecent] = useState(false);
  const [Recommended, setRecommended] = useState(false);
  const router = useRouter();
  const favo = router.query;
  console.log(favo.users);
  const [type, setType] = useState("Bronze Influencer");
  const [user, setUser] = useState(false);
  useEffect(() => {
    Axios.post("/api/UserDashboard/findUser", {
      User_Id: favo.users,
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
  useEffect(() => {
    const fetchRecent = async () => {
      const result = await Axios.post("/api/UserCompleted/listCompleted", {
        User_Id: favo.users,
        percent: 100,
      });

      setRecent(result.data);
    };

    fetchRecent();
    console.log(Recent);
  }, []);

  return (
    <div>
      {data ? (
        <div className="">
          {/* <SideNavbar
            per={user[0].Profile_percent}
            image={user[0].Image}
            name={user[0].Name}
            u_id={user[0].User_Id}
          /> */}
          <Navbar isLogedIn={true} userid={favo.users} />
          <div className="">
            <div className="pt-20  grid grid-cols-2">
              <div className="flex justify-center items-center">
                <Image src={task} />
                <Link href={`/completed/${favo.users}`} className="navtxt">
                  <span className="text-xl hover:text-green-700 cursor-pointer ml-[0.5rem]">
                    Completed
                  </span>
                </Link>
              </div>
              <div className="flex justify-center items-center">
                <Image src={fav} />
                <Link href={`/favourites/${favo.users}`} className="navtxt">
                  <span className="text-xl hover:text-green-700 cursor-pointer ml-[0.5rem]">
                    Favourites
                  </span>
                </Link>
              </div>
            </div>
            <div className="flex  pt-9 justify-center items-center">
              {/* <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-[9rem]">
                <div className="pr-4">
                  <Image src={task} />
                  <Link href={`/completed/${favo.users}`} className="navtxt">
                    <span className="text-xl hover:text-green-700 cursor-pointer ml-[0.5rem]">
                      Completed
                    </span>
                  </Link>
                </div>
                <div>
                  <Image src={fav} />
                  <Link href={`/favourites/${favo.users}`} className="navtxt">
                    <span className="text-xl hover:text-green-700 cursor-pointer ml-[0.5rem]">
                      Favourites
                    </span>
                  </Link>
                </div>
                <div>
                  <Image src={create} />
                  <Link href={`/notes/${favo.users}`} className="navtxt">
                    <span className="text-xl hover:text-green-700 cursor-pointer ml-[0.5rem]">
                      Notes & highlightes
                    </span>
                  </Link>
                </div>
              </div> */}

              {/* <div className="mr-9 flex">
                <Image src={create} />
                <Link href={`/notes/${favo.users}`} className="navtxt">
                  <span className="text-xl hover:text-green-700 cursor-pointer ml-[0.5rem]">
                    Notes & highlightes
                  </span>
                </Link>
              </div> */}
            </div>

            <div className="">
              <div className="p-4">
                <span className="text-xl text-black text-bold">
                  Launch of the Month
                </span>
              </div>
              <br />
              <div class="rounded-md flex items-start justify-center px-0 md:px-5 lg:px-9">
                <ReadCard
                  image={data[0].Cover_image}
                  name={data[0].Book_Name.toUpperCase()}
                  author={data[0].Book_Author}
                  read={data[0].read_time}
                  b_id={data[0].id}
                  u_id={favo.users}
                  listen={data[0].listen_time}
                />
              </div>

              <br />
              <br />
              <div className="p-4">
                <span className="text-xl text-black text-bold">
                  Recent Books
                </span>
              </div>
              <br />
              <div className="">
                {Recent ? (
                  Recent.map((val, n) => (
                    <div
                      className="rounded-md flex items-start justify-center px-0 md:px-5 lg:px-9"
                      key={n}
                    >
                      <CompletedCard
                        image={val.image}
                        name={val.name}
                        author={val.author}
                        percent={val.percent}
                        b_id={val.id}
                        u_id={favo.users}
                        b_name={val.name}
                      />
                    </div>
                  ))
                ) : (
                  <div>No Recent</div>
                )}
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
                      <span className="text-center">
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
        <Loader />
      )}
    </div>
  );
};

export default New;
