import { Store } from "@/Store/Store";
import { useContext } from "react";
import styles from "@/styles/Cart.module.css";
import CartItems from "./CartItems";
import dynamic from "next/dynamic";

const Cart = (props) => {
  const { state, dispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  return (
    <div className={`${styles.cart} ${props.clicked ? "" : styles.active}`}>
      {cartItems.length === 0 ? (
        <div>
          <h1 className={styles.title}>Koszyk jest pusty</h1>
        </div>
      ) : (
        <div>
          <h1 className={styles.title}>Koszyk</h1>
          <CartItems
            cartItems={cartItems}
            dispatch={dispatch}
            onHide={props.onHide}
          />
          <div className={styles.total}>
            <span>Suma</span>
            <span>
              {cartItems.reduce((a, c) => a + c.quantity * c.price, 0)} PLN
            </span>
          </div>
          <button className={styles.buy}>Zamów</button>
        </div>
      )}
    </div>
  );
};

export default dynamic(() => Promise.resolve(Cart), { ssr: false });
