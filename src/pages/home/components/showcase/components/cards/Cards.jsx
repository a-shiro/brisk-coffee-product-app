// CSS
import styles from "./Cards.module.css";
// Hooks
import { useState, useEffect } from "react";
// Data
import { fetchDocs } from "../../../../../../services/queries";
// Components
import Card from "./components/card/Card";
import LoadingSkeleton from "./components/loadingSkeleton/LoadingSkeleton";

function Cards() {
  const [products, setProducts] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDocs("coffeeProducts");

      setProducts(data);
    };

    fetchData();
  }, []);

  return (
    <>
      {!products && <LoadingSkeleton />}

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
    </>
  );
}

export default Cards;
