import Link from "next/link";
import Header from "../components/header";

import { Button } from "grommet";

const Index = () => (
  <div>
    <Header />
    <p>Hello Next.js</p>
    <Link href="/about">
      <Button label="About" />
    </Link>
  </div>
);

export default Index;
