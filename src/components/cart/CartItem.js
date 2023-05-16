import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/CartItem.module.css";
import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { Store } from "@/Store/Store";

const CartItem = (props) => {
  const item = props.item;

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
        <Image src={item.images[0]} alt={item.name} width={45} height={60} />
        <h2 className={styles.title}>{item.name}</h2>
      </Link>
      <div className={styles.size}>
        {item.activeSize ? item.activeSize : ""}
      </div>
      <div className={styles.summary}>
        <span>
          {item.quantity} x {item.price} PLN
        </span>
      </div>
      <div className={styles.delete} onClick={() => removeItemHandler(item)}>
        <FontAwesomeIcon icon={faTimes} />
      </div>
    </div>
  );
};

export default CartItem;
