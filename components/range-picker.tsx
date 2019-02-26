import React from "react";
import { Box, Calendar, DropButton, Text } from "grommet";
import { ChevronDown } from "react-feather";

// ? Passt der State so mit startDate, endDate und open?
// ? Was wird in der onClose() Methode mit setTimeout gemacht?
// ? Wie würde man RangePicker und State propen?

// ! Hier sind noch einige Sachen aus der Demo eingebaut
// ! In der Demo war es nur aus ausgelegt, das ein Datum in den State gesetzt wird

class RangePicker extends React.Component {
  state = {
    startDate: undefined,
    endDate: undefined,
    open: undefined
  };

  onClose = () => {
    this.setState({ open: false });
    setTimeout(() => this.setState({ open: undefined }), 1);
  };

  onSelect = startDate => this.setState({ startDate, open: false });

  render() {
    const { startDate, endDate, open } = this.state;

    return (
      <Box align="center">
        <DropButton
          open={open}
          onClose={() => this.setState({ open: false })}
          onOpen={() => this.setState({ open: true })}
          dropContent={
            <Calendar
              startDate={startDate}
              endDate={endDate}
              onSelect={this.onSelect}
              range
            />
          }
        >
          <Box>
            <Text>
              {startDate
                ? new Date(startDate).toLocaleDateString()
                : "Select date"}
            </Text>
            <ChevronDown />
          </Box>
        </DropButton>
      </Box>
    );
  }
}

export default RangePicker;
