import { useDispatch, useSelector } from "react-redux";
import { CatObjectType } from "../../../constant/type";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import { RecommendAction } from "../../../slices/recommend";
import { useNavigate } from "react-router-dom";

interface PropsType extends CatObjectType {
  isNew: false;
}

const SmallCatCard = ({
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
      <>
        <div className="relative w-full h-[144px] hover:opacity-70 flex">
          <div className="relative h-full w-[192px] bg-center bg-no-repeat">
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
            <div
              className="absolute top-[8px] right-[8px] z-10"
              ref={recommendLoginElement}
            >
              <span
                className="cursor-pointer rounded-full"
                onClick={handleRecommend}
              >
                {recommend_user.find((e) => e.user == user.user_id) ? (
                  <img
                    src="/assets/imgs/recommend-on.png"
                    alt="recommend-on"
                    width={32}
                  />
                ) : (
                  <img
                    src="/assets/imgs/recommend-off.png"
                    alt="recommend-off"
                    width={32}
                  />
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
          </div>
          <div className="px-[24px] w-[282px] bg-white h-full flex flex-col">
            <div className="pt-[16px]">
              <h3 className="text-[24px] leading-[24px] vertical-bottom font-bold text-left text-ellipsis overflow-hidden whitespace-nowrap">
                {cat_name}
              </h3>
              <a
                href="javascript:;"
                className=" w-[145px] leading-[21px] underline text-[16px] text-ellipsis overflow-hidden tracking-tighter whitespace-nowrap "
              >
                {shop_name}
              </a>
            </div>
            <div className="flex justify-content-start items-center mt-[auto] mb-[8px]">
              <span className=" flex d-inline-block align-items-center w-[24px] h-[24px]  mr-[9px]">
                <img
                  src="/assets/imgs/recommend.svg"
                  className=" align-items-center"
                  alt=""
                />
              </span>
              <h2 className="text-[24px] d-inline-block">
                {recommend_user.length}ニャン
              </h2>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default SmallCatCard;
