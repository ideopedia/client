import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import log from "../public/logo.svg";
<<<<<<< HEAD

function NavLink({ to, children, classes }) {
  return (
    <a href={to} className={`mx-4 ${classes}`}>
      {children}
    </a>
  );
}

function MobileNav({ open, setOpen }) {
  return (
    <div
      className={`absolute top-0 left-0 h-100 w-screen bg-white transform ${
        open ? "-translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out filter drop-shadow-md navc`}
    >
      <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20"></div>
      <div className=" flex flex-col z-100 ml-4 ">
        <Link
          className="text-xl font-medium my-4"
          href="/testimonials"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          <div className="mob ">Our Readers</div>
        </Link>
        <Link
          className="text-xl font-medium my-4"
          href="/about"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          <div className="mob">About Us</div>
        </Link>
        <Link
          className="text-xl font-medium my-4"
          href="/teams"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          <div className="mob">Team</div>
        </Link>
        <Link
          className="text-xl font-medium my-4"
          href="/contact"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          <div className="mob">Contact us</div>
        </Link>
        <Link
          className="text-xl font-medium my-4"
          href="/login"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          <div className="mob mlog">
            <div className="log ">
              <button>Login</button>
=======
export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full bg-white drop-shadow">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-1   md:py-1 md:block">
              <Link href="/" className="cursor-pointer">
                <Image src={log} className="cursor-pointer" />
              </Link>
              <div className="md:hidden">
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
>>>>>>> 9f94fd7da7402414d135ddf2e2f9fbbb85e8d9b3
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center  pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
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
                    <a>Contact US</a>
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
<<<<<<< HEAD

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex filter drop-shadow-md bg-white px-4 py-4 h-20 items-center">
      <MobileNav open={open} setOpen={setOpen} />
      <div className="w-3/12 flex items-center">
        <Link href="/" className="text-2xl font-semibold cursor-pointer">
          <Image src={log} className="cursor-pointer" />
        </Link>
      </div>
      <div className="w-9/12 flex justify-end items-center">


        
        <div
          className=" flex relative w-8 h-8 flex-col justify-between items-center lg:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <span
            className={`h-1 w-full bg-green-600 rounded-lg transform transition duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-3.5" : ""
            }`}
          />
          <span
            className={`h-1 w-full bg-green-600 rounded-lg transition-all duration-300 ease-in-out ${
              open ? "w-0" : "w-full"
            }`}
          />
          <span
            className={`h-1 w-full bg-green-600 rounded-lg transform transition duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-3.5" : ""
            }`}
          />
        </div>

        <div className="hidden lg:flex">
          <NavLink to="/testimonials" classes="mt-[7px]">Our Readers</NavLink>
          <NavLink to="/about" classes="mt-[7px]">About Us</NavLink>
          <NavLink to="/teams" classes="mt-[7px]">Team</NavLink>
          <NavLink to="/contact" classes="mt-[7px]">Contact us</NavLink>
          <NavLink to="/login">
            <div className="log">
              <button>Login</button>
            </div>
          </NavLink>
          <NavLink to="/signup">
            <div className="sin">
              <button>Signup</button>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
=======
>>>>>>> 9f94fd7da7402414d135ddf2e2f9fbbb85e8d9b3
