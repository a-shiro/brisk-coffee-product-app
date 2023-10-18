// Hooks
import { useState } from "react";
// Components
import MenuSection from "./components/menuSection/MenuSection";
import Nav from "./components/nav/Nav";
import OrderModal from "./components/orderModal/OrderModal";
import CartInterface from "./components/cartInterface/CartInterface";
// CSS
import styles from "./Store.module.css";
// Context
import {
  OrderModalContext,
  ProductContext,
  CartContext,
} from "./context/context";

function Store() {
  const [modalVisible, setModalVisible] = useState(false);
  const [activeProduct, setActiveProduct] = useState();
  const [cart, setCart] = useState({ quantity: 0, subtotal: 0, items: {} });
  const [cartInterfaceVisible, setCartInterfaceVisible] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <h1>Our Products</h1>
      </header>

      <section className={styles.menu}>
        <CartContext.Provider value={{ cart, setCart }}>
          <Nav setCartInterfaceVisible={setCartInterfaceVisible} />
        </CartContext.Provider>

        <OrderModalContext.Provider value={setModalVisible}>
          <ProductContext.Provider value={setActiveProduct}>
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
          </ProductContext.Provider>
        </OrderModalContext.Provider>
      </section>

      <CartContext.Provider value={{ cart, setCart }}>
        {modalVisible && (
          <OrderModal
            activeProduct={activeProduct}
            setModalVisible={setModalVisible}
          />
        )}

        {cartInterfaceVisible && (
          <CartInterface
            cart={cart}
            setCartInterfaceVisible={setCartInterfaceVisible}
          />
        )}
      </CartContext.Provider>
    </>
  );
}

export default Store;
