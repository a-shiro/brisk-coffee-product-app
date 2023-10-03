// Components
import { Link } from "react-router-dom";
// CSS
import styles from "./Contact.module.css";
// Static Files
import servingAtCounterImage from "../../resources/images/serving_at_counter.webp";
import MessageForm from "./components/form/Form";
import { useState } from "react";
import Modal from "./components/modal/Modal";

function Contact() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
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
            <address>500 Terry Francine Street San Francisco, CA 94158</address>
            <p>Monday - Thursday 7am - 7pm</p>
            <p>Friday - Saturday 7am - 5pm</p>
            <p>Sunday - Closed</p>
          </div>
        </div>

        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423284.04410038335!2d-118.74137328084828!3d34.020608469112666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2z0JvQvtGBINCQ0L3QtNC20LXQu9C40YEsINCa0LDQu9C40YTQvtGA0L3QuNGPLCDQodGK0LXQtNC40L3QtdC90Lgg0YnQsNGC0Lg!5e0!3m2!1sus!2sus!4v1690873809592!5m2!1sus!2sus"
            title="map"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </section>
  );
}

export default Contact;
