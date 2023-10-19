// Hooks
import { useContext } from "react";
// CSS
import styles from "./ProductCard.module.css";
// Context
import { BuyMenuContext } from "../../../../../../context/context";

function ProductCard({ product }) {
  const { setActiveProduct, setBuyMenuVisible } = useContext(BuyMenuContext);

  const openBuyMenu = () => {
    setActiveProduct(product);
    setBuyMenuVisible(true);
    return;
  };

  return (
    <div onClick={openBuyMenu} className={styles.card}>
      <div className={styles.cardInfo}>
        <h4>{product.brand}</h4>
        <p>{product.flavour}</p>
        <span>${product.price.toFixed(2)}</span>
      </div>

      <div className={styles.cardImageContainer}>
        <img src={product.storeImageUrl} alt="product" />
      </div>
    </div>
  );
}

export default ProductCard;
