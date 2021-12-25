import '../styles/globals.css';
import '../styles/Form.css';
import Head from 'next/head';
import Navbar from '../component/Navbar/Navbar';
import Footer from '../component/Footer/Footer';
import axios from 'axios';
import IndexProvider from '../context/index.context';
import Wrapper from '../component/Wrapper';

function MyApp({ Component, pageProps }) {
  axios.defaults.baseURL = 'https://hack-back-aces.herokuapp.com';

  return (
    <>
      <Head>
        <title>E-HEALTH CARES</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@500&family=Roboto:wght@100&display=swap'
          rel='stylesheet'
        ></link>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link
          href='https://fonts.googleapis.com/css2?family=PT+Sans&display=swap'
          rel='stylesheet'
        ></link>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap'
          rel='stylesheet'
        />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap'
          rel='stylesheet'
        ></link>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap'
          rel='stylesheet'
        ></link>
      </Head>{' '}
      <IndexProvider>
        <Navbar />

        <Wrapper>
          <Component {...pageProps} />
        </Wrapper>
        <Footer />
      </IndexProvider>
    </>
  );
}

export default MyApp;
