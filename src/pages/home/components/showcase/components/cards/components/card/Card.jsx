import { Link } from "react-router-dom";
// CSS
import styles from "./Card.module.css";

function Card({ showcaseImage, flavour }) {
  return (
    <div className={styles.card}>
      <Link to="/order-online">
        <img src={showcaseImage} alt="product" />
      </Link>
      <h3>{flavour}</h3>
    </div>
  );
}

export default Card;
