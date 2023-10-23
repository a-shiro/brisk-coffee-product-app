// Hooks
import { useContext } from "react";
// Context
import { CartContext } from "../../../../context/context";
// CSS
import styles from "./OrderPreview.module.css";

function OrderPreview() {
  const { cart } = useContext(CartContext);

  return (
    <div className={styles.cart}>
      <header className={styles.header}>
        <h3>My Order ({cart.quantity})</h3>
      </header>

      <ul className={styles.items}>
        {Object.values(cart.items).map(({ product, quantity }) => {
          return (
            <li key={product.id}>
              <p>
                {product.brand} - {product.flavour} (x{quantity})
              </p>
              <div>
                <span>${(quantity * product.price).toFixed(2)}</span>
              </div>
            </li>
          );
        })}
      </ul>

      <div className={styles.costContainer}>
        <p>Total</p>
        <p>${cart.subtotal.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default OrderPreview;
