// CSS
import styles from "./AddressForm.module.css";

function AddressForm({ fieldValues, setFieldValues, setComponentActive }) {
  const changeHandler = (e) => {
    setFieldValues((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setComponentActive(false);
  };

  return (
    <form onSubmit={submitHandler} className={styles.addressForm}>
      <label htmlFor="address">Address</label>
      <input
        id="address"
        type="text"
        value={fieldValues.address}
        onChange={changeHandler}
        required
      />
      <label htmlFor="country">Country</label>
      <input
        id="country"
        type="text"
        value={fieldValues.country}
        onChange={changeHandler}
        required
      />
      <label htmlFor="city">City</label>
      <input
        id="city"
        type="text"
        value={fieldValues.city}
        onChange={changeHandler}
        required
      />
      <label htmlFor="code">Zip/Postal Code</label>
      <input
        id="code"
        type="number"
        value={fieldValues.code}
        onChange={changeHandler}
        required
      />

      <button>Continue</button>
    </form>
  );
}

export default AddressForm;
