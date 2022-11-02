import React from "react";
import { useState, useEffect } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import Axios from "axios";
import Loader from "../../components/loader";
import ReadCard from "../../components/readcard";
const Book = () => {
  const [data, setData] = useState(false);
  const [inpt, setInpt] = useState("");

  useEffect(() => {
    Axios.post("https://ideo-books.herokuapp.com/listBooks").then((data) => {
      setData(data.data);
    });
    console.log(data);
  }, []);
  return (
    <div>
      {data ? (
        <div>
          
          <input type="text" placeholder="djfnsldkjfnl" onChange={(e)=>setInpt(e.target.value)} />
          {console.log(data[0].Book_Name.toLowerCase())}
          {data.map((val) => (
            val.Book_Name.match(inpt)?
            (<ReadCard
              image={val.Cover_image}
              name={val.Book_Name}
              author={val.Book_Author}
              read={val.read_time}
              listen={val.listen_time}
            />): (console.log("update"))
          ))}
        </div>
      ) : (
        <div className="load">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default Book;
