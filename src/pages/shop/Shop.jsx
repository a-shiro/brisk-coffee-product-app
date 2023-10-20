// Hooks
import { useState } from "react";
// Components
import Checkout from "./components/checkout/Checkout";
import Menu from "./components/menu/Menu";
// CSS
import styles from "./Shop.module.css";
// Context
import { CheckoutContext } from "./context/context";

function Store() {
  const [checkoutActive, setCheckoutActive] = useState();

  // ToDo: Transfer cart + context here

  return (
    <CheckoutContext.Provider value={{ checkoutActive, setCheckoutActive }}>
      {checkoutActive ? <Checkout /> : <Menu />}
    </CheckoutContext.Provider>
  );
}

export default Store;
