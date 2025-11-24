import SEO from "@/components/SEO";
import Slider from "@/components/Slider";
import ProductsCarousele from "@/components/ProductsCarousel";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import Image from "next/image";

function Home() {
  // const { t } = useTranslation("about"); /// FILE TRANSLATION
  const { push, locale } = useRouter();

  useEffect(() => {
    if (Cookies.get("language") === "en")
      push("/", undefined, { locale: "en" });
  }, []);

  const [dots, setDots] = useState("");

  // Animacja kropek
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : ""));
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <SEO pageTitle="Shred Fest" pageDescription="Homepage" />
      {/*{<Slider />}
      <ProductsCarousele />*/}
      <main className="flex items-center justify-center min-h-screen bg-black">
        <div className="w-full max-w-sm px-4">
          <Image
            src="/logov3.png" // lub "/mnt/data/logov3.png"
            alt="Shred Fest Logo"
            width={800}
            height={800}
            className="w-full h-auto mx-auto"
          />
        </div>
        {/* <div
          style={{
            marginTop: "12px",
            fontSize: "18px",
            fontFamily: "monospace",
            fontWeight: "600",
          }}
        >
          Loading{dots}
        </div> */}
      </main>
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
