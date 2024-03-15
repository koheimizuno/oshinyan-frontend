import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ImgTagType } from "../../../constant/type";
import { NYP_IMG, NYP_SP_IMG, MEM_BNR_IMG, MEM_BNR_SP_IMG } from "./constants";
import "lazysizes";

const ImgLinkSection = () => {
  const [nypHeight, setNypHeight] = useState<string>();
  const [nypImg, setNypImg] = useState<ImgTagType[]>([]);
  const [memBnrImg, setMemBnrImg] = useState<ImgTagType[]>([]);
  const [memGap, setMemGap] = useState("");

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 452) {
        setNypHeight("h-[208px]");
        setMemBnrImg(MEM_BNR_IMG);
        setMemGap("gap-3");
        setNypImg(NYP_IMG);
      } else {
        setNypHeight("h-[128px]");
        setMemBnrImg(MEM_BNR_SP_IMG);
        setMemGap("gap-2");
        setNypImg(NYP_SP_IMG);
      }
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div className="pt-[40px] pb-[48px] md:pt-[48px] md:pb-[80px]">
        <div className="mb-[24px] hover:opacity-70">
          <Link to="/nyanplace" className="relative block">
            <div
              className={`relative flex items-center overflow-hidden ${nypHeight}`}
            >
              <img
                loading="lazy"
                data-src={nypImg[0]?.src}
                alt={nypImg[0]?.alt}
                className="lazyload absolute left-0"
                width={nypImg[0]?.width}
                height={nypImg[0]?.height}
              />
              <img
                loading="lazy"
                data-src={nypImg[1]?.src}
                alt={nypImg[1]?.alt}
                className="lazyload absolute left-[25%]"
                width={nypImg[0]?.width}
                height={nypImg[0]?.height}
              />
              <img
                loading="lazy"
                data-src={nypImg[2]?.src}
                alt={nypImg[2]?.alt}
                className="lazyload absolute left-[50%]"
                width={nypImg[0]?.width}
                height={nypImg[0]?.height}
              />
              <img
                loading="lazy"
                data-src={nypImg[3]?.src}
                alt={nypImg[3]?.alt}
                className="lazyload absolute left-[75%]"
                width={nypImg[0]?.width}
                height={nypImg[0]?.height}
              />
            </div>
            <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20px] sm:text-[28px] md:text-[32px] text-white font-medium tracking-widest whitespace-nowrap">
              『看板猫に会える場所』一覧
            </p>
          </Link>
        </div>
        <div className="hover:opacity-70">
          <Link
            to="/registration"
            className={`bg-[#F6F0BC] flex flex-col justify-between m-auto ${nypHeight} p-2`}
          >
            <div className="h-[48px] overflow-hidden">
              <div className={`flex flex-wrap ${memGap} justify-between`}>
                {memBnrImg.slice(8).map((item: ImgTagType, key: number) => (
                  <img
                    loading="lazy"
                    key={key}
                    data-src={item.src}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    className="lazyload"
                  />
                ))}
              </div>
            </div>
            <div className="h-[48px] overflow-hidden">
              <div className={`flex ${memGap} justify-center`}>
                {memBnrImg.slice(0, 4).map((item: ImgTagType, key: number) => (
                  <img
                    loading="lazy"
                    key={key}
                    data-src={item.src}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    className="lazyload"
                  />
                ))}
                <p className="text-[20px] sm:text-[28px] md:text-[32px] text-[#C38154] font-medium whitespace-nowrap pl-3 pr-6">
                  『推しニャン！会員』登録
                </p>
                {memBnrImg.slice(4, 8).map((item: ImgTagType, key: number) => (
                  <img
                    loading="lazy"
                    key={key}
                    data-src={item.src}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    className="lazyload"
                  />
                ))}
              </div>
            </div>
            <div className="h-[48px] overflow-hidden">
              <div className={`flex flex-wrap ${memGap} justify-between`}>
                {memBnrImg
                  .reverse()
                  .slice(8)
                  .map((item: ImgTagType, key: number) => (
                    <img
                      loading="lazy"
                      key={key}
                      data-src={item.src}
                      alt={item.alt}
                      width={item.width}
                      height={item.height}
                      className="lazyload"
                    />
                  ))}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ImgLinkSection;
