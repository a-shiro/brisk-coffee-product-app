// Hooks
import { useContext, useEffect, useRef } from "react";
// Components
import ProductList from "./components/productList/ProductList";
import CheckoutBtn from "./components/checkoutBtn/CheckoutBtn";
// CSS
import styles from "./CartMenu.module.css";
// Resources
import closeIcon from "../../../../resources/icons/close.png";
// Context
import { CartContext } from "../../context/context";

function CartMenu() {
  const modal = useRef();

  const { cart, setCartMenuActive } = useContext(CartContext);

  const changeBuyMenuHeight = () => {
    return (modal.current.style.minHeight = `${window.innerHeight}px`);
  };

  const closeCartMenu = () => {
    // Bad practice, refactor scroll disabling
    document.body.classList.remove(styles.disableScroll);

    return setCartMenuActive(false);
  };

  useEffect(() => {
    changeBuyMenuHeight();

    window.addEventListener("resize", changeBuyMenuHeight);
    // Bad practice, refactor scroll disabling
    document.body.classList.add(styles.disableScroll);

    return () => {
      window.removeEventListener("resize", changeBuyMenuHeight);
    };
  }, []);

  return (
    <>
      <div onClick={closeCartMenu} className={styles.overlay}></div>

      <div ref={modal} className={styles.modal}>
        <header className={styles.header}>
          <h1>My Order ({cart.quantity})</h1>
          <button onClick={closeCartMenu}>
            <img className={styles.icon} src={closeIcon} alt="close" />
          </button>
        </header>

        <ProductList />
        <CheckoutBtn />
      </div>
    </>
  );
}

export default CartMenu;
