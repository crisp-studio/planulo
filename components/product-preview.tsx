import React from "react";
import { Image } from "grommet";
import { Container } from "../components/common";

const ProductPreview = () => (
  <Container>
    <Image src="/static/product-screenshot.png" fit="contain" />
  </Container>
);

export default ProductPreview;
