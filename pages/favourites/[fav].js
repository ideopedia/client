import React from "react";
import SideNavbar from "../../components/sidebar";
import FavouritesCard from "../../components/FavouritesCard";
import Link from "next/link";
import task from "../../public/newtask.svg";
import create from "../../public/create.svg";
import arr from "../../public/downarr.svg";
import { useState, useEffect } from "react";
import Axios from "axios";
import Navbar from "../../components/navbar";
import { useRouter } from "next/router";
import fav from "../../public/newheart.svg";
import Loader from "../../components/loader";
import drop from "../../public/dropdownlogo.svg";
import srch from "../../public/srch.svg";
import bmark from "../../public/bmark.svg";
import Image from "next/image";
import wtf from "../../public/wtf.svg";
import dmmt from "../../public/dmmt.svg";
const Favourites = () => {
  const router = useRouter();
  const favo = router.query;
  const [data, setData] = useState(false);
  const [user, setUser] = useState(false);
  useEffect(() => {
    Axios.post("/api/UserDashboard/findUser", {
      User_Id: favo.fav,
    }).then((data) => {
      setUser(data.data);
    });
  }, []);
  useEffect(() => {
    Axios.post("/api/UserFavourites/listFavourites", {
      User_Id: favo.fav,
    }).then((data) => {
      setData(data.data);
    });
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
          {console.log(data)}
          <Navbar isLogedIn={true} userid={favo.fav} />
          <div className="">
            <div className="pt-20  grid grid-cols-2">
              <div className="flex justify-center items-center ">
                <Image src={task} />
                <Link href={`/completed/${favo.fav}`} className="navtxt">
                  <span className="text-xl hover:text-green-700 cursor-pointer ml-[0.5rem]">
                    Completed
                  </span>
                </Link>
              </div>
              <div className="flex justify-center items-center">
                <Image src={fav} />
                <Link href={`/favourites/${favo.fav}`} className="navtxt">
                  <div>
                    <span className="text-xl text-green-700 cursor-pointer ml-[0.5rem]">
                      Favourites
                    </span>
                    <hr className="ml-2 w-6/12 nhr" />
                  </div>
                </Link>
              </div>
            </div>
            {/* <div className="scrollmenu flex pt-9 ml-9">
              <div className="pr-9 flex">
                <Image src={create} />
                <Link href={`/notes/${favo.fav}`} className="navtxt">
                  <span className="text-xl hover:text-green-700 cursor-pointer ml-[0.5rem]">
                    Notes & highlightes
                  </span>
                </Link>
              </div>
            </div> */}

            <br />
            <div className="dropdown pl-4">
              <button className="dropbtn flex items-center justify-center">
                Sort By{" "}
                <div className="mt-2 ml-2">
                  <Image src={drop} />
                </div>
              </button>
              <div className="dropdown-content ">
                <Link href={`/favourites/${favo.fav}`}>Books</Link>
                <Link href={`favourites/${favo.fav}`}>Author</Link>
              </div>
            </div>
            <div className="rounded-md flex items-start justify-center px-0 md:px-5 lg:px-9">
              <FavouritesCard
                image={data.image}
                name={data.name}
                author={data.author}
                percent={data.percent}
                b_id={data.id}
                u_id={favo.fav}
                b_name={data.name}
              />
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Favourites;
