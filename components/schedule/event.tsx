import React, { createRef } from "react";
import { Box, Text, Drop } from "grommet";
import moment from "moment";
import EventFiller from "./event-filler";

class Event extends React.Component {
  state = {
    openDrop: false
  };

  onCloseDrop = () => this.setState({ openDrop: false });
  onOpenDrop = () => this.setState({ openDrop: true });

  targetRef = createRef();

  render() {
    console.log();
    return (
      <>
        <Box
          ref={this.targetRef}
          onClick={this.onOpenDrop}
          justify="between"
          pad="xsmall"
          height="100%"
          width="100%"
        >
          <Box>
            <Text size="small" weight="bold">
              {this.props.event.title}
            </Text>
            <Text size="small">
              {moment(this.props.event.start).format("ha")}
            </Text>
          </Box>
          <Text size="xsmall">Location</Text>
        </Box>
        {this.state.openDrop && (
          <Drop
            onClickOutside={this.onCloseDrop}
            onEsc={this.onCloseDrop}
            align={{ top: "top", left: "right" }}
            target={this.targetRef.current}
            plain
          >
            <EventFiller />
          </Drop>
        )}
      </>
    );
  }
}

export default Event;
