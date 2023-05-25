import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRuler } from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/ProductDescription.module.css";
import { useContext, useState } from "react";
import { Store } from "@/Store/Store";

const ProductDescription = (props) => {
  const product = props.product;
  const { state, dispatch } = useContext(Store);

  const [activeSize, setActivSize] = useState(false);
  const handleSizeClick = (size) => {
    setWorrning(false);
    setActivSize(size);
  };

  const [worrning, setWorrning] = useState(false);

  const addtoCartHandler = () => {
    if (product.sizes && activeSize === false) {
      setWorrning(true);
      return;
    }

    const existItem = state.cart.cartItems.find(
      (x) => x.slug === product.slug && x.activeSize === activeSize
    );
    const quantity = existItem ? existItem.quantity + 1 : 1;
    dispatch({
      type: "CART_ADD_ITEM",
      payload: { ...product, quantity, activeSize },
    });
  };

  const Sizes = () => {
    if (product.sizes)
      return (
        <>
          <ul className={styles.sizes}>
            {product.sizes.map((size) => (
              <li
                key={size}
                className={`${styles["size-item"]} ${
                  activeSize === size ? styles.active : ""
                }`}
                onClick={() => {
                  handleSizeClick(size);
                }}
              >
                {size}
              </li>
            ))}
          </ul>
          {worrning && <p className={styles.worrning}>Zaznacz rozmiar</p>}

          <p className={styles.sizechart} onClick={props.onClick}>
            Tabela rozmairów <FontAwesomeIcon icon={faRuler} />
          </p>
        </>
      );
  };

  return (
    <div className={styles.description}>
      <h1 className={styles["product-name"]}>{product.name}</h1>
      <div className={styles.prices}>
        <span className={styles["price-old"]}>
          {product.oldPrice ? `${product.oldPrice} PLN` : ""}
        </span>
        <span className={styles["price-new"]}>{product.price} PLN</span>
      </div>
      <div className={styles.text}>{product.description}</div>
      <div className={styles.atributes}>
        {product.atributes.map((atribut) => (
          <li key={atribut}>{atribut}</li>
        ))}
      </div>
      <Sizes />
      <div className={styles.buttons}>
        <button className={styles.button}>
          <a href={product.url}>Zamów</a>
        </button>
        <button onClick={addtoCartHandler} className={styles.button}>
          Dodaj do koszyka
        </button>
      </div>
    </div>
  );
};

export default ProductDescription;
