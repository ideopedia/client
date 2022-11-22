import React from "react";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Navbar from "../components/navbar";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import facebook from "../public/facebook.svg";
import twitter from "../public/twitter.svg";
import telegram from "../public/telegram.svg";
import map from "../public/map.svg";
import mail from "../public/mail.svg";
import emailjs from "@emailjs/browser";
import location from "../public/location.svg";
const New = () => {
  const [user, setUser] = useState(null);
  const [email_Id, setEmail_Id] = useState(null);
  const [message, setMessage] = useState(null);
  const [name, setName] = useState(null);
  const toastifySuccess = () => {
    toast.success('Mail Sent !', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });;
  };
  const classes =
    "border border-gray-300 text-gray-900 text-base font-medium rounded-md focus:ring-green-500 focus:border-green-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500";
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    // console.log(email_Id, message, name);
    emailjs
      .sendForm(
        "service_n2cjfcp",
        "template_jegrfeo",
        form.current,
        "k4OIq4bqtNeEAjuPU"
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
  const FormHeader = (props) => <h2 id="headerTitle">{props.title}</h2>;
  return (
    <div>
      <Navbar />
      <div className="p-4">
        <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
          <div class=" rounded-md flex items-center justify-center bg-green-500 h-screen">
            <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2">
              <div class="pt-4 pl-4 pr-4 rounded-md flex items-center justify-center">
                <Link href="https://g.page/thinkindia?share">
                  <a target="_blank">
                    <Image src={map} />
                  </a>
                </Link>
              </div>
              <div class="rounded-md flex items-center justify-center cursor-pointer">
                <span>
                  <Image src={mail} />
                </span>
                <Link
                  href="https://mail.google.com/mail/u/0/?fs=1&to=info@ideopedia.org&su=Regarding+Ideopedia&body=&tf=cm"
                  passHref={true}
                >
                  <a target="_blank">
                    <div className="pl-2 pb-1 text-white text-xl">
                      info@ideopedia.org
                    </div>
                  </a>
                </Link>
              </div>
              <div class="rounded-md flex items-center justify-center">
                <span>
                  <Image src={location} />
                </span>
                <Link href="https://g.page/thinkindia?share" passHref={true}>
                  <a target="_blank">
                    <div className="pl-2 pb-1 text-white text-xl">
                      info@ideopedia.org
                    </div>
                  </a>
                </Link>
              </div>
              <div class="pt-9 rounded-md flex items-end justify-center">
                <div className="pl-3 pb-1 ">
                  <Image src={facebook} />
                </div>
                <div className="pl-3 pb-1">
                  <Image src={telegram} />
                </div>
                <div className="pl-3 pb-1">
                  <Image src={twitter} />
                </div>
              </div>
            </div>
          </div>
          
          <div class="rounded-md flex items-center justify-center pb-9">
          <ToastContainer />
            <div className="newloginContainer">
              <div className="newLoginTop flex justify-center items-center" style={{ marginLeft: "-1.8rem"}}>
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
                <label className="text-lg font-medium">Email Id</label>
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
                >
                </textarea>
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
