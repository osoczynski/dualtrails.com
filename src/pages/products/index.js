import ProductsItem from "../../components/ProductsItem";
import data from "../../../public/data";
import styles from "@/styles/Products.module.css";
import SEO from "@/components/SEO";

export default function Products() {
  return (
    <>
      <SEO pageTitle="Products" pageDescription="Products" />
      <div className={styles.products}>
        {data.products.map((product) => (
          <ProductsItem product={product} key={product.slug} />
        ))}
      </div>
    </>
  );
}
