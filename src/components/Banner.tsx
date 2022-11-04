import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay } from "swiper";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

const Banner = () => {
  return (
    <div className="container">
      <div className="banner">
        <Swiper
          modules={[Pagination, Autoplay, A11y]}
          autoplay={{
            delay: 5000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <Link className="banner__photo" to="/banners">
              <img src="img/banner.png" alt="Banner: Books" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link className="banner__photo" to="/banners">
              <img src="img/banner.png" alt="Banner: Books" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link className="banner__photo" to="/banners">
              <img src="img/banner.png" alt="Banner: Books" />
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
