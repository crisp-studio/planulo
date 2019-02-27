import React from "react";
import { Box, Calendar, DropButton, Text } from "grommet";
import { ChevronDown } from "react-feather";

// ! Hier sind noch einige Sachen aus der Demo eingebaut
// ! In der Demo war es nur aus ausgelegt, das ein Datum in den State gesetzt wird

interface State {
  startDate?: Date;
  endDate?: Date;
  open: boolean;
}

class RangePicker extends React.Component {
  state: State = {
    startDate: undefined,
    endDate: undefined,
    open: false
  };

  onClose = () => {
    this.setState({ open: false });
  };

  // ! Muss noch geändert werden
  onSelect = (startDate: Date) => this.setState({ startDate, open: false });

  render() {
    const { startDate, endDate, open } = this.state;

    return (
      <Box align="center">
        <DropButton
          open={open}
          onClose={() => this.setState({ open: false })}
          onOpen={() => this.setState({ open: true })}
          dropContent={<Calendar onSelect={console.log} range />}
        >
          <Box>
            <Text>
              {startDate && endDate ? (
                <>
                  <p>{new Date(startDate).toLocaleDateString()}</p>
                  <p>{new Date(endDate).toLocaleDateString()}</p>
                </>
              ) : (
                "Select date"
              )}
            </Text>
            <ChevronDown />
          </Box>
        </DropButton>
      </Box>
    );
  }
}

export default RangePicker;
