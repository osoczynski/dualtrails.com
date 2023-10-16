import { Store } from "@/Store/Store";
import { useState, useContext } from "react";
import styles from "@/styles/Cart.module.css";
import CartItem from "./CartItem";
import dynamic from "next/dynamic";
import Checkout from "../Checkout";
import data from "../../../public/data";

const Cart = (props) => {
  const language = props.locale;
  const { state } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const [checkout, setCheckout] = useState(false);
  const CheckoutHandler = () => {
    setCheckout(!checkout);
  };

  const sumPLN = cartItems.reduce((t, a) => t + a.quantity * a.pricePLN, 0);
  const sumEUR =
    cartItems.reduce((t, a) => t + a.quantity * a.priceEURO, 0) + data.sumEUR;

  const sum =
    language === "en"
      ? `Total ${sumEUR} €`
      : `Suma ${sumPLN >= 100 ? sumPLN : sumPLN + data.shipPLN} PLN`;

  return (
    <>
      <div className={`${styles.cart} ${props.clicked ? "" : styles.active}`}>
        {cartItems.length === 0 ? (
          <div>
            <h1 className={styles.title}>
              {language === "en"
                ? "Your cart is empty"
                : "Twój koszyk jest pusty"}
            </h1>
          </div>
        ) : (
          <div>
            <h1 className={styles.title}>
              {language === "en" ? "Cart" : "Koszyk"}
            </h1>
            <div className={styles.items}>
              {cartItems.map((item) => (
                <CartItem
                  key={`${item.slug}-${item.activeSize}`}
                  item={item}
                  onHide={props.onHide}
                />
              ))}
              <div className={styles.ship}>
                <span>
                  {language === "en"
                    ? "Shipping cost 4 € in Poland / 20 € in Europe"
                    : "Koszt wysyłki InPost 17 PLN"}
                </span>
              </div>
            </div>
            <div className={styles.checkout}>
              <div className={styles.total}>
                <span>{sum}</span>
              </div>
              <button className={styles.buy} onClick={CheckoutHandler}>
                {language === "en" ? "Order" : "Zamów"}
              </button>
            </div>
          </div>
        )}
      </div>
      {checkout && (
        <Checkout onClose={CheckoutHandler} cartItems={cartItems} sum={sum} />
      )}
    </>
  );
};

export default dynamic(() => Promise.resolve(Cart), { ssr: false });
