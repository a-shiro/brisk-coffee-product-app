// CSS
import styles from "./Nav.module.css";
// Static files
import cartIcon from "../../../../resources/icons/shopping-cart.png";

function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.optionsList}>
        <li className={styles.active}>Coffee</li>
        <li>Other</li>
      </ul>

      <div className={styles.cart}>
        <img src={cartIcon} alt="cart" />
        <span>0</span>
      </div>
    </nav>
  );
}

export default Nav;
