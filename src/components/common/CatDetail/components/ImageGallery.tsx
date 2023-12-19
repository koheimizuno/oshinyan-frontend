import { useEffect } from "react";
import CatImage from "./CatImage";
import Container from "../../../basic/Container";
import Multi from "../../../basic/icons/Close";

const CatImgs = [
  {
    imgUrl: "/assets/imgs/cats/favorite_cat.png",
    personName: "猫好きさん",
  },
  {
    imgUrl: "/assets/imgs/cats/favorite_cat.png",
    personName: "猫好きさん",
  },
  {
    imgUrl: "/assets/imgs/cats/favorite_cat.png",
    personName: "猫好きさん",
  },
  {
    imgUrl: "/assets/imgs/cats/favorite_cat.png",
    personName: "猫好きさん",
  },
  {
    imgUrl: "/assets/imgs/cats/favorite_cat.png",
    personName: "猫好きさん",
  },
  {
    imgUrl: "/assets/imgs/cats/favorite_cat.png",
    personName: "猫好きさん",
  },
  {
    imgUrl: "/assets/imgs/cats/favorite_cat.png",
    personName: "猫好きさん",
  },
  {
    imgUrl: "/assets/imgs/cats/favorite_cat.png",
    personName: "猫好きさん",
  },
  {
    imgUrl: "/assets/imgs/cats/favorite_cat.png",
    personName: "猫好きさん",
  },
];
const ImageGallery = ({
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
                className="absolute top-0 right-0 cursor-pointer"
                onClick={() => {
                  setShow(false);
                }}
              >
                <Multi />
              </div>
              <div className="text-base pt-10 font-medium text-white">
                猫の名前
              </div>
              <div className="text-base mt-2 font-medium text-white">
                ニャンアルバム
              </div>
              <div className="w-full border-b border-white mt-4"></div>
              <div className="flex justify-between flex-wrap gap-y-3 pt-6 grow overflow-y-auto">
                {CatImgs.map((e, i) => {
                  return (
                    <CatImage
                      imgUrl={e.imgUrl}
                      personName={e.personName}
                      vote="000"
                      key={i}
                    />
                  );
                })}
              </div>
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

export default ImageGallery;
