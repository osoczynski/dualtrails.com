import styles from "@/styles/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import zrzutka from "../../assets/zrzutka.png";
import Image from "next/image";

export default function Footer(props) {
  const language = props.locale;
  return (
    <footer className={styles.footer}>
      <div className={styles.contact}>
        <p>{language === "en" ? "contact" : "kontakt"}</p>
        <div className={styles.mail}>
          <a href="mailto:info@dualtrails.com" className={styles.icon}>
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <p>info@dualtrails.com</p>
        </div>
      </div>

      <div className={styles.findUs}>
        <p>{language === "en" ? "find us" : "znajdź nas"}</p>
        <div className={styles.socialMedia}>
          <a
            href="https://www.instagram.com/dualtrails/"
            className={styles.icon}
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.facebook.com/DualTrails" className={styles.icon}>
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.youtube.com/c/sooczek" className={styles.icon}>
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
      </div>

      <div className={styles.zrzutka}>
        <p>{language === "en" ? "help us grow" : "zrzutka"}</p>
        <a href="https://zrzutka.pl/z/dualtrails" className={styles.pig}>
          <Image src={zrzutka} alt="zrzutka" width={340} height={325} />
        </a>
      </div>
    </footer>
  );
}
