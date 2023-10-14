// Hooks
import { useRef, useState } from "react";
// Components
import { Link } from "react-router-dom";
import { Squash as Hamburger } from "hamburger-react";
// CSS
import styles from "./Nav.module.css";

function Nav() {
  const [hamburgerToggled, sethamburgerToggled] = useState(false);

  const list = useRef();
  const overlay = useRef();

  const toggleMenu = () => {
    sethamburgerToggled(!hamburgerToggled);
    list.current.classList.toggle(styles.active);
    overlay.current.classList.toggle(styles.active);

    // Bad practice, refactor scroll disabling
    document.body.classList.toggle(styles.disableScroll);
  };

  const closeMenu = () => {
    sethamburgerToggled(false);
    list.current.classList.remove(styles.active);
    overlay.current.classList.remove(styles.active);

    // Bad practice, refactor scroll disabling
    document.body.classList.remove(styles.disableScroll);
  };

  return (
    <nav className={styles.navigation}>
      <Link className={styles.brand} to="/">
        Brisk
      </Link>

      <Hamburger
        onToggle={toggleMenu}
        toggled={hamburgerToggled}
        easing="ease-in"
        size={26}
      />
      <div onClick={closeMenu} ref={overlay} className={styles.overlay}></div>

      <ul ref={list} className={styles.navList}>
        <li>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/order-online" onClick={closeMenu}>
            Order online
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={closeMenu}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
