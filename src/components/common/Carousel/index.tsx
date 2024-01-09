import React from "react";
import ArrowLeft from "../../basic/icons/ArrowLeft";
import ArrowRight from "../../basic/icons/ArrowRight";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Carousel(props: any) {
  return (
    <div className={`${props.bgColor}`}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        loop={true}
        centeredSlides
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={props.spaceBetween}
        slidesPerView={props.visibleSlides}
        navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
        className="h-[240px] cursor-pointer"
      >
        {props.data.map((item: any, key: any) => (
          <SwiperSlide key={key}>
            <a href="/feature/detail/1">
              <img src={item.src} alt={item.alt} className="h-full m-auto" />
            </a>
          </SwiperSlide>
        ))}
        <button className="arrow-left xs:hidden md:block">
          <div className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <ArrowLeft />
            </span>
          </div>
        </button>
        <button className="arrow-left xs:hidden md:block">
          <div className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <ArrowRight />
            </span>
          </div>
        </button>
      </Swiper>
    </div>
  );
}

export default Carousel;
