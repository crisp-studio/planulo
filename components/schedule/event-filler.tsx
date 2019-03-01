import React from "react";
import { Box, TextInput, TextArea } from "grommet";
import ColorPicker from "./color-picker";
import styled from "styled-components";

// ? Was ist das Problem hier mit den Typee?

class EventFiller extends React.Component {
  render() {
    return (
      <Box
        background="white"
        elevation="medium"
        pad="xsmall"
        height="200px"
        width="260px"
        border={{ side: "left", color: "#FFF3BF", size: "medium" }}
        round="xsmall"
        justify="between"
        margin={{ bottom: "small", left: "small", right: "small" }}
        animation="slideRight"
      >
        <Box>
          <TitleInput id="title" placeholder="Add title" plain />
          <DescriptionInput
            id="description"
            placeholder="Add a description"
            plain
            fill
          />
        </Box>

        <Box direction="row-responsive" align="center">
          <LocationInput id="location" placeholder="location" plain />
          <ColorPicker />
        </Box>
      </Box>
    );
  }
}

const TitleInput = styled(TextInput)`
  color: "brand-8";
`;

const DescriptionInput = styled(TextArea)`
  font-size: 0.875rem;
`;

const LocationInput = styled(TextInput)`
  font-size: 0.875rem;
`;

export default EventFiller;
