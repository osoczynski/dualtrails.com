import SEO from "@/components/SEO";
import Slider from "@/components/Slider";
import ProductsCarousele from "@/components/ProductsCarousel";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Cookies from "js-cookie";
import { useEffect } from "react";

function Home() {
  // const { t } = useTranslation("about"); /// FILE TRANSLATION
  const { push, locale } = useRouter();

  useEffect(() => {
    if (Cookies.get("language") === "en")
      push("/", undefined, { locale: "en" });
  }, []);

  return (
    <>
      <SEO pageTitle="Dual Trails" pageDescription="Homepage" />
      {/* <div><p>{t("")}</p></div> */}

      <Slider />
      <ProductsCarousele />
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["about"])),
    },
  };
}

export default Home;
