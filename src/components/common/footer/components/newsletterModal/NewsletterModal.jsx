// CSS
import styles from "./NewsletterModal.module.css";
// Static files
import tick from "../../../../../resources/icons/tick.png";

function NewsletterModal({ setModalVisible }) {
  const close = () => {
    setModalVisible(false);
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <img src={tick} className={styles.tick} alt="tick" />

        <h1>Thank you for subscribing!</h1>
        <p>We are thrilled to welcome you to our community!</p>

        <button onClick={close}>Close</button>
      </div>
    </div>
  );
}

export default NewsletterModal;
