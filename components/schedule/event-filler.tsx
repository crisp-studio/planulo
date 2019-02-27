import React from "react";
import { Box, TextInput, TextArea } from "grommet";
import { Droplet } from "react-feather";
import styled from "styled-components";

// ? Was ist das Problem hier mit den Typee?

class EventFiller extends React.Component {
  render() {
    return (
      <Box
        background="white"
        elevation="xsmall"
        pad="small"
        height="200px"
        width="260px"
        border={{ side: "left", color: "orange", size: "medium" }}
        round="xsmall"
        justify="around"
      >
        <TitleInput id="title" placeholder="Add title" plain />
        <DescriptionInput
          id="description"
          placeholder="Add a description"
          plain
        />
        <Box direction="row-responsive">
          <LocationInput id="location" placeholder="location" plain />
          <Droplet />
        </Box>
      </Box>
    );
  }
}

const TitleInput = styled(TextInput)``;

const DescriptionInput = styled(TextArea)`
  font-size: 0.875rem;
`;

const LocationInput = styled(TextInput)`
  font-size: 0.875rem;
`;

export default EventFiller;
