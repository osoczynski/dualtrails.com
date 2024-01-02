import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/ProductsItem.module.css";
import { useRouter } from "next/router";

export default function ProductsItem({ product }) {
  const { locale } = useRouter();
  return (
    <Link href={`/products/${product.slug}`} className={styles.product}>
      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          src={product.images[0]}
          alt={product.nameENG}
          width={1024}
          height={1280}
          priority={true}
        />
      </div>
      <div className={styles.text}>
        <p className={styles.productName}>
          {locale === "en" ? product.nameENG : product.namePL}
        </p>
        <div className={styles.productPrice}>
          <span className={styles.priceOld}>
            {locale === "en"
              ? product.oldPriceEURO
                ? `${product.oldPriceEURO} €`
                : ""
              : product.oldPricePLN
              ? `${product.oldPricePLN} PLN`
              : ""}
          </span>
          <span className={styles.priceNew}>
            {locale === "en"
              ? `${product.priceEURO} €`
              : `${product.pricePLN} PLN`}
          </span>
        </div>
      </div>
    </Link>
  );
}
