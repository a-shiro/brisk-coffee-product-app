// Components
import { Link } from "react-router-dom";
import Card from "./components/Card";
// CSS
import styles from "./Showcase.module.css";
// Temp files
import image_1 from "./temp/can_vanilla.webp";
import image_2 from "./temp/can_nitro.webp";
import image_3 from "./temp/can_black.webp";

function Showcase() {
  // ToDo: Insert API call for cards data

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Triple Can Treat</h2>

      <div className={styles.cards}>
        <Card image={image_1} title="Vanilla" />
        <Card image={image_2} title="Nitro" />
        <Card image={image_3} title="Black" />
      </div>

      <Link className={styles.orderBtn} to="/order-online">
        Order Online
      </Link>
    </section>
  );
}

export default Showcase;
