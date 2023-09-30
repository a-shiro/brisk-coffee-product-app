// Components
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Store from "../pages/shop/Store";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";

function RoutesManager() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/order-online" element={<Store />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default RoutesManager;
