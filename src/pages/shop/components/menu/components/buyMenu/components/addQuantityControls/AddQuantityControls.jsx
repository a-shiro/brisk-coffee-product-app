// CSS
import styles from "./AddQuantityControls.module.css";

function AddQuantityControls({ currentQuantity, setCurrentQuantity }) {
  const decreaseQuantity = () => {
    if (currentQuantity > 1) {
      setCurrentQuantity((prev) => prev - 1);
      return;
    }
  };

  const increaseQuantity = () => {
    if (currentQuantity < 100) {
      setCurrentQuantity((prev) => prev + 1);
      return;
    }
  };

  const changeHandler = (e) => {
    const value = Number(e.target.value);

    if (isNaN(value)) return;

    if (value > 100 || value <= 0) return;

    setCurrentQuantity(value);
    return;
  };

  return (
    <div className={styles.container}>
      <p>Quantity</p>

      <div className={styles.controls}>
        <button onClick={decreaseQuantity}>-</button>
        <input onChange={changeHandler} value={currentQuantity} />
        <button onClick={increaseQuantity}>+</button>
      </div>
    </div>
  );
}

export default AddQuantityControls;
