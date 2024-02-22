import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import PageBar from "../../components/common/PageBar";
import Container from "../../components/basic/Container";
import PrefectureBtn from "../../components/basic/CustomButton";
import CatCard from "../../components/basic/blog/CatCard";
import NyanPlaceCard from "../../components/basic/NyanPlaceCard";
import SocialLinkGroup from "../../components/common/SocialLinkGroup";
import Title from "../../components/common/Typography/Title";
import axios from "axios";
import { CatObjectType, ShopType } from "../../constant/type";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

function NyanplaceDetail() {
  const { id } = useParams();
  const [shopData, setShopData] = useState<CatObjectType[]>([]);
  const [AshopData, setAShopData] = useState<ShopType>({
    shop_name: "",
    prefecture: "",
    address: "",
    shop_type: {
      id: "",
      shop_type: "",
    },
  });
  useEffect(() => {
    const fetchAShopData = async () => {
      const { data } = await axios.get(`api/shop/${id}/`);
      setAShopData(data);
    };
    const fetchShopData = async () => {
      const { data } = await axios.get("api/shop/");
      setShopData(data);
    };
    fetchAShopData();
    fetchShopData();
  }, [id]);

  return (
    <MainLayout>
      <SocialLinkGroup />
      <section className="bg-[#F7F7F7] border-b-4 border-[#FAD2B5]">
        <Container>
          <PageBar page="場所詳細" />
          <Title title={AshopData.shop_name} />
          <div className="flex gap-4">
            <div className="mt-[33px] mb-[25px] hover:opacity-70">
              <PrefectureBtn value={AshopData.prefecture} />
            </div>
          </div>
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
          >
            {AshopData.shop_images &&
              AshopData.shop_images.map((item: any, key: any) => (
                <SwiperSlide key={key} className="h-[540px] overflow-x-hidden">
                  <img
                    src={item.imgs}
                    alt={item.imgs}
                    className="h-full m-auto"
                  />
                </SwiperSlide>
              ))}
            <div className="swiper-pagination custom-pagination-bullets"></div>
            <button className="arrow-left xs:hidden md:block">
              <div className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
                {/* <ArrowLeft /> */}
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
            <button className="arrow-right xs:hidden md:block">
              <div className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
                {/* <ArrowRight /> */}
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

          <div className="md:pt-8 pb-8 flex flex-col gap-[18px]">
            <div className="flex items-start gap-5">
              <div className="flex items-center gap-2 w-[97px] md:w-[150px]">
                <div>
                  <img src="/assets/imgs/icons/address.webp" alt="address" />
                </div>
                <span className="whitespace-nowrap">住所</span>
              </div>
              {AshopData.address && (
                <Link
                  to={""}
                  className="w-[calc(100%-97px)] md:w-[calc(100%-150px)] border-b border-white hover:border-gray-400 break-all"
                >
                  {AshopData.address}
                </Link>
              )}
            </div>
            <div className="flex gap-5">
              <div className="flex items-center gap-2 w-[97px] md:w-[150px]">
                <div>
                  <img
                    src="/assets/imgs/icons/neareststation.webp"
                    alt="neareststation"
                  />
                </div>
                <span className="whitespace-nowrap">最寄り駅</span>
              </div>
              <p className="w-[calc(100%-97px)] md:w-[calc(100%-150px)]">
                {AshopData.nearest_station}
              </p>
            </div>
            <div className="flex gap-5">
              <div className="flex items-center gap-2 w-[97px] md:w-[150px]">
                <div>
                  <img src="/assets/imgs/icons/phone.webp" alt="phone" />
                </div>
                <span className="whitespace-nowrap">電話番号</span>
              </div>
              <p className="w-[calc(100%-97px)] md:w-[calc(100%-150px)]">
                {AshopData.phone}
              </p>
            </div>
            <div className="flex gap-5">
              <div className="flex items-center gap-2 w-[97px] md:w-[150px]">
                <div>
                  <img src="/assets/imgs/icons/clock.webp" alt="clock" />
                </div>
                <span className="whitespace-nowrap">営業時間</span>
              </div>
              <p className="w-[calc(100%-97px)] md:w-[calc(100%-150px)]">
                {AshopData.business_time}
              </p>
            </div>
            <div className="flex gap-5">
              <div className="flex items-center gap-2 w-[97px] md:w-[150px]">
                <div>
                  <img src="/assets/imgs/icons/restday.webp" alt="restday" />
                </div>
                <span className="whitespace-nowrap">定休日</span>
              </div>
              <p className="w-[calc(100%-97px)] md:w-[calc(100%-150px)]">
                {AshopData.rest_day}
              </p>
            </div>
          </div>

          <div className="flex gap-4 pb-8 border-b border-[#CCCCCC]">
            <span>店舗ホームページ</span>
            {AshopData.url && (
              <Link to={AshopData.url} className="border-b border-gray-400">
                {AshopData.url}
              </Link>
            )}
          </div>

          <div>
            <p className="text-2xl pt-6 pb-4">ここで会える「看板猫」</p>
            <div className="flex justify-between flex-wrap ">
              {AshopData.cat &&
                AshopData.cat.map((e: any, i: number) => (
                  <CatCard
                    key={i}
                    id={e.id}
                    is_public={e.is_public}
                    cat_name={e.cat_name}
                    shop={e.shop}
                    images={e.images}
                    admin_images={e.admin_images}
                    character={e.character}
                    favorite_things={e.favorite_things}
                    attendance={e.attendance}
                    description={e.description}
                    recommend={e.recommend}
                    created_date={e.created_date}
                  />
                ))}
            </div>
            <div className="mt-[124px]">
              <img
                src="/assets/imgs/Group 802.webp"
                alt="Group 802"
                className="m-auto"
              />
            </div>
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <h3 className="text-2xl mt-[76px] mb-[40px] pb-3 border-b border-[#CBB279]">
            近くの「看板猫」がいる場所
          </h3>
          <div className="mt-[40px] mb-[20px] flex flex-wrap justify-between gap-y-4">
            {shopData &&
              shopData.map((e: any, key: number) => {
                return (
                  <NyanPlaceCard
                    key={key}
                    id={e.id}
                    shop_name={e.shop_name}
                    prefecture={e.prefecture}
                    shop_images={e.shop_images}
                    shop_type={e.shop_type}
                  />
                );
              })}
          </div>
          <div className="bg-white mb-[64px]">
            {/* <SignboardSearchBar list={regions} setList={setRegions} /> */}
          </div>
        </Container>
      </section>
    </MainLayout>
  );
}

export default NyanplaceDetail;
