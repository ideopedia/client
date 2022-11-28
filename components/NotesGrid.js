import React from "react";
import Image from "next/image";
import del from "../public/delete.svg";
import { useRouter } from "next/router";
import Axios from "axios";
import { useEffect, useState } from "react";
const NotesGrid = (props) => {
  const router = useRouter()
  return (
    <div className="w-[100%]">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <div className="p-4 flex justify-start items-center">
          <span className="text-[16px] text-center ">{props.info}</span>
        </div>
        <div
          className=" p-4 flex justify-end items-center "
          onClick={function handleDel() {
            Axios.post("/api/UserNotes/deleteNotes", {
              _id: props.nick,
            });
            router.reload();
          }}
        >
          <Image src={del} className="cursor-pointer" />
        </div>
      </div>
      {/* <div className="flex items-center p-4 w-full h-auto">
        <div>
          <input
            style={{ marginRight: "6px" }}
            className="form-check-input appearance-none h-4 w-4 border border-black rounded-sm bg-white checked:bg-black checked:border-black focus-within:hidden transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            checked={props.val}
          ></input>
        </div>
      </div> */}
    </div>
  );
};

export default NotesGrid;
