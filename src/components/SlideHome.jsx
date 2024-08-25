import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import useProducts from "../services/useProducts";
import { formatter } from "../utils/useCurrencyFormatter";

function SlideHome() {
  const products = useProducts();
  return (
   //image corousel
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 1000, disableOnInteraction: false }}
      navigation={true}
      pagination={{ clickable: true }}
    >
      {products.map(
        (product) =>
          product?.slideBanner && (
            <SwiperSlide key={product.id}>
              <div>
                <p>{product.name}</p>
                <span>{formatter.format(product.price)}</span>
                <button>Buy now</button>
              </div>
              <img src={product.slideBanner} alt="image" />
            </SwiperSlide>
          )
      )}
    </Swiper>
  );
}

export default SlideHome;
