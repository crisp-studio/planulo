import Link from "next/link";
import Header from "../components/header";

const Index = () => (
  <div>
    <Header />
    <p>Hello Next.js</p>
    <Link href="/about">
      <button>About</button>
    </Link>
  </div>
);

export default Index;
