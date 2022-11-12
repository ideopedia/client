import React from "react";
import { Navbar } from "flowbite-react";
import { Dropdown } from "flowbite-react";
import Image from "next/image";
import log from "../public/logo2.svg";

const Newnavbar = () => {
  return (
    <div>
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="/">
          <Image
            src={log} alt="Ideopedia Logo"
          />
        </Navbar.Brand>
        <div className="flex md:order-2">
          <button className="bg-[#2CB67D] rounded-md font-semibold py-2 px-6 mx-2 text-[#fff]" onClick="">Login</button>
          <button className="border-2 border-[#2CB67D] rounded-md font-semibold py-2 px-5 mx-1 text-[#2CB67D]" onClick="">Signup</button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/" className="font-semibold">About</Navbar.Link>
          <Navbar.Link href="/" className="font-semibold">Services</Navbar.Link>
          <Navbar.Link href="/" className="font-semibold">Pricing</Navbar.Link>
          <Navbar.Link href="/" className="font-semibold">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Newnavbar;
