// CSS
import styles from "./Footer.module.css";
// Static files
import facebookIcon from "../../resources/icons/facebook.png";
import twitterIcon from "../../resources/icons/twitter.png";
import instagramIcon from "../../resources/icons/instagram.png";

function Footer() {
  return (
    <footer className={styles.footer}>
      <h4>Subscribe for updates</h4>

      <form className={styles.newsletterForm}>
        <div>
          <label htmlFor="email">Enter your email here</label>
          <input id="email" type="email" required />
        </div>
        <button>Submit</button>
      </form>

      <div>
        <p className={styles.listTitle}>Follow us:</p>
        <ul className={styles.socialsList}>
          <li>
            <img src={instagramIcon} alt="instagram" />
          </li>
          <li>
            <img src={twitterIcon} alt="twitter" />
          </li>
          <li>
            <img src={facebookIcon} alt="facebook" />
          </li>
        </ul>
        <p className={styles.copyright}>&copy; 2023 by Brisk Coffee</p>
      </div>
    </footer>
  );
}

export default Footer;
