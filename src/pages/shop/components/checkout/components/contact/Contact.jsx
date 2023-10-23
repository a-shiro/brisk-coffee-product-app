// Hooks
import { useState } from "react";
// Components
import ContactForm from "./components/ContactForm";
// CSS
import styles from "./Contact.module.css";

function Contact({
  contactFormActive,
  setContactFormActive,
  setPaymentFormActive,
  setPlaceOrderActive,
}) {
  const [componentWasActive, setComponentWasActive] = useState(false);

  const [fieldValues, setFieldValues] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const edit = () => {
    setContactFormActive(true);
    setPlaceOrderActive(false);
  };

  return (
    <div className={styles.contactContainer}>
      <header className={styles.contactHeader}>
        <h3>2. Contact Information</h3>
        {!contactFormActive && componentWasActive && (
          <button onClick={edit}>Edit</button>
        )}
      </header>

      {contactFormActive ? (
        <ContactForm
          fieldValues={fieldValues}
          setFieldValues={setFieldValues}
          setComponentWasActive={setComponentWasActive}
          setContactFormActive={setContactFormActive}
          setPaymentFormActive={setPaymentFormActive}
        />
      ) : (
        <div className={styles.contactInfo}>
          <p>
            {fieldValues.firstName} {fieldValues.lastName}
          </p>
          <p>{fieldValues.phone}</p>
          <p>{fieldValues.email}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;
