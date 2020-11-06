import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import Head from "next/head";
import { RecoilRoot } from "recoil";
import theme from "../theme";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/styles.css" />
      </Head>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <CSSReset />
          <Component {...pageProps} />
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
