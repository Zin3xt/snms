import "../styles/globals.css";
import "../styles/theme.css";
import Layout from "../components/layout";
import Router from "next/router";
import { ThemeProvider } from "next-themes";

import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress
//Route Events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
