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
        className={styles.galleryCurrent}
        src={currentPhoto}
        alt="current-img"
        width={1024}
        height={1280}
        priority={true}
      />

      <div className={styles.galleryScroll}>
        {product.images.map((img) => (
          <Image
            className={styles.scrollItem}
            key={img}
            src={img}
            alt={img}
            width={1024}
            height={1280}
            onClick={handelClick}
            onMouseOver={handelClick}
            priority={true}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
