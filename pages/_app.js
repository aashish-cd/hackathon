import '../styles/globals.css';
import '../styles/Form.css';
import Head from 'next/head';
import Navbar from '../component/Navbar/Navbar';
import axios from 'axios';

function MyApp({ Component, pageProps }) {
  axios.defaults.baseURL = 'http://192.168.18.118:5000'
  return (
    <>
      <Head>
        <title>DandT</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossorigin
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@500&family=Roboto:wght@100&display=swap'
          rel='stylesheet'
        ></link>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=PT+Sans&display=swap'
          rel='stylesheet'
        ></link>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap'
          rel='stylesheet'
        />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap'
          rel='stylesheet'
        ></link>
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
