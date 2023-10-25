// Hooks
import { useState } from "react";
// Components
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import MessageForm from "./components/form/Form";
import Modal from "./components/modal/Modal";
import Map from "./components/map/Map";
// CSS
import styles from "./Contact.module.css";
// Static Files
import servingAtCounterImage from "../../resources/images/serving_at_counter.webp";

function Contact() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Helmet>
        <title>Brisk - Contact</title>
      </Helmet>

      <section className={styles.section}>
        <section className={styles.row}>
          <div className={styles.flexContainer}>
            <div className={styles.companyContactContainer}>
              <h2>Contact us</h2>
              <address>
                <p>
                  Email: <Link>briskcoffee@email.com</Link>
                </p>
                <p>
                  Phone: <Link>123-456-7890</Link>
                </p>
              </address>
              <p>We want to hear from you</p>

              <MessageForm setModalVisible={setModalVisible} />
              {modalVisible && <Modal setModalVisible={setModalVisible} />}
            </div>
          </div>

          <div className={styles.imageContainer}>
            <img src={servingAtCounterImage} alt="serving-at-counter" />
          </div>
        </section>

        <section className={styles.row}>
          <div className={styles.flexContainer}>
            <div className={styles.companyInfoContainer}>
              <h2>Address & Hours</h2>
              <address>
                500 Terry Francine Street San Francisco, CA 94158
              </address>
              <p>Monday - Thursday 7am - 7pm</p>
              <p>Friday - Saturday 7am - 5pm</p>
              <p>Sunday - Closed</p>
            </div>
          </div>

          <Map />
        </section>
      </section>
    </>
  );
}

export default Contact;
