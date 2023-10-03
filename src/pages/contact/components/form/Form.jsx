// Hooks
import { useState } from "react";
// CSS
import styles from "./Form.module.css";

function MessageForm({ setModalVisible }) {
  const [formValues, setFormValues] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
  });

  const changeHandler = (e) => {
    setFormValues((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));

    console.log(formValues);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setFormValues({
      name: "",
      surname: "",
      email: "",
      message: "",
    });
    setModalVisible(true);
  };

  return (
    <form onSubmit={submitHandler} className={styles.contactForm}>
      <div>
        <div>
          <label htmlFor="name">First Name</label>
          <input
            onChange={changeHandler}
            value={formValues.name}
            id="name"
            type="text"
          />
        </div>

        <div>
          <label htmlFor="surname">Last Name</label>

          <input
            onChange={changeHandler}
            value={formValues.surname}
            id="surname"
            type="text"
          />
        </div>
      </div>

      <label htmlFor="email">Email</label>
      <input
        onChange={changeHandler}
        value={formValues.email}
        id="email"
        type="email"
        required
      />

      <label htmlFor="message">Message</label>
      <textarea
        onChange={changeHandler}
        value={formValues.message}
        id="message"
        type="textarea"
        rows={6}
        required
      ></textarea>

      <button type="submit">Submit</button>
    </form>
  );
}

export default MessageForm;
