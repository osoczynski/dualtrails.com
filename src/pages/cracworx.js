import Image from "next/image";
import styles from "@/styles/Cracworx.module.css";
import data from "../../public/data";

export default function Events(props) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>This is Cracworx </h2>
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
            />
          </div>
        ))}
      </div>

      {/* <div className={styles["video-container"]}>
        <iframe
          className={styles.video}
          width="560"
          height="315"
          src="https://www.youtube.com/embed/LmXBBuYAhI0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div> */}
    </div>
  );
}
