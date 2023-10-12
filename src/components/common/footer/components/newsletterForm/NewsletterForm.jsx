// Hooks
import { useState } from "react";
// CSS
import styles from "./NewsletterForm.module.css";

function NewsletterForm({ setModalVisible }) {
  const [email, setEmail] = useState("");

  const changeHandler = (e) => {
    setEmail(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setEmail("");
    setModalVisible(true);
  };

  return (
    <form onSubmit={submitHandler} className={styles.newsletterForm}>
      <div>
        <label htmlFor="email">Enter your email here</label>
        <input
          onChange={changeHandler}
          value={email}
          id="email"
          type="email"
          required
        />
      </div>
      <button>Submit</button>
    </form>
  );
}

export default NewsletterForm;
