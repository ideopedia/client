import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Loader from "../../components/loader";
import Axios from "axios";
const Ideo = () => {
  const router = useRouter();
  const { ideo } = router.query;

  const [data, setData] = useState(false);
  useEffect(() => {
    fetch("/api/bookSummary/findSummary", {
      method: "POST",

      body: JSON.stringify({ Ideo_id: Number(ideo) }),

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

export default Ideo;
