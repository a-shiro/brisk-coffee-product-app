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
    </>
  );
}

export default ProductCards;
