import { useEffect, useState } from "react";
import ArrowLeft from "../../basic/icons/ArrowLeft";
import ArrowRight from "../../basic/icons/ArrowRight";

const IMAGES: string[] = [
  "/assets/imgs/carousel-1.png",
  "/assets/imgs/carousel-2.png",
  "/assets/imgs/carousel-3.png",
  "/assets/imgs/carousel-4.png",
];
const Image = ({ src }: { src: string }) => {
  return (
    <div className={"w-[344px] h-[240px] mx-1 rounded-2xl inline-block"}>
      <img src={src} alt="" className="w-full h-full" />
    </div>
  );
};
const W_FULL = window.innerWidth;
const IMG_WIDTH = 352;

const Carousel = () => {
  const [curNo, setCurNo] = useState<number>(0);
  const [offset, setOffSet] = useState<number>(0);
  const [timer, setTimer] = useState<NodeJS.Timer>();

  const changeOffset = (direction: number) => {
    const len = IMAGES.length;
    let no = curNo + direction;
    if (no >= len) {
      no = 0;
    } else if (no < 0) {
      no = len - 1;
    }

    setCurNo(no);
  };



  useEffect(() => {
    const id = setInterval(() => {
        changeOffset(1);
    }, 5000);
    setTimer(id);
  }, []);

  useEffect(() => {
    const countImg = Math.floor(W_FULL / IMG_WIDTH);
    const temp =
      countImg % 2
        ? (W_FULL - countImg * IMG_WIDTH) / 2 - IMG_WIDTH - IMG_WIDTH * curNo
        : (W_FULL - countImg * IMG_WIDTH) / 2 -
          IMG_WIDTH / 2 -
          IMG_WIDTH * curNo;
    setOffSet(temp);
  }, [curNo]);

  return (
    <>
      <div className="relative  h-[240px] overflow-hidden">
        <div
          className="absolute flex transition-all duration-300"
          style={{ left: offset + "px" }}
        >
          {IMAGES.map((src, index) => {
            return <Image src={src} key={index} />;
          })}
          {IMAGES.slice(0, 4).map((src, index) => {
            return <Image src={src} key={index} />;
          })}
        </div>
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
          onClick={() => {clearInterval(timer); changeOffset(-1);}}
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <ArrowLeft />
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
          onClick={() => changeOffset(+1)}
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <ArrowRight />
          </span>
        </button>
      </div>
    </>
  );
};
export default Carousel;
