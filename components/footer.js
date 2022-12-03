import React from "react";
import Link from "next/link";
import facebook from "../public/facebook.svg";
import twitter from "../public/twitter.svg";
import Image from "next/image";
import {useRouter} from "next/router"

import telegram from "../public/telegram.svg";
import logo from "../public/logo.svg";
import bpoint from "../public/circle2.svg";
function Footer() {
  const router = useRouter()
  return (
    <div>
      <div className="pt-10 pb-4 footer">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-2 lg:gap-4 px-5">
          <div className="p-2  logo item sm:text-left text-center">
            <div className="pt-20">
              <Image src={logo} width={120} onClick={function handlenav(){
                router.push("/")
              }} />
              <br />
              <label className="foottext">
                INFORMING
                <div className="bulletPoint">
                  <Image src={bpoint}/>
                </div>
                INSPIRING
                <div className="bulletPoint">
                  <Image src={bpoint} />
                </div>
                <span className="">IMPACTING</span>
                <div className="">INDIA'S TOP LEADERS</div>
                <div className="">ONE IDEA AT A TIME</div>
              </label>
            </div>
          </div>
          <div className="p-2 rounded-md flex sm:justify-start justify-center sm:text-left text-center">
            <div>
              <span className="heading">About</span>
              <br />
              <ul>
                <li className="py-1 foottext hover:text-green-500">
                  <Link href="/about">What is Ideopedia ?</Link>
                </li>
                <li className="py-1 foottext hover:text-green-500">
                  <Link href="/about#mission">Mission</Link>
                </li>
                <li className="py-1 foottext hover:text-green-500">
                  <Link href="/about#vission">Vision</Link>
                </li>
                <li className="py-1 foottext hover:text-green-500">
                  <Link href="/about#what">What we do</Link>
                </li>

                <li className="py-1 foottext hover:text-green-500">
                  <Link href="/contact">Contact us</Link>
                </li>
s              </ul>
            </div>
          </div>
          <div className="p-2  rounded-md flex sm:justify-start justify-center mb-5 sm:text-left text-center">
            <div>
              <span className="heading">Team</span>
              <br />
              <ul>
                <li className="py-1 foottext hover:text-green-500">
                  <Link href="/teams#bod">Board of Directors</Link>
                </li>
                <li className="py-1 foottext hover:text-green-500">
                  <Link href="/teams#bod1">Founders</Link>
                </li>
                {/* <li className="py-1 foottext hover:text-green-500">
                  <Link href="/teams#bod">Advisors</Link>
                </li>
                <li className="py-2 foottext hover:text-green-500"></li>
                <li className="py-3 foottext"> </li> */}
              </ul>
            </div>
          </div>
          <div className="p-2  rounded-md flex sm:justify-start justify-center mb-9 sm:text-left text-center">
            <div>
              <span className="heading">Our Readers</span>
              <br />
              <ul>
                <li className="py-1 foottext hover:text-green-500">
                  <Link href="/testimonials#readers">Testimonials</Link>
                </li>
                {/* <li className="py-3 foottext"></li>
                <li className="py-3 foottext"></li>
                <li className="py-3 foottext"></li>
                <li className="py-3 foottext"> </li> */}
              </ul>
            </div>
          </div>
          {/* <div className="p-2  rounded-md flex  mb-9">
            <div>
              <span className="heading">Social Media</span>
              <br />
              <div className=" py-3">
                <span className="mr-2 hover:text-green-500 cursor-pointer">
                  <Link href="/login">
                    <Image src={facebook} width={38}/>
                  </Link>
                </span>
                <span className="mr-2 hover:text-green-500 cursor-pointer">
                  <Link href="/login">
                    <Image src={twitter} width={38}/>
                  </Link>
                </span>
                <span className="mr-2 hover:text-green-500 cursor-pointer">
                  <Link href="/login">
                    <Image src={telegram} width={38}/>
                  </Link>
                </span>
              </div>
            </div>
          </div> */}
        </div>
        <hr className="hru mx-9 mb-5" />
        <div className="flex items-center justify-between">
        <div className="foottext pl-8">
          <Link href="/about">©️ Ideopedia - 2023</Link>
        </div>
        <div className="pr-8 foobar">
                <span className="mr-2 hover:text-green-500 cursor-pointer">
                  <Link href="/login">
                    <Image src={facebook} width={38}/>
                  </Link>
                </span>
                <span className="mr-2 hover:text-green-500 cursor-pointer">
                  <Link href="/login">
                    <Image src={twitter} width={38}/>
                  </Link>
                </span>
                <span className="mr-2 hover:text-green-500 cursor-pointer">
                  <Link href="/login">
                    <Image src={telegram} width={38}/>
                  </Link>
                </span>
              </div>
              </div>
      </div>
    </div>
  );
}

export default Footer;