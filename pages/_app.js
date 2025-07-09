import "../styles/globals.css";
import StickyFooter from "../components/StickyFooter";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <StickyFooter />
    </>
  );}