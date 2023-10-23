// Hooks
import { useState } from "react";
// Components
import PaymentForm from "./components/PaymentForm";
// CSS
import styles from "./Payment.module.css";

function Payment({
  paymentFormActive,
  setPaymentFormActive,
  setPlaceOrderActive,
}) {
  const [componentWasActive, setComponentWasActive] = useState(false);

  const [fieldValues, setFieldValues] = useState({
    firstName: "",
    lastName: "",
    cardNumber: "1234 1234 1234 1234",
    cvc: 123,
    expirationData: "01 / 28",
  });

  const edit = () => {
    setPaymentFormActive(true);
    setPlaceOrderActive(false);
  };

  return (
    <div className={styles.paymentContainer}>
      <header className={styles.paymentHeader}>
        <h3>3. Payment</h3>
        {!paymentFormActive && componentWasActive && (
          <button onClick={edit}>Edit</button>
        )}
      </header>

      {paymentFormActive ? (
        <PaymentForm
          fieldValues={fieldValues}
          setFieldValues={setFieldValues}
          setComponentWasActive={setComponentWasActive}
          setPaymentFormActive={setPaymentFormActive}
          setPlaceOrderActive={setPlaceOrderActive}
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
