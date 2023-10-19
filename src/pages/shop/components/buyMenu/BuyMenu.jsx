// Hooks
import { useState } from "react";
// Components
import AddQuantityControls from "./components/addQuantityControls/AddQuantityControls";
import AddOrderBtn from "./components/addOrderBtn/AddOrderBtn";
// CSS
import styles from "./BuyMenu.module.css";
// Resources
import closeIcon from "../../../../resources/icons/close.png";

function BuyMenu({ activeProduct, setBuyMenuVisible }) {
  const [currentQuantity, setCurrentQuantity] = useState(1);

  const closeBuyMenu = () => {
    return setBuyMenuVisible(false);
  };

  return (
    <>
      <div onClick={closeBuyMenu} className={styles.overlay}></div>

      <div className={styles.modal}>
        <div className={styles.imageContainer}>
          <img src={activeProduct.storeImageUrl} alt="product" />

          <button onClick={closeBuyMenu}>
            <img className={styles.icon} src={closeIcon} alt="close" />
          </button>
        </div>

        <div className={styles.itemDescription}>
          <h1>
            {activeProduct.brand} - {activeProduct.flavour}
          </h1>
          <p>{activeProduct.description}</p>
        </div>

        <AddQuantityControls
          currentQuantity={currentQuantity}
          setCurrentQuantity={setCurrentQuantity}
        />
        <AddOrderBtn
          currentQuantity={currentQuantity}
          closeBuyMenu={closeBuyMenu}
        />
      </div>
    </>
  );
}

export default BuyMenu;
