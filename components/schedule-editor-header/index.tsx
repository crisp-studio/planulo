import ProjectPicker from "./project-picker";
import React from "react";
import ShareButton from "./share-button";
import { Box } from "grommet";
import { Container, Logo } from "../common";
import { Home } from "react-feather";

const ScheduleEditorHeader = () => (
  <Container background="brand">
    <Box align="center" justify="between" direction="row" pad="medium">
      <Box direction="row" gap="20px">
        <Home color="#fff" />
        <ProjectPicker />
      </Box>
      <Box>
        <Logo color="brand-1" />
      </Box>
      <Box alignContent="center">
        <ShareButton />
      </Box>
    </Box>
  </Container>
);

export default ScheduleEditorHeader;
