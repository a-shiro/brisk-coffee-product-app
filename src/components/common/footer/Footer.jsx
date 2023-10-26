// Components
import { Link } from "react-router-dom";
import NewsletterForm from "./components/newsletterForm/NewsletterForm";
import NewsletterModal from "./components/newsletterModal/NewsletterModal";
// Hooks
import { useState } from "react";
// CSS
import styles from "./Footer.module.css";
// Resources
import facebookIcon from "../../../resources/icons/facebook.png";
import twitterIcon from "../../../resources/icons/twitter.png";
import instagramIcon from "../../../resources/icons/instagram.png";

function Footer() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <footer className={styles.footer}>
      <h4>Subscribe for updates</h4>

      <NewsletterForm setModalVisible={setModalVisible} />
      {modalVisible && <NewsletterModal setModalVisible={setModalVisible} />}

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

        <div className={styles.contributors}>
          <p>
            Digital Art by:{" "}
            <Link to="https://linktr.ee/palahanski">Luchezar Palahanski</Link>
          </p>

          <p>
            Code by: <Link to="https://github.com/a-shiro">Alek Mitov</Link>
          </p>
        </div>

        <p className={styles.copyright}>Copyright &copy; Brisk 2023</p>
      </div>
    </footer>
  );
}

export default Footer;
