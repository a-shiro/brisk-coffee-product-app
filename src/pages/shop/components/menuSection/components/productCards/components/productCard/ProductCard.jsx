// Hooks
import { useContext } from "react";
// CSS
import styles from "./ProductCard.module.css";
// Context
import {
  OrderModalContext,
  ProductContext,
} from "../../../../../../context/context";

function ProductCard({ product }) {
  const setModalVisible = useContext(OrderModalContext);
  const setActiveProduct = useContext(ProductContext);

  const openModal = () => {
    setActiveProduct(product);
    setModalVisible(true);
    return;
  };

  return (
    <div onClick={openModal} className={styles.card}>
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
