import React from "react";
import { Box, Anchor } from "grommet";
import Link from "next/link";

const Logo = ({ ...props }) => (
  <Box>
    <Link href="/">
      <Anchor color="brand-5" size="large" {...props}>
        PLANULO
      </Anchor>
    </Link>
  </Box>
);

export default Logo;
