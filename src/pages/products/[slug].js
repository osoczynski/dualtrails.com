import { useRouter } from "next/router";
import React, { useState } from "react";
import data from "../../../public/data";
import styles from "@/styles/ProductScreen.module.css";
import ProductDescription from "@/components/product/ProductDescription";
import ProductGallery from "@/components/product/ProductGallery";
import SizeChart from "@/components/product/SizeChart";

export default function ProductScreen() {
  const [sizeChart, setSizeChart] = useState(false);
  const SizeChartHandler = () => {
    setSizeChart(!sizeChart);
  };

  const { query } = useRouter();
  const { slug } = query;
  const product = data.products.find((product) => product.slug === slug);
  if (!product) {
    return <div>Product Not Found</div>;
  }

  return (
    <>
      <div className={styles["product-screen"]}>
        <ProductGallery product={product} />
        <ProductDescription onClick={SizeChartHandler} product={product} />
      </div>
      {sizeChart && (
        <SizeChart onClose={SizeChartHandler} image={product.sizeChart} />
      )}
    </>
  );
}
