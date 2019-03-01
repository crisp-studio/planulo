import React from "react";
import { DropButton, Image, Box } from "grommet";

class ColorPicker extends React.Component {
  renderColorMenu = () => (
    <Box>
      <p>Colors!</p>
    </Box>
  );

  render() {
    return (
      <DropButton dropContent={this.renderColorMenu()} alignSelf="center">
        <Image
          src="/static/color-picker.svg"
          fit="contain"
          height="18px"
          width="18px"
        />
      </DropButton>
    );
  }
}

export default ColorPicker;
