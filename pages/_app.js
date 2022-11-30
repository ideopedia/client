import "../styles/globals.css";
import "swiper/css/bundle";
import Script from "next/script";
import Head from "next/head";
import { useRouter } from "next/router";
import Radium, { StyleRoot } from "radium";
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Ideopedia</title>
        <meta name="description" content="ideopedia" />
        <link rel="icon" href="/tablogo.svg" />
      </Head>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
      />

      <Script id="google-analytics-script" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
          page_path: window.location.pathname,
          });
    `}
      </Script>
      <StyleRoot>
        <Component
          className="font-poppins"
          key={router.asPath}
          {...pageProps}
        />
      </StyleRoot>
    </>
  );
}

export default MyApp;
