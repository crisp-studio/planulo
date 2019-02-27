import React from "react";
import { Box, Heading, Text } from "grommet";
import { Plus } from "react-feather";
import { Button } from "../components/common";

const Intro = () => (
  <Box justify="center" align="center" pad={{ top: "xlarge" }}>
    <Heading textAlign="center" color="brand-8">
      Create a workshop schedule and keep your guests on track
    </Heading>
    <Button
      href="/schedule-editor"
      label={<Text color="accent-1">Create Schedule</Text>}
      icon={<Plus color="#FFFBEA" />}
      color="accent-3"
      reverse
      primary
    />
  </Box>
);

export default Intro;
