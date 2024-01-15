import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Calendar from "../icons/Calendar";
import CustomButton from "../CustomButton";
import { CatObjectType } from "../../../constant/type";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { RecommendAction } from "../../../slices/recommend";

interface PropsType extends CatObjectType {
  isNew: false;
}

const LargeCatCard = ({
  id,
  cat_name,
  shop_name,
  prefecture,
  cat_images,
  character,
  favorite_things,
  description,
  attendance,
  recommend_user,
  isNew,
}: PropsType) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const recommendLoginElement = useRef<HTMLDivElement>(null);
  const [recommendLoginShow, setRecommendLoginShow] = useState(false);
  const { user } = useSelector((state: any) => state.user);
  const { isAuthenticated } = useSelector((state: any) => state.user);

  useEffect(() => {
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
  }, []);

  const handleRecommend = async () => {
    if (isAuthenticated) {
      if (!recommend_user.find((e) => e.user == user.user_id)) {
        const submitData = {
          cat_id: id,
          user_id: user.user_id,
        };
        const res = await dispatch(RecommendAction(submitData));
      }
    } else {
      setRecommendLoginShow(true);
    }
  };
  return (
    <>
      <div className="relative w-full mb-[15px] flex bg-white">
        <div className="h-full w-[50%]">
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
            navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
            className="cursor-pointer hover:opacity-70"
          >
            {cat_images &&
              cat_images.map((item: any, key: any) => (
                <SwiperSlide key={key}>
                  <a href={`/oshinyan/${1}`}>
                    <img
                      src={item.imgs}
                      alt={item.imgs}
                      className="m-auto cursor-pointer w-full"
                    />
                  </a>
                </SwiperSlide>
              ))}
            <div className="swiper-pagination custom-pagination-bullets"></div>
            <button className="arrow-left xs:hidden md:block">
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
            <button className="arrow-left xs:hidden md:block">
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
        <div className="px-[24px] h-full w-[50%] flex flex-col">
          <div className="pt-[24px]">
            <h3 className="text-[24px] font-bold text-left text-ellipsis overflow-hidden whitespace-nowrap">
              {cat_name}
            </h3>
          </div>
          <div className="flex justify-between pb-[24px]">
            <div>
              <a
                href="javascript:;"
                className=" w-[145px] underline text-[16px] text-ellipsis overflow-hidden tracking-tighter whitespace-nowrap "
              >
                {shop_name}
              </a>
            </div>
            <div>
              <CustomButton value={prefecture}></CustomButton>
            </div>
          </div>
          <hr className="border border-[#CCC]" />
          <div className="flex justify-content-start items-center pt-[10px] pb-[16px] ">
            <div>
              <img src="/assets/imgs/hear-yellow.svg" alt="" />
            </div>
            <div className="pl-[8px]">
              <p>性格</p>
            </div>
            <div className="flex">
              {character &&
                character.map((item, key) => (
                  <div className="pl-[8px]" key={key}>
                    <CustomButton value={item} />
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
          <div className="pb-[43px] grow max-h-[200px] py-2">
            <p className="break-words	text-[16px] text-ellipsis overflow-hidden whitespace-wrap leading-[21px]">
              {description}
            </p>
          </div>
          <div className="flex justify-content-start items-center mt-[15px] mb-[8px]">
            <span className=" flex d-inline-block align-items-center w-[24px] h-[24px]  mr-[9px]">
              <img
                src="/assets/imgs/recommend.svg"
                className=" align-items-center "
                alt=""
              />
            </span>
            <h2 className="text-[24px] d-inline-block">
              {recommend_user.length}ニャン
            </h2>
          </div>
          <div
            className="absolute bottom-6 right-6"
            ref={recommendLoginElement}
          >
            <span
              className="cursor-pointer rounded-full"
              onClick={handleRecommend}
            >
              {recommend_user.find((e) => e.user == user.user_id) ? (
                <img src="/assets/imgs/mark_chu.png" alt="" />
              ) : (
                <img src="/assets/imgs/btn-foot.svg" alt="" />
              )}
            </span>
            {recommendLoginShow && (
              <span
                className="absolute -left-5 -bottom-[75px] w-[250px] bg-white px-4 py-2 shadow-md rounded-xl cursor-pointer"
                onClick={() => navigate("/login")}
              >
                会員ログイン後にボタンを押すことが可能です
                <span className="w-2 h-4 absolute left-10 -top-4 z-20 border-8 border-transparent border-b-white"></span>
              </span>
            )}
          </div>
          {!isNew && (
            <span className="absolute top-0 left-0 z-10">
              <img src="/assets/imgs/parts-new.svg" alt="" />
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default LargeCatCard;
