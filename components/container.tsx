import { Box } from "grommet";
import React from "react";

// ? Aktuell übergebe ich nur background als prop, wie kann ich es ermöglichen alle passenden Props von Box in Container verfügbar zu machen?

const Container = ({ children, background }) => (
  <Box direction="column" align="center" background={background}>
    <Box width="xlarge">{children}</Box>
  </Box>
);

export default Container;
