import Header from "../components/header";
import { NextFC } from "next";

const About: NextFC = () => (
  <div>
    <Header />
    <h1>About</h1>
    <p>About, yeah!</p>
  </div>
);

About.getInitialProps = async () => {
  return {
    test: "Data"
  };
};

export default About;
