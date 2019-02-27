import Link from "next/link";
import { Box, Button, Text } from "grommet";
import { Logo, Container } from "../common";

const Header = () => (
  <Container>
    <Box
      direction="row-responsive"
      justify="between"
      pad={{ vertical: "medium" }}
    >
      <Logo />
      <Box direction="row" gap="xsmall">
        <Link href="/log-in">
          <Button label="Log In" />
        </Link>
        <Link href="/sign-up">
          <Button label={<Text color="brand-1">Sign up</Text>} primary />
        </Link>
      </Box>
    </Box>
  </Container>
);

export default Header;
