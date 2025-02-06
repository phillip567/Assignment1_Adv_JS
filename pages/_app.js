import '../styles/style.css'; // Import your CSS file
import { AppProps } from 'next/app'; // Import AppProps from next/app

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;