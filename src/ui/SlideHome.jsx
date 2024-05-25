import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function SlideHome() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 1000, disableOnInteraction: false }}
      navigation={true}
      pagination={{ clickable: true }}
    >
      {sliderHomeData.map((slide) => (
        <SwiperSlide>
          <div>
            <p>{slide.name}</p>
            <span>₹ {slide.price}</span>
            <button>Buy now</button>
          </div>
          <img src={slide.bannerImage} alt="image" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SlideHome;

const sliderHomeData = [
  {
    name: "realme Buds Wireless 3",
    brand: "realme",
    price: 1799,
    bannerImage:
      "https://dev-shopp.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdayo1mpv0%2Fimage%2Fupload%2Fv1689932562%2Fecom%2Fslider%2Frealmebuds_wnxmdx.webp&w=1080&q=100",
  },
  {
    name: "OnePlus Nord 3 5G",
    brand: "oneplus",
    price: 33999,
    bannerImage:
      "https://dev-shopp.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdayo1mpv0%2Fimage%2Fupload%2Fv1689932563%2Fecom%2Fslider%2F1_Nord35G-desktop_mgdkzw.webp&w=1080&q=100",
  },
  {
    name: "Xiaomi 12 Pro 5G",
    brand: "xiaomi",
    price: 44999,
    bannerImage:
      "https://dev-shopp.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdayo1mpv0%2Fimage%2Fupload%2Fv1689932564%2Fecom%2Fslider%2Fmi-12_lens37.webp&w=1080&q=100",
  },
];
