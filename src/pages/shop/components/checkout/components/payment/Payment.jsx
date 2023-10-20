// CSS
import styles from "./Payment.module.css";

function Payment() {
  // click button manages state in component and then changes the parent's state

  return (
    <div className={styles.addressContainer}>
      <h3>3. Payment</h3>
      <button>Edit</button>

      <form>
        <label>First Name</label>
        <input />

        <label>Last Name</label>
        <input />

        <label>Credit/Debit Card Number</label>
        <input />

        <label>CVC</label>
        <input />

        <label>Card Expiration</label>
        <input />
      </form>

      <div>
        <p>First Name Last Name</p>
        <p>Phone</p>
        <p>Email</p>
      </div>

      <button>Continue</button>
    </div>
  );
}

export default Payment;
