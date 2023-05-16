import { useState } from "react";
import Image from "next/image";
import styles from "@/styles/ProductGallery.module.css";
import Card from "../UI/Card";

const ProductGallery = (props) => {
  const product = props.product;
  const [currentPhoto, setCurrentPhoto] = useState(product.images[0]);

  // if (const existItem = state.cart.cartItems.find)(
  //      (item) =>
  //        item.slug === newItem.slug && item.activeSize === newItem.activeSize
  //    );
  //   setCurrentPhoto(product.images[0]);
  // }
  // )
  // console.log(currentPhoto);

  const handelClick = (event) => {
    setCurrentPhoto(event.target.alt); //// Dlacaego nie działa z src ?
  };
  return (
    <div className={styles.gallery}>
      <Image
        className={styles["gallery-current"]}
        src={currentPhoto}
        alt="current-img"
        width={920}
        height={1280}
      />

      <ul className={styles["gallery-scroll"]}>
        {product.images.map((img) => (
          <li key={img} className={styles["scroll-item"]}>
            <Image
              src={img}
              alt={img}
              width={920}
              height={1280}
              onClick={handelClick}
              onMouseOver={handelClick}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductGallery;
