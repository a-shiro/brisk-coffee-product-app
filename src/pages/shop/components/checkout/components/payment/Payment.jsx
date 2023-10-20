// Hooks
import { useState } from "react";
// Components
import PaymentForm from "./components/PaymentForm";
// CSS
import styles from "./Payment.module.css";

function Payment() {
  const [componentActive, setComponentActive] = useState(true);

  const [fieldValues, setFieldValues] = useState({
    firstName: "",
    lastName: "",
    cardNumber: "1234 1234 1234 1234",
    cvc: 123,
    expirationData: "01 / 28",
  });

  const edit = () => {
    setComponentActive(true);
  };

  return (
    <div className={styles.paymentContainer}>
      <header className={styles.paymentHeader}>
        <h3>3. Payment</h3>
        {!componentActive && <button onClick={edit}>Edit</button>}
      </header>

      {componentActive ? (
        <PaymentForm
          fieldValues={fieldValues}
          setFieldValues={setFieldValues}
          setComponentActive={setComponentActive}
        />
      ) : (
        <div className={styles.paymentInfo}>
          <p>
            {fieldValues.firstName} {fieldValues.lastName}
          </p>
          <p>{fieldValues.cardNumber}</p>
          <p>{fieldValues.cvc}</p>
          <p>{fieldValues.expirationData}</p>
        </div>
      )}
    </div>
  );
}

export default Payment;
