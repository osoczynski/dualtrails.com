import styles from "@/styles/Checkout.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCopy } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import Logo from "../../public/images/wiadomosc.jpg";
import Image from "next/image";

const Checkout = (props) => {
  const { locale } = useRouter();

  const cartItems = props.cartItems;
  const copyValue =
    cartItems.map(
      (item) =>
        ` ${locale === "en" ? item.nameENG : item.namePL} ${
          item.activeSize ? item.activeSize : ""
        }${item.quantity > 1 ? " x" + item.quantity : ""}`
    ) +
    " " +
    props.sum;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(copyValue);
    window.open("https://zrzutka.pl/53sxwa/pay/gvfhwr", "_blank");
  };

  return (
    <>
      <div className={styles.backdrop} onClick={props.onClose} />
      <div className={styles.modal}>
        <button className={styles.close} onClick={props.onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        {/* <h2 className={styles.title}>
          {locale === "en"
            ? "Your cart has been copied. If you like to go further press the button "
            : "Po nacisnięciu przycisku zawartoć twojego koszyka zostanie skopiowana oraz nastąpi przekierowanie na portal Zrzutka.pl, aby sfinalizować zamówienie. /n 1. Zmień cenę 2. W sekcji dane kontaktowe podać kod paczkomatu 3. W polu Dodatkowe informacje należy wklej listę produktów wraz z rozmairami(ctrl+v lub wklej) "}
        </h2> */}
        <h2 className={styles.title}>
          Po nacisnięciu przycisku zawartoć twojego koszyka zostanie skopiowana
          oraz nastąpi przekierowanie na portal Zrzutka.pl, aby sfinalizować
          zamówienie.
          <p>
            <br></br>
          </p>
          <p>1. Zmień cenę poprzez nacinięcie przycisku inna kwota</p>
          <p>2. W polu Twój adres podaj kod paczkomatu InPost</p>
          <p>
            3. W polu Dodatkowe informacje wklej liste produktów wraz z
            rozmiarami{" "}
          </p>
        </h2>
        <Image
          className={styles.message}
          src={Logo}
          alt="message"
          priority={true}
        />
        <div className={styles.summary}>
          <FontAwesomeIcon
            icon={faCopy}
            className={styles.copy}
            onClick={() => {
              navigator.clipboard.writeText(copyValue);
            }}
          />
          {cartItems.map((item) => (
            <p key={`${item.slug}-${item.activeSize}`}>
              {locale === "en" ? item.nameENG + " " : item.namePL + " "}
              {item.activeSize ? item.activeSize : ""}
              {item.quantity > 1 ? " x " + item.quantity : ""}
            </p>
          ))}
          {props.sum}
        </div>

        <button className={styles.confirm} onClick={handleCopy}>
          {locale === "en" ? "Copy & Go" : "Zrzutka"}
        </button>
      </div>
    </>
  );
};

export default Checkout;
