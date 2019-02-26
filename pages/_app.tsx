import React from "react";
import App, { Container, NextAppContext } from "next/app";
import { Grommet } from "grommet";

const theme = {
  global: {
    colors: {
      brand: "#228BE6"
    },
    font: {
      family: "Roboto",
      size: "14px",
      height: "20px"
    }
  }
};

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
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
    />;

    return (
      <Container>
        <Grommet theme={theme} full>
          <Component {...pageProps} />
        </Grommet>
      </Container>
    );
  }
}

export default MyApp;
