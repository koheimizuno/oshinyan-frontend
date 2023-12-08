import { off } from "process";
import { useEffect, useState } from "react";

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
        {/* 
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 4"
            data-carousel-slide-to="3"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 5"
            data-carousel-slide-to="4"
          ></button>
        </div> */}
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
          onClick={() => {clearInterval(timer); changeOffset(-1);}}
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
            >
              <g id="btn-スライド" transform="translate(32 32) rotate(180)">
                <g
                  id="Ellipse_6"
                  data-name="Ellipse 6"
                  stroke="#fff"
                  strokeWidth="1"
                  opacity="0.75"
                >
                  <circle cx="16" cy="16" r="16" stroke="none" />
                  <circle cx="16" cy="16" r="15.5" fill="none" />
                </g>
                <path
                  id="Path_1"
                  data-name="Path 1"
                  d="M144,672v8h-8"
                  transform="translate(-562.842 -362.852) rotate(-45)"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                />
              </g>
            </svg>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
          onClick={() => changeOffset(+1)}
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              id="btn-スライド"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
            >
              <g
                id="Ellipse_6"
                data-name="Ellipse 6"
                stroke="#fff"
                strokeWidth="1"
                opacity="0.75"
              >
                <circle cx="16" cy="16" r="16" stroke="none" />
                <circle cx="16" cy="16" r="15.5" fill="none" />
              </g>
              <path
                id="Path_1"
                data-name="Path 1"
                d="M144,672v8h-8"
                transform="translate(-562.842 -362.852) rotate(-45)"
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
              />
            </svg>
          </span>
        </button>
      </div>
    </>
  );
};
export default Carousel;
