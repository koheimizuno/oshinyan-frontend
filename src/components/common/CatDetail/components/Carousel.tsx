import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import ArrowLeft from "../../../basic/icons/ArrowLeft";
import ArrowRight from "../../../basic/icons/ArrowRight";

function CatDetailCarousel(props: any) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      speed={800}
      pagination={{
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      }}
      loop={true}
      centeredSlides
      slidesPerView={1}
      navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
    >
      {props.data &&
        props.data.map((item: any, key: any) => (
          <SwiperSlide key={key} className="h-[576px] overflow-x-hidden">
            <img src={item} alt={item} className="h-full m-auto cursor-grab" />
          </SwiperSlide>
        ))}
      <div className="swiper-pagination custom-pagination-bullets"></div>
      <button className="arrow-left xs:hidden md:block">
        <div className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
          <ArrowLeft />
        </div>
      </button>
      <button className="arrow-left xs:hidden md:block">
        <div className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
          <ArrowRight />
        </div>
      </button>
    </Swiper>
  );
}

export default CatDetailCarousel;
