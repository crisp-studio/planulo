import React from "react";
import { Box, DropButton, Heading, Button, Text } from "grommet";
import { ChevronDown } from "react-feather";

const DropContent = () => (
  <Box pad="small">
    <Text>Siemens Design Sprint</Text>
    <Text>Siemens Design Sprint</Text>
    <Text>Siemens Design Sprint</Text>
  </Box>
);

class ProjectPicker extends React.Component {
  state = {
    currentProject: "Siemens Design Sprint",
    open: undefined
  };

  onClose = () => {
    this.setState({ open: false });
    setTimeout(() => this.setState({ open: undefined }), 1);
  };

  render() {
    const { currentProject, open } = this.state;

    return (
      <Box>
        <DropButton
          plain
          reverse
          icon={<ChevronDown color="#fff" />}
          label={<Text color="light-1">{currentProject}</Text>}
          dropAlign={{ top: "bottom", right: "right" }}
          open={open}
          onClose={() => this.setState({ open: undefined })}
          dropContent={<DropContent />}
        />
      </Box>
    );
  }
}

export default ProjectPicker;
