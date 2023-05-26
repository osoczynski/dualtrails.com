import { Store } from "@/Store/Store";
import { useState, useContext } from "react";
import styles from "@/styles/Cart.module.css";
import CartItem from "./CartItem";
import dynamic from "next/dynamic";
import Checkout from "../Checkout";

const Cart = (props) => {
  const { state } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const [checkout, setCheckout] = useState(false);
  const CheckoutHandler = () => {
    setCheckout(!checkout);
  };

  return (
    <>
      <div className={`${styles.cart} ${props.clicked ? "" : styles.active}`}>
        {cartItems.length === 0 ? (
          <div>
            <h1 className={styles.title}>Koszyk jest pusty</h1>
          </div>
        ) : (
          <div>
            <h1 className={styles.title}>Koszyk</h1>
            <div className={styles.items}>
              {cartItems.map((item) => (
                <CartItem
                  key={`${item.slug}-${item.activeSize}`}
                  item={item}
                  onHide={props.onHide}
                />
              ))}
              <div className={styles.ship}>
                <span>Koszt wysyłki InPost 17PLN</span>
              </div>
            </div>
            <div className={styles.checkout}>
              <div className={styles.total}>
                <span>
                  Suma:{" "}
                  {cartItems.reduce((t, a) => t + a.quantity * a.price, 0) + 17}
                  PLN
                </span>
              </div>
              <button className={styles.buy} onClick={CheckoutHandler}>
                Zamów
              </button>
            </div>
          </div>
        )}
      </div>
      {checkout && <Checkout onClose={CheckoutHandler} cartItems={cartItems} />}
    </>
  );
};

export default dynamic(() => Promise.resolve(Cart), { ssr: false });
