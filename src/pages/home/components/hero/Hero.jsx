// CSS
import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.section}>
      <hgroup className={styles.container}>
        <h1>Coffee.</h1>
        <p>Treasure life's simple joys</p>
      </hgroup>
    </section>
  );
}

export default Hero;
