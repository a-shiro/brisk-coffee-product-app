// Hooks
import { useContext } from "react";
// CSS
import styles from "./CheckoutBtn.module.css";
// Context
import {
  CartContext,
  CheckoutContext,
} from "../../../../../../context/context";

function CheckoutBtn({ closeCartMenu }) {
  const { setCheckoutActive } = useContext(CheckoutContext);
  const { cart } = useContext(CartContext);

  const openCheckout = () => {
    if (cart.quantity === 0) {
      return closeCartMenu();
    }

    closeCartMenu();
    return setCheckoutActive(true);
  };

  return (
    <div className={styles.checkoutContainer}>
      <button onClick={openCheckout}>Continue to Checkout</button>
    </div>
  );
}

export default CheckoutBtn;
