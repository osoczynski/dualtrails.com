import Link from "next/link";
import Image from "next/image";
import Card from "@/components/UI/Card";
import styles from "@/styles/ProductsItem.module.css";

export default function ProductsItem({ product }) {
  return (
    <Card className={styles.product}>
      <Link href={`/products/${product.slug}`}>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            src={product.images[0]}
            alt={product.name}
            width={920}
            height={1280}
            priority={true}
          />
        </div>
        <div className={styles.text}>
          <p className={styles.productName}>{product.name}</p>
          <div className={styles.productPrice}>
            <span className={styles.priceOld}>
              {product.oldPrice ? `${product.oldPrice} PLN` : ""}
            </span>
            <span className={styles.priceNew}>{product.price} PLN </span>
          </div>
        </div>
      </Link>
    </Card>
  );
}
