import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Main page</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
