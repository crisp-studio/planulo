import React from "react";
import { Button as GrommetButton } from "grommet";
import Link from "next/link";
import styled from "styled-components";

// ? How important is it to use the next link? How can I make it work here?

const Button = ({ ...props }) => (
  <Link>
    <GrommetButton {...props} />
  </Link>
);

const StyledButton = styled(Button)`
  text-transform: uppercase;
  font-weight: bold;
`;

export default StyledButton;
