// Hooks
import { useState } from "react";
// Components
import MenuSection from "./components/menuSection/MenuSection";
import Nav from "./components/nav/Nav";
import OrderModal from "./components/orderModal/OrderModal";
// CSS
import styles from "./Store.module.css";
// Context
import { OrderModalContext, ProductContext } from "./context/context";

function Store() {
  const [modalVisible, setModalVisible] = useState(false);
  const [activeProduct, setActiveProduct] = useState();

  return (
    <>
      <header className={styles.header}>
        <h1>Our Products</h1>
      </header>

      <section className={styles.menu}>
        <Nav />

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

      {modalVisible && (
        <OrderModal
          activeProduct={activeProduct}
          setModalVisible={setModalVisible}
        />
      )}
    </>
  );
}

export default Store;
