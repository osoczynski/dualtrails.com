import SEO from "@/components/SEO";
import Slider from "@/components/Slider";
import ProductsCarousele from "@/components/ProductsCarousel";

export default function Home(props) {
  return (
    <>
      <SEO pageTitle="Dual Trails" pageDescription="Homepage" />
      <Slider />
      <ProductsCarousele />
    </>
  );
}
