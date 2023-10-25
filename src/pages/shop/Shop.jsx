// Hooks
import { useState } from "react";
// Components
import { Helmet } from "react-helmet-async";
import Checkout from "./components/checkout/Checkout";
import Menu from "./components/menu/Menu";
import FadingOverlay from "../../components/common/fadingOverlay/FadingOverlay";
// Context
import { CheckoutContext, CartContext } from "./context/context";

function Store() {
  const [checkoutActive, setCheckoutActive] = useState();

  const [cart, setCart] = useState({ quantity: 0, subtotal: 0, items: {} });
  const [cartMenuActive, setCartMenuActive] = useState(false);

  return (
    <>
      <Helmet>
        <title>Brisk - Store</title>
      </Helmet>

      <CheckoutContext.Provider value={{ checkoutActive, setCheckoutActive }}>
        <CartContext.Provider
          value={{ cart, setCart, cartMenuActive, setCartMenuActive }}
        >
          {checkoutActive ? <Checkout /> : <Menu />}
        </CartContext.Provider>
      </CheckoutContext.Provider>

      <FadingOverlay />
    </>
  );
}

export default Store;
