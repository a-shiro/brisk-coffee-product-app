// Hooks
import { useEffect, useState } from "react";
// Components
import { Link } from "react-router-dom";
import Card from "./components/Card";
// CSS
import styles from "./Showcase.module.css";
// Data
import { fetchDocs } from "../../../../services/queries";

function Showcase() {
  const [products, setProducts] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDocs("coffeeProducts");

      setProducts(data);
    };

    fetchData();
  }, []);

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Triple Can Treat</h2>

      <div className={styles.cards}>
        {products?.map((product) => {
          return (
            <Card
              flavour={product.flavour}
              showcaseImage={product.showcaseImageUrl}
              key={product.id}
            />
          );
        })}
      </div>

      <Link className={styles.orderBtn} to="/order-online">
        Order Online
      </Link>
    </section>
  );
}

export default Showcase;
