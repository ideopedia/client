import React from "react";
import SideNavbar from "../../../components/sidebar";
import CompletedCard from "../../../components/CompletedCards";
import Link from "next/link";
import task from "../../../public/task.svg";
import create from "../../../public/create.svg";
import arr from "../../../public/downarr.svg";
import { useState, useEffect } from "react";
import Axios from "axios";
import { useRouter } from "next/router";
import Loader from "../../../components/loader";
import fav from "../../../public/fav.svg";
import srch from "../../../public/srch.svg";
import bmark from "../../../public/bmark.svg";
import Image from "next/image";
import wtf from "../../../public/wtf.svg";
import dmmt from "../../../public/dmmt.svg";
const Completed = () => {
  const router = useRouter();
  const favo = router.query;
  const [red, setRed] = useState(false);
  const [data, setData] = useState(false);
  const [user, setUser] = useState(false);
  useEffect(() => {
    Axios.post("http://localhost:3000/api/UserDashboard/findUser", {
      User_Id: favo.completed,
    }).then((data) => {
      setUser(data.data);
    });
  }, []);
  useEffect(() => {
    Axios.post("http://localhost:3000/api/UserCompleted/listCompleted", {
      User_Id: favo.completed,
      percent: 100,
    }).then((data) => {
      setData(data.data);

      Axios.post("http://localhost:3000/api/UserDashboard/updateDash", {
        Read: data.data.length,
        User_Id: favo.completed,
      }).then((val) => {
        console.log(val);
      });
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
                <Link href={`/mylib/completed/${favo.completed}`} className="navtxt">
                  <div>
                    <span className="text-xl hover:text-green-700 cursor-pointer pb-3">
                      Completed
                    </span>

                    <hr className="w-6/12 nhr" />
                  </div>
                </Link>
              </div>
              <div className="pr-9 flex">
                <Image src={fav} />
                <Link href={`/mylib/favourites/${favo.completed}`} className="navtxt">
                  <span className="text-xl hover:text-green-700 cursor-pointer">
                    Favourites
                  </span>
                </Link>
              </div>
              <div className="pr-9 flex">
                <Image src={create} />
                <Link href={`/mylib/notes/${favo.completed}`} className="navtxt">
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
              <CompletedCard
                image={val.image}
                name={val.name}
                author={val.author}
                percent={val.percent}
                book_id={val.id}
                b_name={val.name}
              />
            ))}
            {}
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Completed;
