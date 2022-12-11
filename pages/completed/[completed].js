import React from "react";
import SideNavbar from "../../components/sidebar";
import CompletedCard from "../../components/CompletedCards";
import Link from "next/link";
import task from "../../public/task.svg";
import create from "../../public/create.svg";
import arr from "../../public/downarr.svg";
import { useState, useEffect } from "react";
import Axios from "axios";
import Footer from "../../components/footer";
import drop from "../../public/dropdownlogo.svg";
import Navbar from "../../components/navbar";
import { getCookie } from "cookies-next";
import { useRouter } from "next/router";
import Loader from "../../components/loader";
import fav from "../../public/fav.svg";
import Head from "next/head";
import srch from "../../public/srch.svg";
import bmark from "../../public/bmark.svg";
import Image from "next/image";
import wtf from "../../public/wtf.svg";
import dmmt from "../../public/dmmt.svg";
const Completed = () => {
  const router = useRouter();
  const favo = router.query;
  const [red, setRed] = useState(false);
  const [data, setData] = useState(false);
  const [user, setUser] = useState(false);
  useEffect(() => {
    Axios.post("/api/UserDashboard/findUser", {
      User_Id: favo.completed,
    }).then((data) => {
      setUser(data.data);
    });
  }, []);
  useEffect(() => {
    Axios.post("/api/UserCompleted/listCompleted", {
      User_Id: favo.completed,
      percent: 100,
    }).then((data) => {
      setData(data.data);

      Axios.post("/api/UserDashboard/updateDash", {
        Read: data.data.length,
        User_Id: favo.completed,
      }).then((val) => {
        console.log(val);
      });
    });
  }, []);

  return (
    <div>
      {data && getCookie("user")  ? (
        <div className="">
          {/* <SideNavbar
            per={user[0].Profile_percent}
            image={user[0].Image}
            name={user[0].Name}
            u_id={user[0].User_Id}
          /> */}
          {console.log(data)}
          <Navbar isLogedIn={true} userid={favo.completed} />
          <div className="pt-20">
            <div className="grid grid-cols-2">
              <div className="flex justify-center items-center">
                <Image src={task} />
                <Link href={`/completed/${favo.completed}`} className="navtxt">
                  <div>
                    <span className="text-xl hover:text-green-700 cursor-pointer pb-3 ml-[0.5rem]">
                      Completed
                    </span>

                    <hr className="ml-2 w-6/12 nhr" />
                  </div>
                </Link>
              </div>
              <div className="flex justify-center items-center">
                <Image src={fav} />
                <Link href={`/favourites/${favo.completed}`} className="navtxt">
                  <span className="text-xl hover:text-green-700 cursor-pointer ml-[0.5rem]">
                    Favourites
                  </span>
                </Link>
              </div>
            </div>
            {/* <div className="scrollmenu flex pt-9 ml-9">
              
              
              <div className="pr-9 flex">
                <Image src={create} />
                <Link
                  href={`/notes/${favo.completed}`}
                  className="navtxt"
                >
                  <span className="text-xl hover:text-green-700 cursor-pointer ml-[0.5rem]">
                    Notes & highlightes
                  </span>
                </Link>
              </div>
            </div> */}

            <br />
            <div className="dropdown px-2 md:px-5 lg:px-9">
              <button className="dropbtn flex items-center justify-center">
                Sort By{" "}
                <div className="mt-2 ml-2">
                  <Image src={drop} />
                </div>
              </button>
              <div className="dropdown-content ">
                <Link href={`/favourites/${favo.completed}`}>Books</Link>
                <Link href={`/favourites/${favo.completed}`}>Author</Link>
              </div>
            </div>
            {data.map((val, n) => (
              <div
                class="rounded-md flex items-start justify-center px-0 md:px-5 lg:px-9"
                key={n}
              >
                <CompletedCard
                  image={val.image}
                  name={val.name}
                  author={val.author}
                  percent={val.percent}
                  b_id={val.id}
                  b_name={val.name}
                  u_id={favo.completed}
                  key={n}
                />
              </div>
            ))}
            {}
          </div>
          <Footer />
        </div>
      ) : (
        console.log("wait")
      )}
    </div>
  );
};

export default Completed;
