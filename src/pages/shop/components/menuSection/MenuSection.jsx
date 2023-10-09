// Hooks
import { useEffect, useState } from "react";
// Components
import ProductCard from "./components/ProductCard";
// CSS
import styles from "./MenuSection.module.css";
// Data
import { fetchDocs } from "../../../../services/queries";

function MenuSection({ product, description, collectionName }) {
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
        <h3>{product}</h3>
        <p>{description}</p>
      </hgroup>

      <div className={styles.cardsContainer}>
        {products?.map((product) => {
          return (
            <ProductCard
              brand={product.brand}
              flavour={product.flavour}
              price={product.price}
              storeImage={product.storeImageUrl}
              key={product.id}
            />
          );
        })}
      </div>
    </section>
  );
}

export default MenuSection;
