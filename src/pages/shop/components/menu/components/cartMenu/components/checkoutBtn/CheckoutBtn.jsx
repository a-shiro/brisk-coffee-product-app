// Hooks
import { useContext } from "react";
// CSS
import styles from "./CheckoutBtn.module.css";
// Context
import { CheckoutContext } from "../../../../../../context/context";

function CheckoutBtn({ closeCartMenu }) {
  const { setCheckoutActive } = useContext(CheckoutContext);

  const openCheckout = () => {
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
