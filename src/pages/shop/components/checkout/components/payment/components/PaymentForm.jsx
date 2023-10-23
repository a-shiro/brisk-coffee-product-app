// CSS
import styles from "./PaymentForm.module.css";

function PaymentForm({
  fieldValues,
  setFieldValues,
  setComponentWasActive,
  setPaymentFormActive,
  setPlaceOrderActive,
}) {
  const changeHandler = (e) => {
    setFieldValues((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setPaymentFormActive(false);
    setComponentWasActive(true);
    setPlaceOrderActive(true);
  };

  return (
    <form onSubmit={submitHandler} className={styles.paymentForm}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        type="text"
        value={fieldValues.firstName}
        onChange={changeHandler}
        required
      />
      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        type="text"
        value={fieldValues.lastName}
        onChange={changeHandler}
        required
      />
      <label htmlFor="cardNumber">Card Number</label>
      <input
        id="cardNumber"
        type="text"
        value={fieldValues.cardNumber}
        onChange={changeHandler}
        disabled
      />
      <label htmlFor="cvc">CVC</label>
      <input
        id="cvc"
        type="number"
        value={fieldValues.cvc}
        onChange={changeHandler}
        disabled
      />
      <label htmlFor="expirationData">Expiration Data</label>
      <input
        id="expirationData"
        type="text"
        value={fieldValues.expirationData}
        onChange={changeHandler}
        disabled
      />

      <button type="submit">Continue</button>
    </form>
  );
}

export default PaymentForm;
