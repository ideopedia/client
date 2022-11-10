import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Loader from "../../components/loader";
import Axios from "axios";
const Ideo = () => {
  const router = useRouter();
  const { ideo } = router.query;
  const [data, setData] = useState(false);
  useEffect(() => {
    Axios.post("https://ideopedia-books.herokuapp.com/findpreBook", {
      id: Number(ideo),
    }).then((data) => {
      setData(data.data);
    });
    console.log(data);
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
