// Components
import { Link } from "react-router-dom";
import Cards from "./components/cards/Cards";
// CSS
import styles from "./Showcase.module.css";

function Showcase() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Triple Can Treat</h2>

      <Cards />

      <Link className={styles.orderBtn} to="/order-online">
        Order Online
      </Link>
    </section>
  );
}

export default Showcase;
