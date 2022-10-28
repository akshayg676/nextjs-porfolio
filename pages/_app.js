import { Layout } from "../components";
import "../styles/globals.css";
import CustomCursor from "../components/CustomCursor";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <CustomCursor />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
