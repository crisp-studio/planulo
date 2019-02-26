import Container from "../components/container";
import ProjectPicker from "../components/project-picker";
import RangePicker from "../components/range-picker";
import React from "react";
import ShareButton from "../components/share-button";
import { Box, Heading, Text } from "grommet";
import { Home } from "react-feather";

const SEHeader = () => (
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
    <Box
      background="#F3F9FD"
      pad="medium"
      direction="row"
      justify="between"
      elevation="xsmall"
      round={{ size: "xsmall", corner: "top" }}
    >
      <Box align="start">
        <Heading level="2" size="small" margin={{}}>
          Siemens Design Sprint
        </Heading>
      </Box>

      <RangePicker />
    </Box>
  </Container>
);

export default SEHeader;
