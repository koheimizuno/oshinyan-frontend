import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Modal, Box } from "@mui/material";
import Heart from "../../../basic/icons/Heart";

type PropsType = {
  // cat_name: string;
  // displayAll: boolean;
  commentImgs: {
    imgs: string;
    username: string;
    comment: string;
  }[];
  // setDisplayAll: any;
  showAlbumGallery: boolean;
  setShowAlbumGallery: any;
};

const ImageDetail = ({
  commentImgs,
  showAlbumGallery,
  setShowAlbumGallery,
}: PropsType) => {
  return (
    <>
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
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            speed={800}
            pagination={{
              el: ".swiper-pagination",
              type: "bullets",
              clickable: true,
            }}
            loop={true}
            centeredSlides={true}
            slidesPerView={1}
            navigation={{
              nextEl: `.arrow-left`,
              prevEl: `.arrow-right`,
            }}
            className="cursor-pointer w-[960px]"
          >
            {commentImgs.map((item, key) => (
              <div>
                <SwiperSlide key={key} className="inline-block">
                  <div className="h-[500px] overflow-hidden">
                    <img
                      src={item.imgs}
                      alt={item.imgs}
                      className="h-full m-auto"
                    />
                  </div>
                  <div className="px-10">
                    <div className="flex justify-between py-3 text-white text-base">
                      <p>{item.username}</p>
                      <div className="flex gap-2">
                        <span>いいニャン！</span>
                        <span className="flex items-center gap-1">
                          <Heart />
                          000
                        </span>
                      </div>
                    </div>
                    <p className="text-white text-base py-4">{item.comment}</p>
                  </div>
                </SwiperSlide>
              </div>
            ))}
            <div className="swiper-pagination custom-pagination-bullets bottom-32"></div>
            <button className={`arrow-left xs:hidden md:block`}>
              <div className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
                <svg
                  style={{ marginRight: "4px" }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
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
          <div className="w-full mt-8">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              loop={true}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              spaceBetween="16px"
              slidesPerView={
                commentImgs.length > window.innerWidth / 160
                  ? window.innerWidth / 160
                  : commentImgs.length
              }
              navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
              className="h-40 cursor-pointer "
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
              <button className="arrow-left xs:hidden md:block">
                <div className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    {/* <ArrowLeft /> */}
                  </span>
                </div>
              </button>
              <button className="arrow-right1 xs:hidden md:block">
                <div className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    {/* <ArrowRight /> */}
                  </span>
                </div>
              </button>
            </Swiper>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default ImageDetail;
