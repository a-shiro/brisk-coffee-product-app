// Hooks
import { useEffect, useState } from "react";
// Components
import ProductCards from "./components/productCards/ProductCards";
// CSS
import styles from "./MenuSection.module.css";
// Data
import { fetchDocs } from "../../../../services/queries";

function MenuSection({ sectionTitle, description, collectionName }) {
  const [products, setProducts] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDocs(collectionName);

      setProducts(data);
    };

    fetchData();
  }, []);

  return (
    <section className={styles.section}>
      <hgroup className={styles.header}>
        <h3>{sectionTitle}</h3>
        <p>{description}</p>
      </hgroup>

      <ProductCards products={products} />
    </section>
  );
}

export default MenuSection;
