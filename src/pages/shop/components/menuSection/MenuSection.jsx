// Components
import ProductCard from "./components/ProductCard";
// CSS
import styles from "./MenuSection.module.css";

function MenuSection({ product, description }) {
  // ToDo: Insert API call for cards data

  return (
    <section className={styles.section}>
      <hgroup className={styles.header}>
        <h3>{product}</h3>
        <p>{description}</p>
      </hgroup>

      <div className={styles.cardsContainer}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
}

export default MenuSection;
