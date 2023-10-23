// CSS
import styles from "./PlaceOrder.module.css";

function PlaceOrder({ placeOrderActive, setPurchaseModalActive }) {
  const submitOrder = () => {
    setPurchaseModalActive(true);
  };

  return (
    <div className={styles.placeOrderContainer}>
      <h3>4. Review and Place Order</h3>

      {placeOrderActive && (
        <>
          <p>Please review the details above and place the order.</p>
          <button onClick={submitOrder}>Submit Order</button>
        </>
      )}
    </div>
  );
}

export default PlaceOrder;
