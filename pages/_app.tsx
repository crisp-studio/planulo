import React from "react";
import App, { Container, NextAppContext } from "next/app";
import { Grommet } from "grommet";
import { grommet } from "grommet/themes";

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
        <Grommet theme={grommet}>
          <Component {...pageProps} />
        </Grommet>
      </Container>
    );
  }
}

export default MyApp;
