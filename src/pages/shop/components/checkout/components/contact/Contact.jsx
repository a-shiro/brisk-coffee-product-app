// CSS
import styles from "./Contact.module.css";

function Contact() {
  // click button manages state in component and then changes the parent's state

  return (
    <div className={styles.addressContainer}>
      <h3>1. Address</h3>
      <button>Edit</button>

      <form>
        <label>First name</label>
        <input />

        <label>Last name</label>
        <input />

        <label>Phone</label>
        <input />

        <label>Email</label>
        <input />
      </form>

      <div>
        <p>First Name Last Name</p>
        <p>Phone</p>
        <p>Email</p>
      </div>

      <button>Continue</button>
    </div>
  );
}

export default Contact;
