// CSS
import { useState } from "react";
import styles from "./Address.module.css";
import AddressForm from "./components/AddressForm";

function Address() {
  const [componentActive, setComponentActive] = useState(true);

  const [fieldValues, setFieldValues] = useState({
    address: "",
    country: "",
    city: "",
    code: "",
  });

  const edit = () => {
    setComponentActive(true);
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
