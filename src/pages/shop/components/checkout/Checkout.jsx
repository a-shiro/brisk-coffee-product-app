// Hooks
import { useContext, useState } from "react";
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
import PurchaseModal from "./components/purchaseModal/PurchaseModal";

function Checkout() {
  const [contactFormActive, setContactFormActive] = useState(false);
  const [paymentFormActive, setPaymentFormActive] = useState(false);
  const [placeOrderActive, setPlaceOrderActive] = useState(false);

  const [purchaseModalActive, setPurchaseModalActive] = useState(false);

  const { setCheckoutActive } = useContext(CheckoutContext);

  const closeCheckout = () => {
    return setCheckoutActive(false);
  };

  return (
    <>
      <header className={styles.header}>
        <h1>Order</h1>

        <div>
          <h2>Checkout</h2>
          <button onClick={closeCheckout}>Back to menu</button>
        </div>
      </header>

      <section className={styles.section}>
        <div>
          {/* ToDo: Refactor all these components into one */}
          <Address
            setContactFormActive={setContactFormActive}
            setPlaceOrderActive={setPlaceOrderActive}
          />
          <Contact
            contactFormActive={contactFormActive}
            setContactFormActive={setContactFormActive}
            setPaymentFormActive={setPaymentFormActive}
            setPlaceOrderActive={setPlaceOrderActive}
          />
          <Payment
            paymentFormActive={paymentFormActive}
            setPaymentFormActive={setPaymentFormActive}
            setPlaceOrderActive={setPlaceOrderActive}
          />
          <PlaceOrder
            placeOrderActive={placeOrderActive}
            setPurchaseModalActive={setPurchaseModalActive}
          />
        </div>

        <OrderPreview />
      </section>

      {purchaseModalActive && (
        <PurchaseModal setPurchaseModalActive={setPurchaseModalActive} />
      )}
    </>
  );
}

export default Checkout;
