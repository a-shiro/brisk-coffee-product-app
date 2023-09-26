// Components
import { Link } from "react-router-dom";
// CSS
import styles from "./About.module.css";
// Static files
import display from "../../../../resources/images/cups_display.webp";
import drinking from "../../../../resources/images/person_drinking.webp";

function About() {
  return (
    <section className={styles.section}>
      <div className={styles.row}>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <h3>About Our Coffee</h3>
            <p>
              Our passion for coffee drives us to source the finest beans from
              around the world and craft them into rich, aromatic brews. From
              the first sip to the last drop, our commitment to quality and
              flavor shines through. Join us on a journey through the world of
              coffee, one cup at a time. Taste the difference with Brisk Coffee
              today.
            </p>
            <Link to="/about">Read more</Link>
          </div>
        </div>

        <div>
          <img className={styles.image} src={drinking} alt="person-drinking" />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <h3>The Process</h3>
            <p>
              Our process begins with meticulously sourced beans, but it doesn't
              stop there. We've harnessed the power of state-of-the-art roasting
              and brewing techniques to unlock flavors you've never experienced
              before. Our commitment to excellence and the pursuit of perfection
              drives us to explore new horizons in coffee-making.
            </p>
            <Link to="/order-online">Show now</Link>
          </div>
        </div>

        <div>
          <img className={styles.image} src={display} alt="cups-display" />
        </div>
      </div>
    </section>
  );
}

export default About;
