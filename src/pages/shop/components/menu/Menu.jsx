// Hooks
import { useContext, useState } from "react";
// Components
import MenuSection from "./components/menuSection/MenuSection";
import Nav from "./components/nav/Nav";
import BuyMenu from "./components/buyMenu/BuyMenu";
import CartMenu from "./components/cartMenu/CartMenu";
// CSS
import styles from "./Menu.module.css";
// Context
import { BuyMenuContext } from "./context/context";
import { CartContext } from "../../context/context";

function Menu() {
  const [buyMenuActive, setBuyMenuActive] = useState(false);
  const [activeProduct, setActiveProduct] = useState();

  const { cartMenuActive } = useContext(CartContext);

  return (
    <>
      <header className={styles.header}>
        <h1>Our Products</h1>
      </header>

      <BuyMenuContext.Provider
        value={{ activeProduct, setActiveProduct, setBuyMenuActive }}
      >
        <section className={styles.menu}>
          <Nav />

          <MenuSection
            sectionTitle="Coffee"
            description="Experience Brisk Coffee's signature heartwarming drinks."
            collectionName="coffeeProducts"
          />
          <MenuSection
            sectionTitle="Other"
            description="Other products by Brisk Coffee or partner companies"
            collectionName="otherProducts"
          />
        </section>

        {buyMenuActive && (
          <BuyMenu
            activeProduct={activeProduct}
            setBuyMenuActive={setBuyMenuActive}
          />
        )}

        {cartMenuActive && <CartMenu />}
      </BuyMenuContext.Provider>
    </>
  );
}

export default Menu;
