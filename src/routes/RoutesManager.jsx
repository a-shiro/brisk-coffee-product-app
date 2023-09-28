// Components
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Store from "../pages/shop/Store";

function RoutesManager() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/order-online" element={<Store />} />
    </Routes>
  );
}

export default RoutesManager;
