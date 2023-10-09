// CSS
import styles from "../Showcase.module.css";

function Card({ showcaseImage, flavour }) {
  return (
    <div className={styles.card}>
      <img src={showcaseImage} alt="product" />
      <h3>{flavour}</h3>
    </div>
  );
}

export default Card;
