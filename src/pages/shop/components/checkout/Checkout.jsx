// Hooks
import { useContext } from "react";
// Components
import Address from "./components/address/Address";
import Contact from "./components/contact/Contact";
import Payment from "./components/payment/Payment";
import PlaceOrder from "./components/placeOrder/PlaceOrder";
import OrderPreview from "./components/orderPreview/OrderPreview";
// CSS
import styles from "./Checkout.module.css";
// Context
import { CheckoutContext } from "../../context/context";

function Checkout() {
  // have all section refs and change with a button

  const { setCheckoutActive } = useContext(CheckoutContext);

  const closeCheckout = () => {
    return setCheckoutActive(false);
  };

  return (
    <>
      <header className={styles.header}>
        <h1>Order</h1>
      </header>

      <section className={styles.checkoutSection}>
        <header className={styles.checkoutHeader}>
          <h2>Checkout</h2>
          <button onClick={closeCheckout}>Back to menu</button>
        </header>

        <div>
          <Address />
          <Contact />
          <Payment />
          <PlaceOrder />
        </div>

        <OrderPreview />
      </section>
    </>
  );
}

export default Checkout;
