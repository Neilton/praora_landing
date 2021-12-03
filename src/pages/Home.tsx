import About from "../components/About";
import IsolateContact from "../components/Contact/IsolateContact";
import Hero from "../components/Hero";
import Manage from "../components/Manage";
import Market from "../components/Market";
import More from "../components/More";
import Resources from "../components/Resources";
import Team from "../components/Team";
import Roadmap from "../components/Roadmap";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Resources />
      <Market />
      <Manage />
      <More />
      <Roadmap />
      <Team />
      <IsolateContact />
    </>
  );
}

export default Home;
