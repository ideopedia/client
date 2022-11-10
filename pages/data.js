import React from "react";

import Loader from "../components/loader";
import { useState, useEffect } from "react";
const Data = () => {
  const [data, setData] = useState(false);
  useEffect(() => {
    fetch("/api/bookCard/listBookcard", {
      method: "POST",

      body: JSON.stringify({ Password: "Ideopedia@001" }),

      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        //console.log(data)
      });
  }, []);
  return (
    <div>
      {data ? (
        <div>{console.log(data)}</div>
      ) : (
        <div>
          <Loader />
        </div>
      )}
    </div>
  );
};

export default Data;
