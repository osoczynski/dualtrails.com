import data from "public/data.js";
import { Navigation, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductsItem from "./ProductsItem";
import styles from "@/styles/ProductsCarousel.module.css";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

const ProductsCarousele = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className={styles.carousel}>
      <Swiper
        className={styles.swiper}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        modules={[Navigation, A11y]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 15,
          },
        }}
      >
        {data.products.map((product) => (
          <SwiperSlide key={product.slug}>
            <ProductsItem product={product} className />
          </SwiperSlide>
        ))}
        <div ref={nextRef} className={styles.nextButton}>
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
        <div ref={prevRef} className={styles.prevButton}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>
      </Swiper>
    </div>
  );
};

export default ProductsCarousele;
