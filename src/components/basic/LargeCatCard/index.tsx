import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Calendar from "../icons/Calendar";
import CustomButton from "../CustomButton";
import { CatObjectType } from "../../../constant/type";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { RecommendAction } from "../../../slices/cat";
import { isNewUtil } from "../../../utils/functions";
import "lazysizes";

const LargeCatCard = ({
  id,
  cat_name,
  shop,
  images,
  character,
  description,
  attendance,
  recommend,
  created_date,
}: CatObjectType) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const recommendLoginElement = useRef<HTMLDivElement>(null);
  const [recommendLoginShow, setRecommendLoginShow] = useState(false);
  const [loginSectionHover, setLoginSectionHover] = useState(false);
  const [isNew, setIsNew] = useState<boolean | undefined>(false);
  const [hoverAction, setHoverAction] = useState(false);
  const [imgWidth, setImgWidth] = useState<number>();
  const [imgHeight, setImgHeight] = useState<number>();
  const { user } = useSelector((state: any) => state.user);
  const { isAuthenticated } = useSelector((state: any) => state.user);

  useEffect(() => {
    setIsNew(isNewUtil(created_date));
  }, [created_date]);

  const handleRecommend = async () => {
    if (isAuthenticated) {
      if (!recommend.find((e) => e.user === user.user_id)) {
        const submitData = {
          cat_id: id,
          user_id: user.user_id,
        };
        await dispatch(RecommendAction(submitData));
      }
    } else {
      setRecommendLoginShow(true);
    }
  };

  const handleImageLoad = (
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    const img = event.currentTarget;
    setImgWidth(img.width);
    setImgHeight(img.height);
  };

  return (
    <div
      className={`relative xs:max-w-[480px] xs:m-auto md:max-w-none w-full mb-[15px] md:grid md:grid-cols-2 bg-white ${
        hoverAction && "transform transition duration-500 scale-105"
      }`}
      onMouseOver={() => setHoverAction(true)}
      onMouseLeave={() => setHoverAction(false)}
    >
      <div className="h-full">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          pagination={{
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
          }}
          loop={true}
          centeredSlides
          slidesPerView={1}
          navigation={{
            nextEl: `.arrow-right${id}`,
            prevEl: `.arrow-left${id}`,
          }}
          className="cursor-pointer"
        >
          {images &&
            images.map((item: any, key: any) => (
              <SwiperSlide key={key} className="h-[360px] overflow-x-hidden">
                <Link to={`/oshinyan/${id}`}>
                  <img
                    data-src={item.imgs}
                    alt={item.imgs.substring(item.imgs.lastIndexOf("/") + 1)}
                    className="lazyload m-auto cursor-pointer max-w-full h-full"
                    onLoad={handleImageLoad}
                    width={imgWidth}
                    height={imgHeight}
                  />
                </Link>
              </SwiperSlide>
            ))}
          <div className="swiper-pagination custom-pagination-bullets"></div>
          <button className={`arrow-left${id} xs:hidden md:block`}>
            <div className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
              <svg
                style={{ marginRight: "4px" }}
                xmlns="http://www.w3.org/2000/svg"
                width="12.728"
                height="12.728"
                viewBox="0 0 12.728 12.728"
              >
                <path
                  id="arr_left"
                  d="M499-1749v8h-8"
                  transform="translate(-877.52 -1577.555) rotate(135)"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  opacity="0.75"
                />
              </svg>
            </div>
          </button>
          <button className={`arrow-right${id} xs:hidden md:block`}>
            <div className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12.728"
                height="12.728"
                viewBox="0 0 12.728 12.728"
              >
                <path
                  id="arr_right"
                  d="M499-1749v8h-8"
                  transform="translate(890.247 1590.283) rotate(-45)"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  opacity="0.75"
                />
              </svg>
            </div>
          </button>
        </Swiper>
      </div>
      <div className="px-[24px] h-full flex flex-col justify-between">
        <div className="pt-[24px]">
          <h3 className="text-[24px] font-bold text-left text-ellipsis overflow-hidden whitespace-nowrap">
            {cat_name}
          </h3>
        </div>
        <div className="flex justify-between pb-[24px]">
          <div>
            <button
              className=" w-[145px] underline text-[16px] text-ellipsis overflow-hidden tracking-tighter whitespace-nowrap hover:bg-red"
              onClick={() => navigate(`/nyanplace/${shop.id}`)}
            >
              {shop.shop_name}
            </button>
          </div>
          <div>
            <CustomButton value={shop.prefecture}></CustomButton>
          </div>
        </div>
        <hr className="border border-[#CCC]" />
        <div className="flex justify-content-start items-center pt-[10px] pb-[16px] ">
          <div>
            <img
              src="/assets/imgs/icons/hear-yellow.webp"
              alt="hear-yellow"
              width={24}
              height={24}
            />
          </div>
          <div className="px-[8px] whitespace-nowrap">
            <p>性格</p>
          </div>
          <div className="flex flex-wrap gap-1">
            {character &&
              character.map((item, key) => (
                <div key={key}>
                  <CustomButton value={item.character} />
                </div>
              ))}
          </div>
        </div>
        <div className="flex pb-[16px]">
          <div className="flex">
            <Calendar />
            <span className="ms-[8px] me-[8px]">出勤頻度</span>
            <CustomButton value={attendance} />
          </div>
        </div>
        <hr className="border border-[#CCC] p-0 m-0" />
        <div className="grow max-h-[200px] py-2">
          <p className="break-words	text-[16px] text-ellipsis overflow-hidden whitespace-wrap leading-[21px]">
            {description}
          </p>
        </div>
        <div className="flex justify-content-start items-center mt-[15px] mb-[8px]">
          <span className=" flex d-inline-block align-items-center w-[24px] h-[24px]  mr-[9px]">
            <img
              src="/assets/imgs/icons/recommend.webp"
              className=" align-items-center "
              alt="recommend"
              width={24}
              height={24}
            />
          </span>
          <h2 className="text-[24px] d-inline-block">
            {recommend.length}ニャン
          </h2>
        </div>
        <div
          className="absolute bottom-3 right-6"
          ref={recommendLoginElement}
          onMouseLeave={() => {
            if (!loginSectionHover) {
              setRecommendLoginShow(false);
              setLoginSectionHover(false);
            }
          }}
        >
          <span
            className="cursor-pointer rounded-full"
            onClick={handleRecommend}
          >
            {recommend.find((e) => e.user === user.user_id) ? (
              <img
                src="/assets/imgs/icons/recommend-on.webp"
                alt="recommend-on"
              />
            ) : (
              <img
                src="/assets/imgs/icons/recommend-off.webp"
                alt="recommend-off"
                width={48}
                height={48}
              />
            )}
          </span>
          {recommendLoginShow && (
            <span
              className="absolute z-[9999] right-1 -bottom-[70px] w-[250px] bg-white px-4 py-2 shadow-md rounded-xl cursor-pointer"
              onClick={() => navigate("/login")}
              onMouseOver={() => setLoginSectionHover(true)}
              onMouseLeave={() => {
                setRecommendLoginShow(false);
                setLoginSectionHover(false);
              }}
            >
              会員ログイン後にボタンを押すことが可能です
              <div className="absolute right-2 -top-4 w-full flex justify-end">
                <span className="w-2 h-4 z-20 border-8 border-transparent border-b-white"></span>
              </div>
            </span>
          )}
        </div>
        {isNew && (
          <span className="absolute top-0 left-0 z-10">
            <img src="/assets/imgs/icons/parts-new.webp" alt="parts-new" />
          </span>
        )}
      </div>
    </div>
  );
};

export default LargeCatCard;
