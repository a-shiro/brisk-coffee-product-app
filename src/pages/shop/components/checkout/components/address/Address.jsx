// Hooks
import { useState } from "react";
// Components
import AddressForm from "./components/AddressForm";
// CSS
import styles from "./Address.module.css";

function Address({ setContactFormActive, setPlaceOrderActive }) {
  const [componentActive, setComponentActive] = useState(true);

  const [fieldValues, setFieldValues] = useState({
    address: "",
    country: "",
    city: "",
    code: "",
  });

  const edit = () => {
    setComponentActive(true);
    setContactFormActive(false);
    setPlaceOrderActive(false);
  };

  return (
    <div className={styles.addressContainer}>
      <header className={styles.addressHeader}>
        <h3>1. Address</h3>
        {!componentActive && <button onClick={edit}>Edit</button>}
      </header>

      {componentActive ? (
        <AddressForm
          fieldValues={fieldValues}
          setFieldValues={setFieldValues}
          setComponentActive={setComponentActive}
          setContactFormActive={setContactFormActive}
        />
      ) : (
        <div className={styles.addressInfo}>
          <p>{fieldValues.address}</p>
          <p>
            {fieldValues.country}, {fieldValues.city}
          </p>
          <p>{fieldValues.code}</p>
        </div>
      )}
    </div>
  );
}

export default Address;
