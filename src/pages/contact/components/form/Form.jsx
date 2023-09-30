// CSS
import styles from "./Form.module.css";

function MessageForm() {
  return (
    <form className={styles.contactForm}>
      <div>
        <div>
          <label htmlFor="name">First Name</label>
          <input id="name" type="text" />
        </div>

        <div>
          <label htmlFor="surname">Last Name</label>
          <input id="surname" type="text" />
        </div>
      </div>

      <label htmlFor="email">Email</label>
      <input id="email" type="email" required />

      <label htmlFor="message">Message</label>
      <textarea id="message" type="textarea" rows={6} required></textarea>

      <button type="submit">Submit</button>
    </form>
  );
}

export default MessageForm;
