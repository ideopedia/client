import React from "react";
import Link from "next/link";
import facebook from "../public/facebook.svg";
import twitter from "../public/twitter.svg";
import Image from "next/image";
import telegram from "../public/telegram.svg";
import logo from "../public/logo.svg";
import bpoint from "../public/circle2.svg";
function Footer() {
  return (
    <div>
      <div class="pt-10 pb-4 footer">
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2 lg:gap-4 focenter">
          <div class="p-2  logo item">
            <div className="pt-20">
              <Image src={logo} width={120}/>
              <br />
              <label className="foottext pl-2">
                INFORMING
                <div className="bulletPoint">
                  <Image src={bpoint} />
                </div>
                INSPIRING
                <div className="bulletPoint">
                  <Image src={bpoint} />
                </div>
                IMPACTING 
                <div className="pl-2">INDIA'S TOP LEADERS</div>
                <div className="pl-2">ONE IDEA AT A TIME</div>
              </label>
            </div>
          </div>
          <div class="p-2 rounded-md flex">
            <div>
              <span className="heading">About</span>
              <br />
              <ul>
                <li className="py-2 foottext hover:text-green-500">
                  <Link href="/about#about_hero">What is Ideopedia ?</Link>
                </li>
                <li className="py-2 foottext hover:text-green-500">
                  <Link href="/about#mission">Mission</Link>
                </li>
                <li className="py-2 foottext hover:text-green-500">
                  <Link href="/about#vission">Vision</Link>
                </li>
                <li className="py-2 foottext hover:text-green-500">
                  <Link href="/about#what">What we do</Link>
                </li>

                <li className="py-2 foottext hover:text-green-500">
                  <Link href="/about#contact">Contact us</Link>
                </li>
                <li className="py-2 foottext hover:text-green-500"> </li>
              </ul>
            </div>
          </div>
          <div class="p-2  rounded-md flex mb-5">
            <div>
              <span className="heading">Team</span>
              <br />
              <ul>
                <li className="py-1 foottext hover:text-green-500">
                  <Link href="/teams#bod">Board of Directors</Link>
                </li>
                <li className="py-1 foottext hover:text-green-500">
                  <Link href="/teams#bod">Founders</Link>
                </li>
                {/* <li className="py-1 foottext hover:text-green-500">
                  <Link href="/teams#bod">Advisors</Link>
                </li> */}
                <li className="py-2 foottext hover:text-green-500"></li>
                <li className="py-3 foottext"> </li>
              </ul>
            </div>
          </div>
          <div class="p-2  rounded-md flex  mb-9">
            <div>
              <span className="heading">Our Readers</span>
              <br />
              <ul>
                <li className="py-1 foottext hover:text-green-500">
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
          </div>
        </div>

        <hr className="hru mx-9" />
        <br />
        <span className="foottext pl-8">
          <Link href="/about">©️ Ideopedia - 2022</Link>
        </span>
        <br></br>
      </div>
    </div>
  );
}

export default Footer;
