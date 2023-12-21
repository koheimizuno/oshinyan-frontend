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

const IMAGES: string[] = [
  "/assets/imgs/carousel-1.png",
  "/assets/imgs/carousel-2.png",
  "/assets/imgs/carousel-3.png",
];

function Carousel() {
  return (
    <div className="py-3 bg-white">
      <CarouselProvider
        naturalSlideWidth={5}
        naturalSlideHeight={3}
        totalSlides={3}
        interval={5000}
        isPlaying={true}
        visibleSlides={3}
        className="relative bg-white h-[240px]"
      >
        <Slider>
          {IMAGES.map((item: any, key: any) => (
            <Slide index={key}>
              <div className="">
                <img src={item} alt="1" className="h-full m-auto" />
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
