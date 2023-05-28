import styles from "@/styles/SizeChart.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const SizeChart = (props) => {
  return (
    <>
      <div className={styles.backdrop} onClick={props.onClose} />
      <div className={styles.modal}>
        <button className={styles.close} onClick={props.onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <Image
          className={styles.img}
          src={props.image}
          alt="sizechart"
          width={1024}
          height={1024}
        />
      </div>
    </>
  );
};

export default SizeChart;
