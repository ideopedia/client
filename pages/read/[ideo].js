import { useRouter } from "next/router";

const Ideo = () => {
  const router = useRouter();
  const { ideo } = router.query;

  return <p>{ideo}</p>;
};

export default Ideo;
