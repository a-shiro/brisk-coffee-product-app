// Components
import { Link } from "react-router-dom";
// CSS
import styles from "./NotFound.module.css";

function NotFound() {
  return (
    <section className={styles.section}>
      <h1>404</h1>
      <p>Oops! It looks like the page you're looking for doesn't exist.</p>

      <button>
        <Link to="/">Back Home</Link>
      </button>
    </section>
  );
}

export default NotFound;
