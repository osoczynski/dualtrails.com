import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/ProductGallery.module.css";

const ProductGallery = (props) => {
  const product = props.product;
  const [currentPhoto, setCurrentPhoto] = useState(product.images[0]);

  useEffect(() => {
    setCurrentPhoto(product.images[0]);
  }, [product.images[0]]);

  const handelClick = (event) => {
    setCurrentPhoto(event.target.alt);
  };
  return (
    <div className={styles.gallery}>
      <Image
        className={styles["gallery-current"]}
        src={currentPhoto}
        alt="current-img"
        width={920}
        height={1280}
        priority={true}
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
              priority={true}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductGallery;
