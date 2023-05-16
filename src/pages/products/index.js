import ProductsItem from "../../components/ProductsItem";
import data from "../../../public/data";
import styles from "@/styles/Products.module.css";

export default function Products() {
  return (
    <div className={styles.products}>
      {data.products.map((product) => (
        <ProductsItem product={product} key={product.slug} />
      ))}
    </div>
  );
}
