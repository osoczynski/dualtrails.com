import styles from "@/styles/Checkout.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Checkout = (props) => {
  const cartItems = props.cartItems;
  const sum = cartItems.reduce((t, a) => t + a.quantity * a.price, 0) + 17;
  return (
    <>
      <div className={styles.backdrop} onClick={props.onClose} />
      <div className={styles.modal}>
        <button className={styles.close} onClick={props.onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <h2 className={styles.title}>Ta Funkcja aktualnie jest niedostepna</h2>
        {/* <p>
          W celu sfinalizowania zamoienia skopiuj ponizsze informacje oraz wklej
          je jako komentarz do zamowienia. W polu Twój adres wprowadź kod
          paczkomatu
        </p>
        <div>
          {cartItems.map((item) => (
            <p key={`${item.slug}-${item.activeSize}`}>
              {item.name} {item.activeSize ? item.activeSize : ""} x{" "}
              {item.quantity}{" "}
            </p>
          ))}
          Razem {cartItems.reduce((t, a) => t + a.quantity * a.price, 0) + 17}
        </div>
        <button onClick={() => navigator.clipboard.writeText(sum)}>
          Copy & Go
        </button> */}
      </div>
    </>
  );
};

export default Checkout;
