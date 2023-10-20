// Components
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Shop from "../pages/shop/Shop";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import NotFound from "../pages/notFound/NotFound";

function RoutesManager() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/order-online" element={<Shop />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default RoutesManager;
