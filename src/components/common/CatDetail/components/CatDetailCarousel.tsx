import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import ArrowLeft from "../../../basic/icons/ArrowLeft";
import ArrowRight from "../../../basic/icons/ArrowRight";

const IMAGES: string[] = [
  "/assets/imgs/cats/cat_detail_carousel.png",
  "/assets/imgs/cats/cat_detail_carousel.png",
  "/assets/imgs/cats/cat_detail_carousel.png",
];

const CatDetailCarousel = () => {
  return (
    <CarouselProvider
      naturalSlideWidth={5}
      naturalSlideHeight={3}
      totalSlides={3}
      interval={5000}
      className="relative mb-0 bg-white"
    >
      <Slider>
        {IMAGES &&
          IMAGES.map((item: any, key: any) => (
            <Slide index={key} key={key}>
              <img src={item} alt="1" className="w-full h-full" />
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
  );
};

export default CatDetailCarousel;
