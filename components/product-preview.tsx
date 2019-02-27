import React from "react";
import { Box, Image } from "grommet";
import { Container } from "../components/common";

const ProductPreview = () => (
  <Container>
    <Image src="/static/product-screenshot.png" fit="contain" />
  </Container>
);

export default ProductPreview;
