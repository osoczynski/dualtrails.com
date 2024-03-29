import Image from "next/image";
import styles from "@/styles/AboutUs.module.css";
import data from "../../public/data";
import Card from "@/components/UI/Card";
import SEO from "@/components/SEO";
import { useRouter } from "next/router";

export default function AboutUs() {
  const { locale } = useRouter();

  return (
    <>
      <SEO pageTitle="About Us" pageDescription="About Us" />
      <div className={styles.aboutus}>
        <div className={styles.img}>
          <Card>
            <Image
              src="/images/aboutus/main.jpg"
              alt="img6"
              width={1440}
              height={960}
            />
          </Card>
        </div>

        {data.aboutUs.map((section) => (
          <div key={section.id} className={styles.story}>
            <p>
              {locale === "en" ? section.descriptionENG : section.descriptionPL}
            </p>

            <div className={styles.img}>
              <Card>
                <Image
                  src={section.photo}
                  alt={`photo${section.id}`}
                  width={1440}
                  height={960}
                />
              </Card>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
