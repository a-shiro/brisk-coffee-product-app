// Components
import Cart from "./components/Cart";
// CSS
import styles from "./Nav.module.css";

function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.optionsList}>
        <li className={styles.active}>Coffee</li>
        <li>Other</li>
      </ul>

      <Cart />
    </nav>
  );
}

export default Nav;
