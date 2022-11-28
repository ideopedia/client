import React from "react";
import Image from "next/image";
import del from "../public/delete.svg";
import { useRouter } from "next/router";
import Axios from "axios";
import { useEffect, useState } from "react";
const NotesContainer = (props) => {
  const router = useRouter()
  return (
    <div>
      <div className="w-[220px] h-[180px] rounded-lg bg-[#F9D371] overflow-hidden">
        <div className="flex p-2 pt-4">
          {/* <div>
            <input
              style={{ marginRight: "6px" }}
              className="form-check-input appearance-none h-4 w-4 border border-black  rounded-sm bg-white checked:bg-black checked:border-black focus-within:hidden transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="checkbox"
              value=""
              checked={props.val}
              id="flexCheckDefault"
            ></input>
          </div> */}
          <div className="flex justify-center items-center text-center text-black text-[18px] pl-2">
            {props.info}
          </div>
        </div>
        <div
          className="relative -bottom-[5.5rem] -right-[11.2rem] cursor-pointer "
          onClick={function handleDel() {
            Axios.post("/api/UserNotes/deleteNotes", {
              _id: props.nick,
            });
            router.reload();
          }}
        >
          <Image src={del} />
        </div>
      </div>
    </div>
  );
};

export default NotesContainer;
