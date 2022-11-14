import React from "react";
import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Navbar from "../components/navbar";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import facebook from "../public/facebook.svg";
import twitter from "../public/twitter.svg";
import telegram from "../public/telegram.svg";
import map from "../public/map.svg";
import mail from "../public/mail.svg";
import ContactUs from "./Auth"
import location from "../public/location.svg";
const New = () => {
  const contactList=[ {
    label: "Name",
    type: "text",
    placeholder: "Enter your name",
    change: (e) => setEmail_Id(e.target.value),
  },
  {
    label: "Email",
    type: "email",
    placeholder: "Enter your email",
    change: (e) => setEmail_Id(e.target.value),
  },
  {
    label: "Message",
    type: "text",
    placeholder: "write your message",
    change: (e) => setEmail_Id(e.target.value),
    message:true,
  }
]
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
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
          <div class=" rounded-md flex items-center justify-center bg-green-700 h-screen">
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
            {/* <div>
              <FormHeader title="Contact us" className="bd1" />
              <div>
                <form ref={form} onSubmit={sendEmail}>
                  <div className="row">
                    <label>Name</label>
                    <input
                      type="email"
                      name="name"
                      placeholder="Enter your name"
                      onChange={(e) => setEmail_Id(e.target.value)}
                    />
                  </div>
                  <div className="row">
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      onChange={(e) => setComponent_available(e.target.value)}
                    />
                  </div>
                  <div className="row">
                    <label>Message</label>
                    <textarea
                      type="text"
                      name="message"
                      placeholder="write your message"
                      onChange={(e) => setComponent_available(e.target.value)}
                    ></textarea>
                  </div>

                  <div id="button" className="row">
                    <button type="submit" value="send">Send Message</button>
                  </div>
                </form>
              </div>
            </div> */}
            <ContactUs
              title="Contact"
              box={contactList}
              button="Send message"
              className="pb-[4rem]"
              />
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
