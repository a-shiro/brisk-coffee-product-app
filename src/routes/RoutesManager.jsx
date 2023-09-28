// Components
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Store from "../pages/shop/Store";
import About from "../pages/about/About";

function RoutesManager() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/order-online" element={<Store />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default RoutesManager;
