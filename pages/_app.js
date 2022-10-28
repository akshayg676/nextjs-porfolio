import { CustomCursor, Layout } from "../components";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <CustomCursor />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
