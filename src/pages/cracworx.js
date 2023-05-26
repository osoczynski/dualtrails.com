import Image from "next/image";
import styles from "@/styles/Cracworx.module.css";
import data from "../../public/data";
import SEO from "@/components/SEO";

export default function Events(props) {
  return (
    <>
      <SEO pageTitle="Cracworx" pageDescription="Cracworx" />
      <div className={styles.container}>
        <div className={styles.gallery}>
          {data.cracworx.map((photo) => (
            <div
              key={photo.id}
              className={`${styles.image} ${styles[`img${photo.id}`]}`}
            >
              <Image
                src={photo.img}
                alt={`photo${photo.id}`}
                className={styles[`${photo.id}`]}
                fill
                priority={true}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
