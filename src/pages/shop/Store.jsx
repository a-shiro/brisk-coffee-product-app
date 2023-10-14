// Components
import MenuSection from "./components/menuSection/MenuSection";
import Nav from "./components/nav/Nav";
// CSS
import styles from "./Store.module.css";

function Store() {
  return (
    <>
      <header className={styles.header}>
        <h1>Our Products</h1>
      </header>

      <section className={styles.menu}>
        <Nav />

        <MenuSection
          sectionTitle="Coffee"
          description="Experience Brisk Coffee's signature heartwarming drinks."
          collectionName="coffeeProducts"
        />

        <MenuSection
          sectionTitle="Other"
          description="Other products by Brisk Coffee or partner companies"
          collectionName="otherProducts"
        />
      </section>
    </>
  );
}

export default Store;
