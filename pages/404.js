import React from "react";
import Image from "next/image";
import error from "../public/error.svg";
import logo from "../public/logo.svg";
import Link from "next/link";
const Custom = () => {
  return (
    <div className="p-4">
      <div className="flex justify-start items-center cursor-pointer">
        <Link href="/">
          <Image src={logo} />
        </Link>
      </div>
      <div className="p-9">
        <div className="flex justify-center items-center ">
          <Image src={error} width={400} height={400} />
        </div>
        <div className="flex justify-center items-center ">
          <span className="text-xl flex justify-center items-center">
            Something went worng.
          </span>
        </div>
        <div className="pt-7 flex justify-center items-center ">
          <div className="p-4">
            <div className="log ">
              <Link href="/">
                <button>Home</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Custom;
