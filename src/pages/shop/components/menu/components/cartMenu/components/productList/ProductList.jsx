// Hooks
import { useContext } from "react";
// CSS
import styles from "./ProductList.module.css";
// Context
import { CartContext } from "../../../../../../context/context";

function ProductList() {
  const { cart, setCart } = useContext(CartContext);

  const removeItem = (e) => {
    const itemId = e.target.id;
    const item = cart.items[itemId];

    const updatedSubtotal = cart.subtotal - item.product.price * item.quantity;
    const updatedQuantity = cart.quantity - item.quantity;

    const updatedList = Object.fromEntries(
      Object.entries(cart.items).filter(([key, value]) => key !== itemId)
    );

    setCart((prev) => ({
      ...prev,
      quantity: updatedQuantity,
      subtotal: updatedSubtotal,
      items: updatedList,
    }));
  };

  return (
    <ul className={styles.items}>
      {Object.values(cart.items).map(({ product, quantity }) => {
        return (
          <li key={product.id}>
            <p>
              {product.brand} - {product.flavour} (x{quantity})
            </p>
            <div>
              <span>${(quantity * product.price).toFixed(2)}</span>

              <button id={product.id} onClick={removeItem}>
                Remove
              </button>
            </div>
          </li>
        );
      })}

      {cart.quantity === 0 && (
        <li className={styles.emptyMessage}>
          <p>Browse our menu and start adding items to your order</p>
        </li>
      )}

      <li className={styles.subtotal}>
        <p>Subtotal</p>
        <p>${cart.subtotal.toFixed(2)}</p>
      </li>
    </ul>
  );
}

export default ProductList;
