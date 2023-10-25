// Components
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
// CSS
import styles from "./NotFound.module.css";

function NotFound() {
  return (
    <>
      <Helmet>
        <title>Brisk - 404</title>
      </Helmet>

      <section className={styles.section}>
        <h1>404</h1>
        <p>Oops! It looks like the page you're looking for doesn't exist.</p>

        <button>
          <Link to="/">Back Home</Link>
        </button>
      </section>
    </>
  );
}

export default NotFound;
