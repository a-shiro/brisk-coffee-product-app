// Hooks
import { useContext } from "react";
// Resources
import cartIcon from "../../../../../resources/icons/shopping-cart.png";
import cartWhiteIcon from "../../../../../resources/icons/shopping-cart-white.png";
// Context
import { CartContext } from "../../../context/context";
// CSS
import styles from "./Cart.module.css";

function Cart() {
  const { cart, setCartInterfaceVisible } = useContext(CartContext);

  const openCartInterface = () => {
    setCartInterfaceVisible(true);
  };

  return (
    <div className={styles.cart}>
      {cart.quantity > 0 ? (
        <button onClick={openCartInterface}>
          <span>View cart &nbsp;</span>
          <div className={styles.flexContainer}>
            <img src={cartWhiteIcon} alt="cart-icon" />
            <span>{cart.quantity}</span>
          </div>
        </button>
      ) : (
        <div className={`${styles.flexContainer} ${styles.empty}`}>
          <img src={cartIcon} alt="cart-icon" />
          <span>{cart.quantity}</span>
        </div>
      )}
    </div>
  );
}

export default Cart;
