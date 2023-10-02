// Components
import Modal from "./components/Modal";
// Hooks
import { useState } from "react";
// CSS
import styles from "./Footer.module.css";
// Static files
import facebookIcon from "../../resources/icons/facebook.png";
import twitterIcon from "../../resources/icons/twitter.png";
import instagramIcon from "../../resources/icons/instagram.png";

function Footer() {
  const [email, setEmail] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const changeHandler = (e) => {
    setEmail(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setEmail("");
    setModalVisible(true);
  };

  return (
    <footer className={styles.footer}>
      <h4>Subscribe for updates</h4>

      <form onSubmit={submitHandler} className={styles.newsletterForm}>
        <div>
          <label htmlFor="email">Enter your email here</label>
          <input
            onChange={changeHandler}
            value={email}
            id="email"
            type="email"
            required
          />
        </div>
        <button>Submit</button>
      </form>

      {modalVisible && <Modal setModalVisible={setModalVisible} />}

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
