// CSS
import styles from "./ProductCard.module.css";
// Temporary static files
import can from "./temp/can_nitro_store.webp";

function ProductCard() {
  return (
    <div className={styles.card}>
      <div className={styles.cardInfo}>
        <h4>Brisk Coffee</h4>
        <p>Nitro</p>
        <span>$9.00</span>
      </div>

      <div className={styles.cardImageContainer}>
        <img src={can} alt="product" />
      </div>
    </div>
  );
}

export default ProductCard;
