import styles from "@/styles/Slider.module.css";
import Image from "next/image";
import data from "public/data.js";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

const Slider = () => {
  return (
    <div className={styles.slider}>
      <Swiper
        modules={Autoplay}
        autoplay={{ delay: 2500 }}
        loop={true}
        slidesPerView={1}
      >
        {data.sliderIamges.map((photo) => (
          <SwiperSlide key={photo}>
            <Image src={photo} alt="slider" width={1920} height={1080} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
