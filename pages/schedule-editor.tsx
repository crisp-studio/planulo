import Schedule from "../components/schedule";
import ScheduleEditorHeader from "../components/schedule-editor-header";
import ScheduleHeader from "../components/schedule-header";
import { Box } from "grommet";
import { Container } from "../components/common";

const ScheduleEditor = () => (
  <Box direction="column" background="light-1">
    <Container background="brand">
      <ScheduleEditorHeader />
      <ScheduleHeader />
    </Container>
    <Container background="light-1">
      <Schedule />
    </Container>
  </Box>
);

export default ScheduleEditor;
