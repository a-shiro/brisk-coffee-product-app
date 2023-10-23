// CSS
import styles from "./ContactForm.module.css";

function ContactForm({
  fieldValues,
  setFieldValues,
  setComponentWasActive,
  setContactFormActive,
  setPaymentFormActive,
}) {
  const changeHandler = (e) => {
    setFieldValues((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setContactFormActive(false);
    setComponentWasActive(true);
    setPaymentFormActive(true);
  };

  return (
    <form onSubmit={submitHandler} className={styles.contactForm}>
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
      <label htmlFor="phone">Phone</label>
      <input
        id="phone"
        type="number"
        value={fieldValues.phone}
        onChange={changeHandler}
        required
      />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        value={fieldValues.email}
        onChange={changeHandler}
        required
      />

      <button>Continue</button>
    </form>
  );
}

export default ContactForm;
