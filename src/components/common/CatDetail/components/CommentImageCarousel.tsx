import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Controller,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import { Modal, Box } from "@mui/material";
import Heart from "../../../basic/icons/Heart";
import { CommentImageType } from "../../../../constant/type";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { CommentImageRecommentAction } from "../../../../slices/cat";

type PropsType = {
  username: string;
  comment: string;
  commentImgs: CommentImageType[];
  showAlbumGallery: boolean;
  setShowAlbumGallery: any;
};

SwiperCore.use([Controller, Navigation]);

const CommentImageCarousel = ({
  username,
  comment,
  commentImgs,
  showAlbumGallery,
  setShowAlbumGallery,
}: PropsType) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: any) => state.user);
  const [firstSwiper, setFirstSwiper] = useState<SwiperCore | null>(null);
  const [secondSwiper, setSecondSwiper] = useState<SwiperCore | null>(null);

  const handleCommentImageRecommend = async (id: number) => {
    const actionData = {
      user_id: user.user_id,
      comment_image_id: id,
    };
    dispatch(CommentImageRecommentAction(actionData));
  };

  return (
    <Modal
      open={showAlbumGallery}
      onClose={() => setShowAlbumGallery(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: "rgba(0,0,0,.85)",
          },
        },
      }}
    >
      <Box className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 outline-none">
        <div className="w-[960px] m-auto px-14 text-right">
          <span
            className="text-white text-[60px] cursor-pointer"
            onClick={() => setShowAlbumGallery(false)}
          >
            &times;
          </span>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          loop={true}
          centeredSlides={true}
          centeredSlidesBounds={true}
          speed={800}
          slidesPerView={1}
          pagination={{
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
          }}
          navigation={{
            nextEl: `.arrow-right`,
            prevEl: `.arrow-left`,
          }}
          className="cursor-pointer w-[960px]"
          onSwiper={setFirstSwiper}
          controller={{ control: secondSwiper }}
        >
          {commentImgs.map((item, key) => (
            <SwiperSlide key={key} className="inline-block">
              <div className="h-[600px] relative">
                <img
                  src={item.imgs}
                  alt={item.imgs}
                  className={`m-auto`}
                  style={{ height: "calc(100% - 100px)" }}
                />
                <div className="px-[60px]">
                  <div className="flex justify-between py-3 text-white text-base">
                    <p>{username}</p>
                    <div className="flex gap-2">
                      <span>いいニャン！</span>
                      <span
                        className="flex items-center gap-1"
                        onClick={() => handleCommentImageRecommend(item.id)}
                      >
                        <Heart />
                        {item.comment_images_recommend.length}
                      </span>
                    </div>
                  </div>
                  <p className="text-white text-base py-4">{comment}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          {/* <div className="swiper-pagination custom-pagination-bullets bottom-[130px] left-[50px]"></div> */}
          <button className={`arrow-left xs:hidden md:block`}>
            <div className="absolute top-0 -start-4 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
              <svg
                style={{ marginRight: "4px" }}
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
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
          <button className={`arrow-right xs:hidden md:block`}>
            <div className="absolute top-0 -end-4 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
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
        <div className="w-full mt-8">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            loop={true}
            centeredSlides={true}
            centeredSlidesBounds={true}
            spaceBetween="16px"
            slidesPerView={window.innerWidth / 160}
            navigation={{
              nextEl: `.arrow-right`,
              prevEl: `.arrow-left`,
            }}
            className="h-40 cursor-pointer flex flex-wrap"
            onSwiper={setSecondSwiper}
            controller={{ control: firstSwiper }}
          >
            {commentImgs &&
              commentImgs.map((item: any, key: any) => (
                <SwiperSlide key={key}>
                  <img
                    src={item.imgs}
                    alt={item.imgs}
                    className="h-full m-auto"
                  />
                </SwiperSlide>
              ))}
            <button className="arrow-left xs:hidden md:block absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
              <svg
                style={{ marginRight: "4px" }}
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
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
            </button>
            <button className="arrow-right xs:hidden md:block absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
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
            </button>
          </Swiper>
        </div>
      </Box>
    </Modal>
  );
};

export default CommentImageCarousel;
