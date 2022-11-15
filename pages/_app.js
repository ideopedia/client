import "../styles/globals.css";
import "swiper/css/bundle";
import { useRouter } from "next/router";
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Component className="font-poppins" key={router.asPath} {...pageProps} />
  );
}

export default MyApp;
