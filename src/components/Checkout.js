import styles from "@/styles/Checkout.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCopy } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

const Checkout = (props) => {
  const { locale } = useRouter();

  const cartItems = props.cartItems;
  const price = cartItems.reduce((t, a) => t + a.quantity * a.price, 0) + 17;
  const value =
    cartItems.map(
      (item) =>
        ` ${item.name}${item.activeSize ? " " + item.activeSize : ""}${
          item.quantity > 1 ? " x" + item.quantity : ""
        }`
    ) +
    " Suma:" +
    price +
    "PLN";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value);
    window.open("https://zrzutka.pl/kuh8fm/pay/jhjkk8", "_blank");
  };

  return (
    <>
      <div className={styles.backdrop} onClick={props.onClose} />
      <div className={styles.modal}>
        <button className={styles.close} onClick={props.onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <h2 className={styles.title}>
          {locale === "en"
            ? "Your cart has been copied. If you like to go further press the button "
            : "Po nacisnięciu przycisku zawartoć twojego koszyka zostanie skopiowana oraz nastąpi przekierowanie na portal Zrzutka.pl, aby sfinalizować zamówienie"}
        </h2>
        <div className={styles.summary}>
          <FontAwesomeIcon
            icon={faCopy}
            className={styles.copy}
            onClick={() => {
              navigator.clipboard.writeText(value);
            }}
          />
          {cartItems.map((item) => (
            <p key={`${item.slug}-${item.activeSize}`}>
              {item.name} {item.activeSize ? item.activeSize : ""}
              {item.quantity > 1 ? " x " + item.quantity : ""}
            </p>
          ))}
          Suma: {price}
          PLN
        </div>

        <button className={styles.confirm} onClick={handleCopy}>
          {locale === "en" ? "Copy & Go" : "Zrzutka"}
        </button>
      </div>
    </>
  );
};

export default Checkout;
