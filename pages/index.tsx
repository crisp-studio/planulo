import Link from "next/link";
import { Button } from "grommet";
import { Header } from "../components/common";
import EventFiller from "../components/schedule/event-filler";

const Index = () => (
  <div>
    <Header />
    <p>Hello Next.js</p>
    <Link href="/about">
      <Button label="About" />
    </Link>
    <EventFiller />
  </div>
);

export default Index;
