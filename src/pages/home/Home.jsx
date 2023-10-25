// Components
import { Helmet } from "react-helmet-async";
import Hero from "./components/hero/Hero";
import Showcase from "./components/showcase/Showcase";
import Paralax from "./components/paralax/Paralax";
import About from "./components/about/About";
import FadingOverlay from "../../components/common/fadingOverlay/FadingOverlay";
// Static files
import background1 from "../../resources/images/cans_background_1.jpg";
import background2 from "../../resources/images/cans_background_2.jpg";

function Home() {
  return (
    <>
      <Helmet>
        <title>Brisk - Home</title>
      </Helmet>

      <Hero />
      <Showcase />
      <Paralax image={background1} />
      <About />
      <Paralax image={background2} />

      <FadingOverlay />
    </>
  );
}

export default Home;
