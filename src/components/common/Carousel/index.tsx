import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import ArrowLeft from "../../basic/icons/ArrowLeft";
import ArrowRight from "../../basic/icons/ArrowRight";

function Carousel(props: any) {
  return (
    <div className={`py-3 ${props.bgColor}`}>
      <CarouselProvider
        naturalSlideWidth={5}
        naturalSlideHeight={55}
        totalSlides={props.totalSlides}
        interval={3000}
        isPlaying={true}
        visibleSlides={props.visibleSlides}
        className="relative bg-white h-[240px] mt-[30px] mb-[40px]"
      >
        <Slider>
          {props.data.map((item: any, key: any) => (
            <Slide index={key}>
              <div className="">
                <img src={item.src} alt={item.alt} className="h-full m-auto" />
              </div>
            </Slide>
          ))}
        </Slider>
        <ButtonBack>
          <div className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <ArrowLeft />
            </span>
          </div>
        </ButtonBack>
        <ButtonNext>
          <div className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <ArrowRight />
            </span>
          </div>
        </ButtonNext>
      </CarouselProvider>
    </div>
  );
}

export default Carousel;
