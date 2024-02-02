import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import PageBar from "../../components/common/PageBar";
import Container from "../../components/basic/Container";
import PrefectureBtn from "../../components/basic/CustomButton";
import CatCard from "../../components/basic/blog/CatCard";
import SignboardCard from "../../components/basic/SignboardCard";
import SignboardSearchBar from "../../components/common/SignboardSearchBar";
import SocialLinkGroup from "../../components/common/SocialLinkGroup";
import Title from "../../components/common/Typography/Title";
import axios from "axios";
import { CatObjectType } from "../../constant/type";

const CONTACTINFO = [
  {
    title: "最寄り駅",
    icon: "/assets/imgs/icons/neareststation.png",
    alt: "neareststation",
    content: "□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□",
  },
  {
    title: "電話番号",
    icon: "/assets/imgs/icons/phone.png",
    alt: "phone",
    content: "□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□",
  },
  {
    title: "営業時間",
    icon: "/assets/imgs/icons/clock.png",
    alt: "clock",
    content: "□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□",
  },
  {
    title: "定休日",
    icon: "/assets/imgs/icons/closingday.png",
    alt: "closingday",
    content: "□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□",
  },
];

const Cats = [
  {
    imgUrl: ["/assets/imgs/cats/cat1.png", "/assets/imgs/cats/cat1-2.png"],
    isNew: false,
    isChu: false,
  },
  {
    imgUrl: ["/assets/imgs/cats/cat2.png", "/assets/imgs/cats/cat2-2.png"],
    isNew: false,
    isChu: true,
  },
  {
    imgUrl: ["/assets/imgs/cats/cat3.png", "/assets/imgs/cats/cat3-2.png"],
    isNew: false,
    isChu: false,
  },
];

const LOCATIONS = [
  {
    imgUrl: "/assets/imgs/cats/signboard_cat.png",
    cafe: "カフェ",
    prefecture: "東京都",
  },
  {
    imgUrl: "/assets/imgs/cats/signboard_cat.png",
    cafe: "カフェ",
    prefecture: "東京都",
  },
  {
    imgUrl: "/assets/imgs/cats/signboard_cat.png",
    cafe: "カフェ",
    prefecture: "東京都",
  },
  {
    imgUrl: "/assets/imgs/cats/signboard_cat.png",
    cafe: "カフェ",
    prefecture: "東京都",
  },
  {
    imgUrl: "/assets/imgs/cats/signboard_cat.png",
    cafe: "カフェ",
    prefecture: "東京都",
  },
  {
    imgUrl: "/assets/imgs/cats/signboard_cat.png",
    cafe: "カフェ",
    prefecture: "東京都",
  },
];

function NyanplaceDetail() {
  const [regions, setRegions] = useState<string[]>([]);
  const [catData, setCatData] = useState<CatObjectType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("randomcat");
        setCatData(data);
      } catch (error) {}
    };
    fetchData();
  }, []);

  return (
    <MainLayout>
      <SocialLinkGroup />
      <section className="bg-[#F7F7F7] border-b-4 border-[#FAD2B5]">
        <Container>
          <PageBar page="場所詳細" />
          <Title title="店名店名店名店名店名店名店名店名店名店名店名店名" />
          <div className="flex gap-4">
            <div className="mt-[33px] mb-[25px] hover:opacity-70">
              <PrefectureBtn value="東京都" />
            </div>
            <div className="mt-[33px] mb-[25px] hover:opacity-70">
              <PrefectureBtn value="XXX" />
            </div>
            <div className="mt-[33px] mb-[25px] hover:opacity-70">
              <PrefectureBtn value="XXX" />
            </div>
          </div>

          <div>
            <img src="/assets/imgs/location1.png" alt="location1" />
          </div>

          <div className="py-8 flex flex-col gap-[18px]">
            <div className="flex gap-2">
              <div>
                <img src="/assets/imgs/icons/address.png" alt="address" />
              </div>
              <span className="w-[65px]">住所</span>
              <Link to="#" className="ml-2 border-b border-gray-400">
                □□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□
              </Link>
            </div>
            {CONTACTINFO &&
              CONTACTINFO.map((item, key) => (
                <div className="flex gap-2" key={key}>
                  <div>
                    <img src={item.icon} alt={item.alt} />
                  </div>
                  <span className="w-[65px]">{item.title}</span>
                  <span className="ml-2 text-black">{item.content}</span>
                </div>
              ))}
          </div>

          <div className="flex gap-4 pb-8 border-b border-[#CCCCCC]">
            <span>店舗ホームページ</span>
            <Link to="#" className="border-b border-gray-400">
              xxxxxxxxxxxxxxx.xx.xx
            </Link>
          </div>

          <div>
            <p className="text-2xl pt-6 pb-4">ここで会える「看板猫」</p>
            <div className="flex justify-between flex-wrap ">
              {catData.length !== 0 ? (
                catData.map((e, i) => (
                  <CatCard
                    key={i}
                    id={e.id}
                    cat_name={e.cat_name}
                    shop_name={e.shop_name}
                    prefecture={e.prefecture}
                    cat_images={e.cat_images}
                    character={e.character}
                    favorite_things={e.favorite_things}
                    attendance={e.attendance}
                    description={e.description}
                    recommend_user={e.recommend_user}
                    last_update={e.last_update}
                  />
                ))
              ) : (
                <p className="py-10 block w-full text-center text-xl">
                  お探しの看板猫はありません
                </p>
              )}
            </div>
            <div className="mt-[124px]">
              <img
                src="/assets/imgs/Group 802.png"
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
          <div className="mt-[40px] flex flex-wrap justify-between gap-y-4">
            {LOCATIONS &&
              LOCATIONS.map((e, key) => {
                return (
                  <SignboardCard
                    key={key}
                    imgUrl={e.imgUrl}
                    cafe={e.cafe}
                    prefecture={e.prefecture}
                  />
                );
              })}
          </div>
          <div className="bg-white mt-[20px] mb-[64px]">
            <SignboardSearchBar list={regions} setList={setRegions} />
          </div>
        </Container>
      </section>
    </MainLayout>
  );
}

export default NyanplaceDetail;
