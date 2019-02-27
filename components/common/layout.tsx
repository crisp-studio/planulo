import planulo from "../../theme";
import React from "react";
import { Box, Grommet } from "grommet";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
`;

const Layout: React.FC = ({ children }) => (
  <Grommet theme={planulo}>
    <GlobalStyle />
    <main>
      <Box>{children}</Box>
    </main>
  </Grommet>
);

export default Layout;
