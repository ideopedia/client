import React from "react";
import Link from "next/link";
import facebook from "../public/facebook.svg";
import twitter from "../public/twitter.svg";
import Image from "next/image";
import telegram from "../public/telegram.svg";
import logo from "../public/logo.svg";
import bpoint from "../public/circle2.svg"
function Footer() {
  return (
    <div>
      <div class="p-3 footer">
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2 lg:gap-4 focenter">
          <div class="p-2 rounded-md flex items-center justify-center logo">
            <div className="py-9 ">
              <Image src={logo} />
              <br />
              <label className="foottext ">
                INFORMING
                <div className="bulletPoint">
                  <Image src={bpoint} />
                </div>
                INSPIRING
                <div className="bulletPoint">
                  <Image src={bpoint} />
                </div>
                IMPACTING INDIA'S TOP LEADERS ONE IDEA AT A TIME
              </label>
            </div>
          </div>
          <div class="p-2  rounded-md flex">
            <div>
              <span className="heading">About</span>
              <br />
              <ul>
                <li className="py-2 foottext hover:text-green-700">
                  <Link href="/about#about_hero">What is Ideopedia ?</Link>
                </li>
                <li className="py-2 foottext hover:text-green-700">
                  <Link href="/about#mission">Mission</Link>
                </li>
                <li className="py-2 foottext hover:text-green-700">
                  <Link href="/about#vission">Vision</Link>
                </li>
                <li className="py-2 foottext hover:text-green-700">
                  <Link href="/about#what">What we do</Link>
                </li>

                <li className="py-2 foottext hover:text-green-700">
                  <Link href="/about#contact">Contact us</Link>
                </li>
                <li className="py-2 foottext hover:text-green-700"> </li>
              </ul>
            </div>
          </div>
          <div class="p-2  rounded-md flex  mb-5">
            <div>
              <span className=" heading tm">Team</span>
              <br />
              <ul>
                <li className="py-1 foottext hover:text-green-700">
                  <Link href="/teams#bod">Board of Directors</Link>
                </li>
                <li className="py-1 foottext hover:text-green-700">
                  <Link href="/teams#bod">Founders</Link>
                </li>
                <li className="py-1 foottext hover:text-green-700">
                  <Link href="/teams#bod">Advisors</Link>
                </li>
                <li className="py-2 foottext hover:text-green-700"></li>
                <li className="py-3 foottext"> </li>
              </ul>
            </div>
          </div>
          <div class="p-2  rounded-md flex  mb-9">
            <div>
              <span className=" heading tm">Our Readers</span>
              <br />
              <ul>
                <li className="py-1 foottext hover:text-green-700">
                  <Link href="/testimonials#readers">Testimonials</Link>
                </li>
                <li className="py-3 foottext"></li>
                <li className="py-3 foottext"></li>
                <li className="py-3 foottext"></li>
                <li className="py-3 foottext"> </li>
              </ul>
            </div>
          </div>
          <div class="p-2  rounded-md flex  mb-9">
            <div>
              <span className=" heading tm">Social Media</span>
              <br />
              <div className=" py-3">
                <span className="mr-3 hover:text-green-700 cursor-pointer">
                  <Link href="/login">
                    <Image src={facebook} />
                  </Link>
                </span>
                <span className="mr-3 hover:text-green-700 cursor-pointer">
                  <Link href="/login">
                    <Image src={twitter} />
                  </Link>
                </span>
                <span className="mr-3 hover:text-green-700 cursor-pointer">
                  <Link href="/login">
                    <Image src={telegram} />
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>

        <hr className="hru" />
        <br />
        <span className="foottext">
          <Link href="/about">©️ Ideopedia - 2022</Link>
        </span>
        <br></br>
      </div>
    </div>
  );
}

export default Footer;
