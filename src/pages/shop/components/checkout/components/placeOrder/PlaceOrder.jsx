// CSS
import styles from "./PlaceOrder.module.css";

function PlaceOrder() {
  // click button manages state in component and then changes the parent's state

  return (
    <div className={styles.addressContainer}>
      <h3>4. Review and Place Order</h3>

      <p>Please review the details above and place the order.</p>

      <button>Submit Order</button>
    </div>
  );
}

export default PlaceOrder;
