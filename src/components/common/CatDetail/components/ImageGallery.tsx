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
  setShow
}: {
  onClick?: () => void;
  setShow?: (v: boolean) => void;
  show?: boolean;
}) => {
  useEffect(() => {
    if (show) {
      document.body.classList.add("no-scrollbar");
    } else {
      document.body.classList.remove("no-scrollbar");
    }
  }, [show]);
  return (
    <>
      {show !== undefined && (
        <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0, 0.85)] z-[1000] py-[100px]">
          <Container>
            <div className="absolute top-0 right-0">
              <Multi />
            </div>
            <div className="flex justify-between flex-wrap gap-y-3">
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
          </Container>
        </div>
      )}
    </>
  );
};

export default ImageGallery;
