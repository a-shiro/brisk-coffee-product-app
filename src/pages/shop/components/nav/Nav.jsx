// Hooks
import { useContext } from "react";
// CSS
import styles from "./Nav.module.css";
// Resources
import cartIcon from "../../../../resources/icons/shopping-cart.png";
// Context
import { CartContext } from "../../context/context";

function Nav() {
  const { cart } = useContext(CartContext);

  return (
    <nav className={styles.nav}>
      <ul className={styles.optionsList}>
        <li className={styles.active}>Coffee</li>
        <li>Other</li>
      </ul>

      <div className={styles.cart}>
        <img src={cartIcon} alt="cart" />
        <span>{cart.quantity}</span>
      </div>
    </nav>
  );
}

export default Nav;
