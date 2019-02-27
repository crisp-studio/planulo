import { Box, BoxProps } from "grommet";
import React from "react";

const Container: React.FC<BoxProps> = ({ children, ...props }) => (
  <Box direction="column" align="center" {...props}>
    <Box width="xlarge">{children}</Box>
  </Box>
);

export default Container;
