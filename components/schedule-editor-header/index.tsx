import ProjectPicker from "./project-picker";
import React from "react";
import ShareButton from "./share-button";
import { Box, Text } from "grommet";
import { Container } from "../common";
import { Home } from "react-feather";

const ScheduleEditorHeader = () => (
  <Container background="brand">
    <Box align="center" justify="between" direction="row" pad="medium">
      <Box direction="row" gap="20px">
        <Home color="#fff" />
        <ProjectPicker />
      </Box>
      <Box>
        <Text color="light-2" size="large" weight="bold">
          PLANULO
        </Text>
      </Box>
      <Box alignContent="center">
        <ShareButton />
      </Box>
    </Box>
  </Container>
);

export default ScheduleEditorHeader;
