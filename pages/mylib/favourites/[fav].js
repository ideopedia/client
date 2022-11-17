import React from "react";
import SideNavbar from "../../../components/sidebar";
import FavouritesCard from "../../../components/FavouritesCard";
import Link from "next/link";
import task from "../../../public/task.svg";
import create from "../../../public/create.svg";
import arr from "../../../public/downarr.svg";
import { useState, useEffect } from "react";
import Axios from "axios";
import { useRouter } from "next/router";
import fav from "../../../public/fav.svg";
import Loader from "../../../components/loader";
import srch from "../../../public/srch.svg";
import bmark from "../../../public/bmark.svg";
import Image from "next/image";
import wtf from "../../../public/wtf.svg";
import dmmt from "../../../public/dmmt.svg";
const Favourites = () => {
  const router = useRouter();
  const favo = router.query;
  const [data, setData] = useState(false);
  const [user, setUser] = useState(false);
  useEffect(() => {
    Axios.post("http://localhost:3000/api/UserDashboard/findUser", {
      User_Id: favo.fav,
    }).then((data) => {
      setUser(data.data);
    });
  }, []);
  useEffect(() => {
    Axios.post("http://localhost:3000/api/UserFavourites/listFavourites", {
      User_Id: favo.fav,
    }).then((data) => {
      setData(data.data);
    });
  }, []);
  return (
    <div>
      {data ? (
        <div className="md:flex">
          <SideNavbar
            per={user[0].Profile_percent}
            image={user[0].Image}
            name={user[0].Name}
            u_id={user[0].User_Id}
          />
          {console.log(data)}
          <div className="md:pl-9 lg:w-9/12 md:w-9/12 sm:pl-1 sm:w-9/12">
            <br />
            <div class="scrollmenu flex pt-9 ml-9">
              <div className="pr-9 flex">
                <Image src={task} />
                <Link href={`/mylib/completed/${favo.fav}`} className="navtxt">
                  <span className="text-xl hover:text-green-700 cursor-pointer">
                    Completed
                  </span>
                </Link>
              </div>
              <div className="pr-9 flex">
                <Image src={fav} />
                <Link href={`/mylib/favourites/${favo.fav}`} className="navtxt">
                  <div>
                    <span className="text-xl text-green-700 cursor-pointer">
                      Favourites
                    </span>
                    <hr className="w-6/12 nhr" />
                  </div>
                </Link>
              </div>
              <div className="pr-9 flex">
                <Image src={create} />
                <Link href={`/mylib/notes/${favo.fav}`} className="navtxt">
                  <span className="text-xl hover:text-green-700 cursor-pointer">
                    Notes & highlightes
                  </span>
                </Link>
              </div>
            </div>

            <br />
            <div className="flex drop-shadow-md bg-white pl-5 cls">
              <Link href="#">
                <span className="pr-4 cursor-pointer">Books</span>
              </Link>
              <Image src={arr} />
            </div>
            {data.map((val) => (
              <FavouritesCard
                image={val.image}
                name={val.name}
                author={val.author}
                percent={val.percent}
                book_id={val.id}
                b_name={val.name}
              />
            ))}
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Favourites;
