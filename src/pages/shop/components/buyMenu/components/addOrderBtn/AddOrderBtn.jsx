// Hooks
import { useContext } from "react";
// CSS
import styles from "./AddOrderBtn.module.css";
// Context
import { CartContext, BuyMenuContext } from "../../../../context/context";

function AddOrderBtn({ currentQuantity, closeBuyMenu }) {
  const { cart, setCart } = useContext(CartContext);
  const { activeProduct } = useContext(BuyMenuContext);

  const updateCart = () => {
    const currentPrice = currentQuantity * activeProduct.price;
    const updatedSubtotal = cart.subtotal + currentPrice;

    const updatedTotalQuantity = cart.quantity + currentQuantity;

    const oldItemQuantity = cart.items[activeProduct.id]?.quantity;

    const itemQuantity = oldItemQuantity
      ? oldItemQuantity + currentQuantity
      : currentQuantity;

    const updatedList = {
      ...cart.items,
      [activeProduct.id]: {
        product: activeProduct,
        quantity: itemQuantity,
      },
    };

    return [updatedSubtotal, updatedTotalQuantity, updatedList];
  };

  const addToCart = () => {
    const [updatedSubtotal, updatedTotalQuantity, updatedList] = updateCart();

    setCart((prev) => ({
      ...prev,
      subtotal: updatedSubtotal,
      quantity: updatedTotalQuantity,
      items: updatedList,
    }));

    return closeBuyMenu();
  };

  return (
    <div className={styles.container}>
      <button onClick={addToCart}>
        Add to my order &#40;$
        {(currentQuantity * activeProduct.price).toFixed(2)}
        &#41;
      </button>
    </div>
  );
}

export default AddOrderBtn;
