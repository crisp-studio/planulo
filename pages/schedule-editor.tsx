import Layout from "../components/layout";
import RangePicker from "../components/range-picker";
import SEHeader from "../components/se-header";
import { Box, Grid, Heading } from "grommet";
import Container from "../components/container";
import styled from "styled-components";

const ScheduleEditor = () => (
  <Layout>
    <Box direction="column" background="light-1">
      <SEHeader />
      <Container>
        <Box
          background="white"
          basis="full"
          height="large"
          elevation="xsmall"
        />
      </Container>
    </Box>
  </Layout>
);

export default ScheduleEditor;
