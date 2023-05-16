import styles from "@/styles/CartButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import { Store } from "@/Store/Store";

function CartButton(props) {
  const [btnIsHighlited, setBtnIsHighlighted] = useState(false);
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const [cartItemsCount, setCartItemsCount] = useState(0);

  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);

  useEffect(() => {
    if (cart.cartItems.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cart.cartItems]);

  const btnClasses = `${styles.button} ${btnIsHighlited ? styles.bump : ""}`;
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <FontAwesomeIcon icon={faCartShopping} />
      {cartItemsCount > 0 && (
        <span className={styles.badge}>{cartItemsCount}</span>
      )}
    </button>
  );
}

export default CartButton;
