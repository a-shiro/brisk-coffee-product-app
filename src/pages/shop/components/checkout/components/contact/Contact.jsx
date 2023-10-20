// Hooks
import { useState } from "react";
// Components
import ContactForm from "./components/ContactForm";
// CSS
import styles from "./Contact.module.css";

function Contact() {
  const [componentActive, setComponentActive] = useState(true);

  const [fieldValues, setFieldValues] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const edit = () => {
    setComponentActive(true);
  };

  return (
    <div className={styles.contactContainer}>
      <header className={styles.contactHeader}>
        <h3>2. Contact Information</h3>
        {!componentActive && <button onClick={edit}>Edit</button>}
      </header>

      {componentActive ? (
        <ContactForm
          fieldValues={fieldValues}
          setFieldValues={setFieldValues}
          setComponentActive={setComponentActive}
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
