import React, { useEffect, useState } from "react";
import ArrowLeft from "../../basic/icons/ArrowLeft";
import ArrowRight from "../../basic/icons/ArrowRight";
import { BannerType } from "../../../constant/type";
import { Notification } from "../../../constant/notification";
import axios from "axios";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

function BannerCarousel() {
  const [bannerData, setBannerData] = useState<BannerType[]>([]);
  const [imgWidth, setImgWidth] = useState<number>();
  const [imgHeight, setImgHeight] = useState<number>();

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        let list: BannerType[] = [];
        const { data } = await axios.get("api/banner/");
        data.forEach((item: BannerType) => {
          list.push(item);
        });
        data.forEach((item: BannerType) => {
          list.push(item);
        });
        setBannerData(list);
      } catch (error) {
        Notification("error", "サーバーエラー");
      }
    };
    fetchBanner();
  }, []);

  const handleImageLoad = (
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    const img = event.currentTarget;
    setImgWidth(img.width);
    setImgHeight(img.height);
  };

  return (
    <div className="bg-white">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        speed={800}
        loop={true}
        centeredSlides
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={window.innerWidth < 640 ? 8 : 16}
        slidesPerView={window.innerWidth / 344}
        navigation={{ nextEl: ".arrow-right", prevEl: ".arrow-left" }}
        className="h-[256px] cursor-pointer py-2 m-0"
      >
        {bannerData &&
          bannerData.map((item: any, key: any) => (
            <SwiperSlide key={key}>
              <a href={item.url}>
                <img
                  fetchpriority="high"
                  loading="lazy"
                  src={item.image}
                  alt={item.image}
                  onLoad={handleImageLoad}
                  width={imgWidth}
                  height={imgHeight}
                  className="h-full m-auto"
                />
              </a>
            </SwiperSlide>
          ))}
        <div>
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
        </div>
      </Swiper>
    </div>
  );
}

export default BannerCarousel;
