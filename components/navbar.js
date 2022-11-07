import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import log from "../public/logo.svg";

function NavLink({ to, children }) {
  return (
    <a href={to} className={`mx-4`}>
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
          <div className="mob">Our Readers</div>
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
            </div>
          </div>
        </Link>
        <Link
          className="text-xl font-medium my-4"
          href="/signup"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          <div className="mob mlog">
            <div className="sin ">
              <button>Signup</button>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

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
          <NavLink to="/testimonials">Our Readers</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/teams">Team</NavLink>
          <NavLink to="/contact">Contact us</NavLink>
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
