import React from "react";
import Loader from "../components/loader";
import Axios from "axios";
import { useState, useEffect } from "react";
const Data = () => {
  const [data, setData] = useState(false);

  useEffect(() => {
    Axios.post("https://ideopedia-books.herokuapp.com/findBook",{Book_Name: "THE CODE BREAKER"}).then((data) => {
      setData(data.data);
    });
    console.log(data);
  }, []);
  return (
    <div>
      {data ? (
        <div>
          {console.log(data)}
          {data[0]}
        </div>
      ) : (
        <div>
          <Loader />
        </div>
      )}
    </div>
  );
};

export default Data;
