// Components
import Controls from "./components/Controls";
// CSS
import styles from "./OrderModal.module.css";
// Resources
import closeIcon from "../../../../resources/icons/close.png";

function OrderModal({ activeProduct, setModalVisible }) {
  const closeModal = () => {
    return setModalVisible(false);
  };

  return (
    <>
      <div onClick={closeModal} className={styles.overlay}></div>

      <div className={styles.modal}>
        <div className={styles.imageContainer}>
          <img src={activeProduct.storeImageUrl} alt="product" />

          <button onClick={closeModal}>
            <img className={styles.icon} src={closeIcon} alt="close" />
          </button>
        </div>

        <div className={styles.itemDescription}>
          <h1>
            {activeProduct.brand} - {activeProduct.flavour}
          </h1>
          <p>{activeProduct.description}</p>
        </div>

        <Controls activeProduct={activeProduct} />
      </div>
    </>
  );
}

export default OrderModal;
