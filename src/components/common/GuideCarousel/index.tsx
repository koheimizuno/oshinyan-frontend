import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import ArrowLeft from "../../basic/icons/ArrowLeft";
import ArrowRight from "../../basic/icons/ArrowRight";
import { GUIDEBANNERIMGS } from "./constants";

function GuideCarousel() {
  const [imgWidth, setImgWidth] = useState<number>();
  const [imgHeight, setImgHeight] = useState<number>();
  const handleImageLoad = (
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    const img = event.currentTarget;
    setImgWidth(img.width);
    setImgHeight(img.height);
  };
  return (
    <div className="bg-[#F5F4EC]">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        loop={true}
        centeredSlides
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={0}
        slidesPerView={window.innerWidth / 240}
        navigation={{ nextEl: ".arrow-right", prevEl: ".arrow-left" }}
        className="h-[240px] cursor-pointer"
      >
        {GUIDEBANNERIMGS &&
          GUIDEBANNERIMGS.map((item: any, key: any) => (
            <SwiperSlide key={key}>
              <Link to="/feature/1">
                <img
                  src={item.src}
                  alt={item.src}
                  className="h-full m-auto"
                  onLoad={handleImageLoad}
                  width={imgWidth}
                  height={imgHeight}
                />
              </Link>
            </SwiperSlide>
          ))}
        <>
          <button className="arrow-left xs:hidden md:block">
            <div className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <ArrowLeft />
              </span>
            </div>
          </button>
          <button className="arrow-right xs:hidden md:block">
            <div className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <ArrowRight />
              </span>
            </div>
          </button>
        </>
      </Swiper>
    </div>
  );
}

export default GuideCarousel;
