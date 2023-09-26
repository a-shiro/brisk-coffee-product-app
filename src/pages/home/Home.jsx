// Components
import Hero from "./components/hero/Hero";
import Showcase from "./components/showcase/Showcase";
import Paralax from "./components/paralax/Paralax";
import About from "./components/about/About";
// Static files
import background1 from "../../resources/images/cans_background_1.jpg";
import background2 from "../../resources/images/cans_background_2.jpg";

function Home() {
  return (
    <>
      <Hero />
      <Showcase />
      <Paralax image={background1} />
      <About />
      <Paralax image={background2} />
    </>
  );
}

export default Home;
