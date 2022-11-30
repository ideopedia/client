import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import log from "../public/logo.svg";
import { useRouter } from "next/router";
import { Dropdown } from "flowbite-react";
import drop from "../public/dropdownlogo.svg";
import { getCookies, getCookie, setCookies, removeCookies } from "cookies-next";
export default function Navbar(props) {
  const router = useRouter();
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full bg-white drop-shadow">
        <div className="justify-between px-4  lg:items-center lg:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-1  md:py-1 lg:block">
              <div href="/" className="cursor-pointer" onClick={function handleLogo(){
                router.push("/")
                setNavbar(false)
              }} >
                <Image src={log} className="cursor-pointer" />
              </div>
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
              className={`flex-1 justify-self-center  pb-3 mt-8 lg:block md:pb-0 md:mt-0  ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 lg:flex md:space-x-6 lg:space-y-0">
                <li className="text-black flex justify-center">
                  <div className="dropdown">
                    <button
                      className="dropbtn flex items-center justify-center"
                      
                    >
                      Our Readers{" "}
                      <div className="mt-2 ml-2">
                        <Image src={drop} />
                      </div>
                    </button>
                    <div className="dropdown-content">
                      <Link href="/testimonials#readers">Testimonials</Link>
                    </div>
                  </div>
                </li>
                <li className="text-black flex justify-center">
                  <div className="dropdown">
                    <button
                      className="dropbtn flex items-center justify-center"
                      
                    >
                      About Us{" "}
                      <div className="mt-2 ml-2">
                        <Image src={drop} />
                      </div>
                    </button>
                    <div className="dropdown-content ">
                      <Link href="/about#about_hero">What is Ideopedia ?</Link>
                      <Link href="/about#mission">Mission</Link>
                      <Link href="/about#vission">Vision</Link>
                      <Link href="/about#what">What we do ?</Link>
                    </div>
                  </div>
                </li>
                {getCookie("user") ? (
                  <li className="text-black flex justify-center">
                    <div className="dropdown">
                      <button
                        className="dropbtn flex items-center justify-center"
                       
                      >
                        My Account
                        <div className="mt-2 ml-2">
                          <Image src={drop} />
                        </div>
                      </button>
                      <div className="dropdown-content ">
                        <Link href={`/dashboard/${getCookie("user")}`}>
                          Dashboard
                        </Link>
                        <Link href={`/read/${getCookie("user")}`}>
                          Read Ideos
                        </Link>
                        <Link href={`/mylib/${getCookie("user")}`}>
                          My Library
                        </Link>
                      </div>
                    </div>
                  </li>
                ) : null}

                <li className="text-black flex justify-center">
                  <div className="dropdown">
                    <button
                      className="dropbtn flex items-center justify-center"
                      
                    >
                      Team{" "}
                      <div className="mt-2 ml-2">
                        <Image src={drop} />
                      </div>
                    </button>
                    <div className="dropdown-content">
                      <Link href="/teams#bod">Board of Directors</Link>
                      <Link href="/teams#bod">Founders</Link>
                    </div>
                  </div>
                </li>
                <li className="text-black flex justify-center">
                  <Link href="/contact">
                    <a>Contact Us</a>
                  </Link>
                </li>
                {getCookie("user") ? (
                  <li className="text-white flex justify-center">
                    <div className="log">
                      <button onClick={function handleLogout(){
                        removeCookies('user')
                        router.push("/")
                      }} >Logout</button>
                    </div> 
                  </li>
                ) : (
                  <li className="text-white flex justify-center">
                    <Link href="/login">
                      <div className="log">
                        <button>Login</button>
                      </div>
                    </Link>
                  </li>
                )}

                {getCookie("user") ? null : (
                  <li className="text-white flex justify-center">
                    <Link href="/signup">
                      <div className="sin">
                        <button>Signup</button>
                      </div>
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
