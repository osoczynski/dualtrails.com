import { useRouter } from "next/router";
import React, { useState } from "react";
import data from "../../../public/data";
import styles from "@/styles/ProductScreen.module.css";
import ProductDescription from "@/components/product screen/ProductDescription";
import ProductGallery from "@/components/product screen/ProductGallery";
import SizeChart from "@/components/product screen/SizeChart";
import SEO from "@/components/SEO";
import ProductsCarousele from "@/components/ProductsCarousel";

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
      <SEO pageTitle={product.name} pageDescription={product.name} />
      <div className={styles.productScreen}>
        <ProductGallery product={product} />
        <ProductDescription onClick={SizeChartHandler} product={product} />
      </div>
      <ProductsCarousele />
      {sizeChart && (
        <SizeChart onClose={SizeChartHandler} image={product.sizeChart} />
      )}
    </>
  );
}
