// CSS
import styles from "./Modal.module.css";
// Static files
import tick from "../../../../resources/icons/tick.png";

function Modal({ setModalVisible }) {
  const close = () => {
    setModalVisible(false);
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <img src={tick} className={styles.tick} alt="tick" />

        <h1>Thank you for reaching out!</h1>
        <p>We will get back to you as soon as possible!</p>

        <button onClick={close}>Close</button>
      </div>
    </div>
  );
}

export default Modal;
