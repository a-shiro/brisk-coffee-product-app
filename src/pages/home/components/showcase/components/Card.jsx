// CSS
import styles from "../Showcase.module.css";

function Card({ image, title }) {
  return (
    <div className={styles.card}>
      <img src={image} alt="product" />
      <h3>{title}</h3>
    </div>
  );
}

export default Card;
