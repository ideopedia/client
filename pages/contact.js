import React from "react";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Navbar from "../components/navbar";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import facebook from "../public/facebook1.svg";
import twitter from "../public/twitter2.svg";
import telegram from "../public/telegram2.svg";
import map from "../public/map.svg";
import mail from "../public/contmail.svg";
import emailjs from "@emailjs/browser";
import location from "../public/contlocation.svg";
const New = () => {
  const [user, setUser] = useState(null);
  const [email_Id, setEmail_Id] = useState(null);
  const [message, setMessage] = useState(null);
  const [name, setName] = useState(null);
  const toastifySuccess = () => {
    toast.success("Mail Sent !", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const classes =
    "border border-gray-300 text-gray-900 text-base font-medium rounded-md focus:ring-green-500 focus:border-green-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500";
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    // console.log(email_Id, message, name);
    emailjs
      .sendForm( 
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          toastifySuccess();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const FormHeader = (props) => <h2 id="headerTitle" className="py-4">{props.title}</h2>;
  return (
    <div>
      <Navbar isLogedIn={false} />
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
          <div className="flex items-center justify-center bg-green-500 h-screen">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2">
              <div className="pl-4 pr-4 rounded-md flex items-center justify-center">
                <Link href="https://g.page/thinkindia?share">
                  <a target="_blank">
                    <Image src={map} />
                  </a>
                </Link>
              </div>
            <div className="py-2">
              <div className="rounded-md flex items-center justify-center cursor-pointer">
                <span>
                  <Image src={mail} />
                </span>
                <Link
                  href="https://mail.google.com/mail/u/0/?fs=1&to=info@ideopedia.org&su=Regarding+Ideopedia&body=&tf=cm"
                  passHref={true}
                >
                  <a target="_blank">
                    <div className="pl-2 pb-1 text-white xl:text-xl md:text-[18px] text-[16px] font-medium">
                      info@ideopedia.org
                    </div>
                  </a>
                </Link>
              </div>
              <div className="rounded-md flex items-center justify-center">
                <span>
                  <Image src={location} />
                </span>
                <Link href="https://g.page/thinkindia?share" passHref={true}>
                  <a target="_blank">
                    <div className="pl-2 pb-1 text-white xl:text-xl md:text-[18px] text-[16px] font-medium">
                      info@ideopedia.org
                    </div>
                  </a>
                </Link>
              </div>
            </div>
              <div className="pt-9 rounded-md flex items-end justify-center">
                <div className="m-2 fohv">
                  <Image src={facebook} />
                </div>
                <div className="m-2 fohv">
                  <Image src={telegram} />
                </div>
                <div className="m-2 fohv">
                  <Image src={twitter} />
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-md flex items-center justify-center">
            <ToastContainer />
            <div className="newloginContainer px-6 pb-2">
              <div className="newLoginTop flex items-center justify-center">
                <FormHeader title="CONTACT US" />
              </div>
              <form className="newLoginForm" ref={form} onSubmit={sendEmail}>
                <label className="text-lg font-medium">Name</label>
                <input
                  className={classes}
                  type="text"
                  name="name"
                  value={name}
                  placeholder="Enter your name"
                  onChange={(e) => setName(e.target.value)}
                />
                <label className="text-lg font-medium">Email</label>
                <input
                  className={classes}
                  type="email"
                  name="email_Id"
                  value={email_Id}
                  placeholder="Enter your email"
                  onChange={(e) => setEmail_Id(e.target.value)}
                />
                <label className="text-lg font-medium">Message</label>
                <textarea
                  className={classes + "pb-[4rem]"}
                  type="text"
                  name="message"
                  rows="5"
                  cols="50"
                  value={message}
                  placeholder="Write your message..."
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <div
                  id="button"
                  className="row flex justify-center items-center"
                >
                  <button type="submit" style={{ width: "40%" }}>
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
