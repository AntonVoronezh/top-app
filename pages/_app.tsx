import { AppProps } from 'next/dist/shared/lib/router/router';
import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>MyTop</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_DOMAIN + router.asPath} />
        <meta property="og:locale" content="ru_RU" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
