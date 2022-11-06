import React from "react";
import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import Navbar from "../components/navbar";
import Link from "next/link";
import contactfacebook from "../public/contactfacebook.svg";
import contacttwitter from "../public/contacttwitter.svg";
import contacttelegram from "../public/contacttelegram.svg";
import map from "../public/map.svg";

import mail from "../public/mail.svg";

import location from "../public/location.svg";
import Image from "next/image";
function Contact() {
  const email =
    "https://mail.google.com/mail/u/0/?fs=1&to=info@ideopedia.org&su=&body=&tf=cm";
  const googlemap = useRef(null);

  const FormHeader = (props) => <h2 id="headerTitle">{props.title}</h2>;
  return (
    <div>
      <Navbar />
      <section class="p-4 h-screen new">
        <div class="px-6 h-full text-gray-800">
          <div class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6 ">
            <div class="grow-0 shrink-1 md:shrink-0 basis-auto py-8 xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0 new1 cim bg-green-700 rounded-md drop-shadow">
              <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2">
                <div class="pt-4 pl-4 pr-4 rounded-md flex items-center justify-center">
                  <Image src={map} />
                </div>
                <div
                  class="rounded-md flex items-center justify-center  cursor-pointer"
                  href={email}
                >
                  <span>
                    <Image src={mail} />
                  </span>
                  <span className="pl-2 pb-1 text-white text-xl ">
                    info@ideopedia.org
                  </span>
                </div>
                <div class="rounded-md flex items-center justify-center">
                  <span>
                    <Image src={location} />
                  </span>
                  <span className="pl-2 pb-1 text-white text-xl">
                    info@ideopedia.org
                  </span>
                </div>
                <div class="pt-9 rounded-md flex items-end justify-center">
                  <div className="pl-3 ">
                    <Image src={contactfacebook} />
                  </div>
                  <div className="pl-3 pb-1">
                    <Image src={contacttwitter} />
                  </div>
                  <div className="pl-3 pb-1">
                    <Image src={contacttelegram} />
                  </div>
                </div>
              </div>
            </div>
            <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0 new">
              <FormHeader title="Contact us" className="bd1" />
              <div>
                <form>
                  <div className="row">
                    <label>Name</label>
                    <input
                      type="email"
                      placeholder="Enter your name"
                      onChange={(e) => setEmail_Id(e.target.value)}
                    />
                  </div>
                  <div className="row">
                    <label>Email</label>
                    <input
                      type="text"
                      placeholder="Enter your email"
                      onChange={(e) => setComponent_available(e.target.value)}
                    />
                  </div>
                  <div className="row">
                    <label>Message</label>
                    <textarea
                      type="text"
                      placeholder="write your message"
                      onChange={(e) => setComponent_available(e.target.value)}
                    ></textarea>
                  </div>

                  <div id="button" className="row">
                    <button type="submit">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
