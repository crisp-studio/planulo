import Header from "../components/header";
import { NextFC } from "next";
import { Box, Button, Heading, Grommet } from "grommet";
import { Notification } from "grommet-icons";

const AppBar = props => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="medium"
    style={{ zIndex: "1" }}
    {...props}
  />
);

const About: NextFC = () => (
  <div>
    <Header />
    <h1>About</h1>
    <p>About, yeah!</p>
    <Box fill>
      <AppBar>
        <Heading level="3" margin="none">
          My App
        </Heading>
        <Button icon={<Notification />} onClick={() => {}} />
      </AppBar>
      <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
        <Box flex align="center" justify="center">
          app body
        </Box>
        <Box
          width="medium"
          background="light-2"
          elevation="small"
          align="center"
          justify="center"
        >
          sidebar
        </Box>
      </Box>
    </Box>
  </div>
);

About.getInitialProps = async () => {
  return {
    test: "Data"
  };
};

export default About;
