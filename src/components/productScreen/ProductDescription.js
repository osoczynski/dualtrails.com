import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRuler } from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/ProductDescription.module.css";
import { useContext, useState } from "react";
import { Store } from "@/Store/Store";
import { useRouter } from "next/router";

const ProductDescription = (props) => {
  const { locale } = useRouter();
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
                className={`${styles.sizeItem} ${
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
          {worrning && (
            <p className={styles.worrning}>
              {locale === "en" ? "Choose the size" : "Zaznacz rozmiar"}
            </p>
          )}

          <p className={styles.sizechart} onClick={props.onClick}>
            {locale === "en" ? "Size chart " : "Tabela rozmiarów "}
            <FontAwesomeIcon icon={faRuler} />
          </p>
        </>
      );
  };

  const buyHandler = () => {
    alert("W polu adres należy podać kod paczkomatu oraz rozmiar");
  };

  return (
    <div className={styles.description}>
      <h1 className={styles.productName}>
        {locale === "en" ? product.nameENG : product.namePL}
      </h1>
      <div className={styles.prices}>
        {product.oldPricePLN !== 0 && product.oldPriceEURO !== 0 && (
          <span className={styles.priceOld}>
            {locale === "en"
              ? product.oldPriceEURO + " €"
              : product.oldPricePLN + " PLN"}
          </span>
        )}
        <span className={styles.priceNew}>
          {locale === "en"
            ? product.priceEURO + " €"
            : product.pricePLN + " PLN"}
        </span>
      </div>
      <div className={styles.text}>
        {locale === "en" ? product.descriptionENG : product.descriptionPL}
      </div>
      <div className={styles.atributes}>
        {locale === "en"
          ? product.atributesENG.map((atribut) => (
              <li key={atribut}>{atribut}</li>
            ))
          : product.atributesPL.map((atribut) => (
              <li key={atribut}>{atribut}</li>
            ))}
      </div>
      <Sizes />
      <div className={styles.buttons}>
        <button className={styles.button} onClick={buyHandler}>
          <a href={product.url} target="_blank">
            {locale === "en" ? "Order" : "Zamów"}
          </a>
        </button>
        <button onClick={addtoCartHandler} className={styles.button}>
          {locale === "en" ? "Add to cart" : "Dodaj do koszyka"}
        </button>
      </div>
    </div>
  );
};

export default ProductDescription;
