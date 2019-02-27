import RangePicker from "./range-picker";
import React from "react";
import { Box, Heading } from "grommet";

const ScheduleHeader = () => (
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
);

export default ScheduleHeader;
