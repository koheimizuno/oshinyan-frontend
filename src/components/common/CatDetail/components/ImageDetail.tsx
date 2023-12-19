import { useEffect, useMemo, useState } from "react";
import CatImage from "./CatImage";
import Container from "../../../basic/Container";
import Multi from "../../../basic/icons/Close";
import ArrowLeft from "../icons/ArrowLeft";
import ArrowRight from "../icons/ArrowRight";
import AliceCarousel from "react-alice-carousel";
import Heart from "../../../basic/icons/Heart";

import "react-alice-carousel/lib/alice-carousel.css";
const handleDragStart = (e: any) => e.preventDefault();
const imgs = new Array(20).fill({
  imgUrl: "/assets/imgs/cats/cat_detail_carousel.png",
  text: "□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□",
  vote: "000",
});

const thumbItems = (
  items: React.JSX.Element[],
  [setThumbIndex, setThumbAnimation]: [
    React.Dispatch<React.SetStateAction<number>>,
    React.Dispatch<React.SetStateAction<boolean>>
  ]
) => {
  return imgs.map((e, i) => (
    <div
      className="thumb w-[200px] px-1 opacity-60"
      onClick={() => (setThumbIndex(i), setThumbAnimation(true))}
    >
      <img src={e.imgUrl} onDragStart={handleDragStart} role="presentation" />
    </div>
  ));
};

const items = imgs.map((e: { imgUrl: string }) => (
  <div className="w-full">
    <img
      src={e.imgUrl}
      onDragStart={handleDragStart}
      role="presentation"
      className="w-full"
    />
    <div className="flex justify-between mt-2">
      <span className="text-base underline text-white">猫好きさん</span>
      <div className="flex w-[48px] h-[18px] right-[5px] bottom-[5px]">
        <div className="me-1">
          <Heart />
        </div>
        <div className="text-white text-[12px] leading-4">{111}</div>
      </div>
    </div>
    <div className="mt-3 text-base text-white break-all">
      □□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□
    </div>
  </div>
));
const ImageDetail = ({
  onClick,
  show,
  setShow,
}: {
  onClick?: () => void;
  setShow: (v: boolean) => void;
  show: boolean;
}) => {
  useEffect(() => {
    if (show) {
      document.body.classList.add("no-scrollbar");
      document.querySelector("html")?.classList.add("no-scrollbar");
    } else {
      document.body.classList.remove("no-scrollbar");
      document.querySelector("html")?.classList.remove("no-scrollbar");
    }
  }, [show]);

  const offset = useMemo(() => {
    const fullWidth = window.innerWidth;
    const offset = fullWidth > 960 ? (fullWidth - 960) / 2 : 0;
    return offset;
  }, []);

  const [mainIndex, setMainIndex] = useState(0);
  const [mainAnimation, setMainAnimation] = useState(false);
  const [thumbIndex, setThumbIndex] = useState(0);
  const [thumbAnimation, setThumbAnimation] = useState(false);
  const [thumbs] = useState(
    thumbItems(items, [setThumbIndex, setThumbAnimation])
  );

  const slideNext = () => {
    if (!thumbAnimation && thumbIndex < thumbs.length - 1) {
      setThumbAnimation(true);
      setThumbIndex(thumbIndex + 1);
    }
  };

  const slidePrev = () => {
    if (!thumbAnimation && thumbIndex > 0) {
      setThumbAnimation(true);
      setThumbIndex(thumbIndex - 1);
    }
  };

  const syncMainBeforeChange = () => {
    setMainAnimation(true);
  };

  const syncMainAfterChange = (e: any) => {
    setMainAnimation(false);

    if (e.type === "action") {
      setThumbIndex(e.item);
      setThumbAnimation(false);
    } else {
      setMainIndex(thumbIndex);
    }
  };

  const syncThumbs = (e: any) => {
    setThumbIndex(e.item);
    setThumbAnimation(false);

    if (!mainAnimation) {
      setMainIndex(e.item);
    }
  };
  return (
    <>
      {show && (
        <div
          className="fixed top-0 left-0 w-full h-full z-[1000]"
          style={{ backgroundColor: "rgba(0,0,0,0.85)" }}
        >
          <Container>
            <div className="relative max-h-[94vh] m-auto top-[3vw] flex flex-col">
              <div
                className="absolute top-0 right-0 cursor-pointer z-[10000]"
                onClick={() => {
                  setShow(false);
                }}
              >
                <Multi />
              </div>
              <div className="relative w-5/6 m-auto">
                <div className="mx-10 mt-16">
                  <AliceCarousel
                    activeIndex={mainIndex}
                    animationType="fadeout"
                    animationDuration={800}
                    disableDotsControls
                    disableButtonsControls
                    items={items}
                    mouseTracking={!thumbAnimation}
                    onSlideChange={syncMainBeforeChange}
                    onSlideChanged={syncMainAfterChange}
                    touchTracking={!thumbAnimation}
                  />
                </div>
                <div className="btn-prev absolute top-[50%] left-0 cursor-pointer" onClick={slidePrev}>
                  <ArrowLeft />
                </div>
                <div className="btn-next absolute top-[50%] right-0 cursor-pointer" onClick={slideNext}>
                  <ArrowRight />
                </div>
              </div>
                <div
                  className="thumbs mt-8 w-[100vw] "
                  style={{ marginLeft: `-${offset}px` }}
                >
                  <AliceCarousel
                    activeIndex={thumbIndex}
                    autoWidth
                    disableDotsControls
                    disableButtonsControls
                    items={thumbs}
                    mouseTracking={false}
                    onSlideChanged={syncThumbs}
                    touchTracking={!mainAnimation}
                  />
                  <div className="btn-prev absolute bottom-[40px] left-0 cursor-pointer" onClick={slidePrev}>
                    <ArrowLeft />
                  </div>
                  <div className="btn-next absolute bottom-[40px] right-0 cursor-pointer" onClick={slideNext}>
                    <ArrowRight />
                  </div>
                </div>
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

export default ImageDetail;
