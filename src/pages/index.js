import Head from "next/head";
import Slider from "@/components/Slider";
import ProductsCarousele from "@/components/ProductsCarousel";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Dual Trails Webpage</title>
        <meta name="description" content="Dual Trails Webpage!" />
      </Head>
      <Slider />
      <ProductsCarousele />
    </>
  );
}
