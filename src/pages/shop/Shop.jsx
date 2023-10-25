// Hooks
import { useState } from "react";
// Components
import Checkout from "./components/checkout/Checkout";
import Menu from "./components/menu/Menu";
// Context
import { CheckoutContext, CartContext } from "./context/context";
import { Helmet } from "react-helmet";

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
    </>
  );
}

export default Store;
