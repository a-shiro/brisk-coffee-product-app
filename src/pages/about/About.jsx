// CSS
import styles from "./About.module.css";
// Static Files
import makingCoffeeImage from "../../resources/images/making_coffee.webp";
import pouringCoffeeImage from "../../resources/images/pouring_coffee.webp";

function About() {
  return (
    <section className={styles.section}>
      <section className={styles.row}>
        <div className={styles.flexContainer}>
          <div className={styles.contentContainer}>
            <h2>About Our Company</h2>

            <p>
              <b>Brisk Coffee</b> is a dynamic coffee company with a rich
              history that spans decades. Since its inception, the company has
              been a trailblazer in the world of coffee, setting new standards
              for quality and taste. Founded by a group of coffee enthusiasts in
              the heart of a small town, Brisk Coffee started as a humble
              neighborhood cafe in 1985. Over the years, their passion for
              coffee led them on a remarkable journey of exploration and
              discovery.
            </p>
            <p>
              Every cup is a journey, and they take pride in their meticulous
              roasting process, ensuring each batch is rich in flavor and aroma.
              Beyond their dedication to exceptional coffee, Brisk Coffee
              embraces eco-conscious practices, utilizing eco-friendly packaging
              and promoting sustainable farming practices. They are more than
              just a coffee brand; they are a symbol of the modern coffee
              movement, blending tradition with innovation to bring you the
              perfect cup of coffee every time.
            </p>
          </div>
        </div>

        <div className={styles.imageContainer}>
          <img src={makingCoffeeImage} alt="making-coffee" />
        </div>
      </section>

      <section className={styles.row}>
        <div className={styles.flexContainer}>
          <div className={styles.contentContainer}>
            <h2>Constantly Innovating</h2>

            <p>
              What sets our coffee apart is not only its exceptional quality but
              also constant innovation and commitment to health-conscious
              consumers. Our products are not just rich and flavorful; they are
              also sugar-free, ensuring you can savor the delightful coffee
              experience without compromising on your dietary preferences.
            </p>
            <p>
              As you're reading this, we're excited to announce that we are is
              tirelessly working behind the scenes to bring you even more
              exciting products to enhance your coffee experience. Our
              dedication to innovation and quality means that we're constantly
              exploring new flavors, blends, and brewing methods. Stay tuned for
              upcoming releases that will expand our product line, catering to
              diverse tastes and preferences. Stay in the know and never miss
              out on our latest coffee offerings, promotions, and exclusive
              updates. Subscribe to our newsletter now for a daily dose of
              coffee inspiration delivered straight to your inbox.
            </p>
          </div>
        </div>

        <div className={styles.imageContainer}>
          <img src={pouringCoffeeImage} alt="pouring-coffee" />
        </div>
      </section>
    </section>
  );
}

export default About;
