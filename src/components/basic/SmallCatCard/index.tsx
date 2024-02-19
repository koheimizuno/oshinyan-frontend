import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { CatObjectType } from "../../../constant/type";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { RecommendAction } from "../../../slices/cat";
import { isNewUtil } from "../../../utils/functions";
import CustomButton from "../CustomButton";

const SmallCatCard = ({
  id,
  cat_name,
  shop,
  images,
  recommend,
  created_date,
}: CatObjectType) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const recommendLoginElement = useRef<HTMLDivElement>(null);
  const [recommendLoginShow, setRecommendLoginShow] = useState(false);
  const [isNew, setIsNew] = useState<boolean | undefined>(false);
  const { user } = useSelector((state: any) => state.user);
  const { isAuthenticated } = useSelector((state: any) => state.user);
  useEffect(() => {
    setIsNew(isNewUtil(created_date));
    const handleClickOutside = (event: any) => {
      if (
        recommendLoginElement.current &&
        !recommendLoginElement.current.contains(event.target)
      ) {
        setRecommendLoginShow(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
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
  return (
    <div className="relative m-auto xs:max-w-[300px] lg:max-w-none lg:w-full lg:h-[144px] xs:block lg:flex">
      <div className="relative h-full xs:w-full lg:w-[192px] bg-center bg-no-repeat">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          speed={800}
          pagination={{
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
          }}
          loop={true}
          centeredSlides
          slidesPerView={1}
          navigation={{ nextEl: ".arrow-right", prevEl: ".arrow-left" }}
          className="cursor-pointer hover:opacity-70"
        >
          {images &&
            images.map((item: any, key: any) => (
              <SwiperSlide key={key} className="lg:h-[144px] overflow-x-hidden">
                <Link to={`/oshinyan/${id}`}>
                  <img
                    src={item.imgs}
                    alt={item.imgs}
                    className="m-auto cursor-pointer h-full"
                  />
                </Link>
              </SwiperSlide>
            ))}
          <div className="swiper-pagination custom-pagination-bullets"></div>
          <button className="arrow-left xs:hidden lg:block">
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
          <button className="arrow-right xs:hidden lg:block">
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
        <div
          className="absolute top-[8px] right-[8px] z-10"
          ref={recommendLoginElement}
        >
          <span
            className="cursor-pointer rounded-full"
            onClick={handleRecommend}
          >
            {recommend.find((e) => e.user === user.user_id) ? (
              <img
                src="/assets/imgs/icons/recommend-on.webp"
                alt="recommend-on"
                width={32}
              />
            ) : (
              <img
                src="/assets/imgs/icons/recommend-off.webp"
                alt="recommend-off"
                width={32}
              />
            )}
          </span>
          {recommendLoginShow && (
            <span
              className="absolute -left-5 -bottom-[75px] w-[250px] bg-white px-4 py-2 shadow-lg rounded-xl cursor-pointer"
              onClick={() => navigate("/login")}
            >
              会員ログイン後にボタンを押すことが可能です
              <span className="w-2 h-4 absolute left-10 -top-4 z-20 border-8 border-transparent border-b-white"></span>
            </span>
          )}
        </div>
        {isNew && (
          <span className="absolute top-0 left-0 z-10">
            <img src="/assets/imgs/icons/parts-new.svg" alt="parts-new" />
          </span>
        )}
      </div>
      <div className="xs:px-2 md:px-[24px] max:w-[282px] bg-white h-full flex flex-col">
        <div className="pt-[16px]">
          <h3 className="xs:text-[18px] md:text-[24px] leading-[24px] vertical-bottom font-bold text-left text-ellipsis overflow-hidden whitespace-nowrap">
            {cat_name}
          </h3>
          <button
            className="py-4 w-[145px] leading-[21px] underline text-[16px] text-ellipsis overflow-hidden tracking-tighter whitespace-nowrap "
            onClick={() => navigate(`/nyanplace/${shop.id}`)}
          >
            {shop.shop_name}
          </button>
        </div>
        <div className="flex justify-between items-center mt-[auto] mb-[8px]">
          <div className="flex items-center">
            <span className=" flex d-inline-block align-items-center w-[24px] h-[24px]  mr-[9px]">
              <img
                src="/assets/imgs/icons/recommend.svg"
                className=" align-items-center"
                alt="recommend"
              />
            </span>
            <h2 className="text-[24px] d-inline-block">
              {recommend.length}ニャン
            </h2>
          </div>
          <div>
            <CustomButton value={shop.prefecture}></CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallCatCard;
