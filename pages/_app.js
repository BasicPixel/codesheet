import { ChakraProvider, Container } from "@chakra-ui/react";

import { extendTheme } from "@chakra-ui/react";

import "../styles/globals.css";

import "@fontsource/fira-code";
import "@fontsource/source-sans-pro";

import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const theme = extendTheme({
  fonts: {
    heading: "Source Sans Pro, sans-serif",
    body: "Source Sans Pro, sans-serif",
    mono: "Fira Code, monospace",
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>codesheet</title>
        <meta
          name="description"
          content="a collection of cheatsheets for programming languages,
          libraries, dev tools and more."
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Container maxW={"full"} p={0}>
        <Navbar />
        <Container py={"4"}>
          <Component {...pageProps} />
        </Container>
        <Footer />
      </Container>
    </ChakraProvider>
  );
}

export default MyApp;
