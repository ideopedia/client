import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import log from "../public/logo.svg";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full bg-white drop-shadow">
        <div className="justify-between px-4  lg:items-center lg:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-1  md:py-1 lg:block">
              <Link href="/" className="cursor-pointer">
                <Image src={log} className="cursor-pointer" />
              </Link>
              <div className="lg:hidden">
                <button
                  className="p-1 pt-3  outline-none "
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-black"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-black"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center  pb-3 mt-8 lg:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 lg:flex md:space-x-6 lg:space-y-0">
                <li className="text-black flex justify-center">
                  <Link href="/testimonials">
                    <a>Our Readers</a>
                  </Link>
                </li>
                <li className="text-black flex justify-center">
                  <Link href="/about">
                    <a>About Us</a>
                  </Link>
                </li>
                <li className="text-black flex justify-center">
                  <Link href="/teams">
                    <a>Team</a>
                  </Link>
                </li>
                <li className="text-black flex justify-center">
                  <Link href="/contact">
                    <a>Contact Us</a>
                  </Link>
                </li>
                <li className="text-white flex justify-center">
                  <Link href="/login">
                    <div className="log">
                      <button>Login</button>
                    </div>
                  </Link>
                </li>
                <li className="text-white flex justify-center">
                  <Link href="/signup">
                    <div className="sin">
                      <button>Signup</button>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}