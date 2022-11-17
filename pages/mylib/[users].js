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
import task from "../../public/task.svg";
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
    Axios.post("http://localhost:3000/api/UserDashboard/findUser", {
      User_Id: favo.users,
    }).then((data) => {
      setUser(data.data);
    });
  }, []);

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
  useEffect(() => {
    const fetchRecent = async () => {
      const result = await Axios.post(
        "http://localhost:3000/api/UserCompleted/listCompleted",
        {
          User_Id: favo.users,
          percent: 100,
        }
      );

      setRecent(result.data);
    };

    fetchRecent();
    console.log(Recent);
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

          <div className="md:pl-9 lg:w-9/12 md:w-9/12 sm:pl-1 sm:w-9/12">
            <br />
            <div class="scrollmenu flex pt-9 ml-9">
              <div className="pr-9 flex">
                <Image src={task} />
                <Link
                  href={`/mylib/completed/${favo.users}`}
                  className="navtxt"
                >
                  <span className="text-xl hover:text-green-700 cursor-pointer">
                    Completed
                  </span>
                </Link>
              </div>
              <div className="pr-9 flex">
                <Image src={fav} />
                <Link
                  href={`/mylib/favourites/${favo.users}`}
                  className="navtxt"
                >
                  <span className="text-xl hover:text-green-700 cursor-pointer">
                    Favourites
                  </span>
                </Link>
              </div>
              <div className="pr-9 flex">
                <Image src={create} />
                <Link href={`/mylib/notes/${favo.users}`} className="navtxt">
                  <span className="text-xl hover:text-green-700 cursor-pointer">
                    Notes & highlightes
                  </span>
                </Link>
              </div>
            </div>
            <br />

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
                b_id={data[0].id}
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
                {Recent ? (
                  Recent.map((val) => (
                    <div class="rounded-md flex items-start justify-start">
                      <CompletedCard
                        image={val.image}
                        name={val.name}
                        author={val.author}
                        percent={val.percent}
                        book_id={val.id}
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
                      <span className="text-md">
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
