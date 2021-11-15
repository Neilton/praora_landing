import { Container } from "react-bootstrap";
import About from "../components/About";
import HomeContact from "../components/Contact/HomeContact";
import Hero from "../components/Hero";
import Manage from "../components/Manage";
import Market from "../components/Market";
import More from "../components/More";
import Resources from "../components/Resources";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Resources />
      <Market />
      <Manage />
      <More />
      <HomeContact />
    </>
  );
}

export default Home;
