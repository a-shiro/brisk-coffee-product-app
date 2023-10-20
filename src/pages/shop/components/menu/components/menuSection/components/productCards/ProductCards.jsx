// Component
import ProductCard from "./components/productCard/ProductCard";
import LoadingSkeleton from "./components/loadingSkeleton/LoadingSkeleton";
// CSS
import styles from "./ProductCards.module.css";

function ProductCards({ products }) {
  return (
    <>
      {!products && <LoadingSkeleton />}

      <div className={styles.cardsContainer}>
        {products?.map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </div>
    </>
  );
}

export default ProductCards;
