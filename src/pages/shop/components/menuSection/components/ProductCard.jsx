// CSS
import styles from "./ProductCard.module.css";

function ProductCard({ brand, flavour, price, storeImage }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardInfo}>
        <h4>{brand}</h4>
        <p>{flavour}</p>
        <span>${price.toFixed(2)}</span>
      </div>

      <div className={styles.cardImageContainer}>
        <img src={storeImage} alt="product" />
      </div>
    </div>
  );
}

export default ProductCard;
