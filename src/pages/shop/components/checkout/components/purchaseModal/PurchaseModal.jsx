// Hooks
import { useContext } from "react";
// CSS
import styles from "./PurchaseModal.module.css";
// Static files
import tick from "../../../../../../resources/icons/tick.png";
// Context
import { CartContext, CheckoutContext } from "../../../../context/context";

function PurchaseModal({ setPurchaseModalActive }) {
  const { setCheckoutActive } = useContext(CheckoutContext);
  const { setCart } = useContext(CartContext);

  const close = () => {
    setCart({ quantity: 0, subtotal: 0, items: {} });
    setPurchaseModalActive(false);
    setCheckoutActive(false);
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <img src={tick} className={styles.tick} alt="tick" />

        <h1>Success!</h1>
        <p>We hope you enjoy the products as much as we enjoyed serving you.</p>

        <button onClick={close}>Close</button>
      </div>
    </div>
  );
}

export default PurchaseModal;
