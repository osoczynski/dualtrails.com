import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/CartItem.module.css";
import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { Store } from "@/Store/Store";
import { useRouter } from "next/router";

const CartItem = (props) => {
  const item = props.item;
  const { locale } = useRouter();
  const { dispatch } = useContext(Store);
  const removeItemHandler = (item) => {
    dispatch({ type: "CART_REMOVE_ITEM", payload: item });
  };

  return (
    <div className={styles.cartItem}>
      <Link
        href={`/products/${item.slug}`}
        className={styles.product}
        onClick={props.onHide}
      >
        <Image src={item.images[0]} alt={item.nameENG} width={45} height={60} />
        <h2 className={styles.title}>
          {locale === "en" ? item.nameENG : item.namePL}
        </h2>
      </Link>
      <div className={styles.size}>
        {item.activeSize ? item.activeSize : ""}
      </div>
      <div className={styles.summary}>
        <span>
          {item.quantity} x{" "}
          {locale === "en" ? `${item.priceEURO} €` : `${item.pricePLN} PLN`}
        </span>
      </div>
      <div className={styles.delete} onClick={() => removeItemHandler(item)}>
        <FontAwesomeIcon icon={faTimes} />
      </div>
    </div>
  );
};

export default CartItem;
