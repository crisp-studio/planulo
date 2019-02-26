import React from "react";
import App, { Container, NextAppContext } from "next/app";
import { Grommet } from "grommet";
// import "inter-ui/inter.css";
import planulo from "../theme";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }: NextAppContext) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Grommet theme={planulo} full>
          <Component {...pageProps} />
        </Grommet>
      </Container>
    );
  }
}

export default MyApp;
