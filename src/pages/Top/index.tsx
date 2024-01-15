import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Carousel from "../../components/common/Carousel";
import MainLayout from "../../layouts/MainLayout";
import SearchBar from "../../components/common/SearchBar";
import RankingBar from "../../components/common/RankingBar";
import Store from "../../components/common/Store";
import Notices from "../../components/common/Notices";
import PrefectureBtn from "../../components/basic/CustomButton";
import Container from "../../components/basic/Container";
import SocialLinkGroup from "../../components/common/SocialLinkGroup";
import CatCard from "../../components/basic/blog/CatCard";
import axios from "axios";
import { CatObjectType } from "../../constant/type";

const CAROUSELIMAGES: object[] = [
  {
    src: "/assets/imgs/carousel-1.png",
    alt: "carousel-1",
  },
  {
    src: "/assets/imgs/carousel-2.png",
    alt: "carousel-2",
  },
  {
    src: "/assets/imgs/carousel-3.png",
    alt: "carousel-3",
  },
  {
    src: "/assets/imgs/carousel-4.png",
    alt: "carousel-4",
  },
  {
    src: "/assets/imgs/carousel-1.png",
    alt: "carousel-1",
  },
  {
    src: "/assets/imgs/carousel-2.png",
    alt: "carousel-2",
  },
  {
    src: "/assets/imgs/carousel-3.png",
    alt: "carousel-3",
  },
  {
    src: "/assets/imgs/carousel-4.png",
    alt: "carousel-4",
  },
  {
    src: "/assets/imgs/carousel-1.png",
    alt: "carousel-1",
  },
  {
    src: "/assets/imgs/carousel-2.png",
    alt: "carousel-2",
  },
  {
    src: "/assets/imgs/carousel-3.png",
    alt: "carousel-3",
  },
  {
    src: "/assets/imgs/carousel-4.png",
    alt: "carousel-4",
  },
  {
    src: "/assets/imgs/carousel-1.png",
    alt: "carousel-1",
  },
  {
    src: "/assets/imgs/carousel-2.png",
    alt: "carousel-2",
  },
  {
    src: "/assets/imgs/carousel-3.png",
    alt: "carousel-3",
  },
  {
    src: "/assets/imgs/carousel-4.png",
    alt: "carousel-4",
  },
];

const isNew = false;

const Top = () => {
  const [regions, setRegions] = useState<string[]>([]);
  const [catData, setCatData] = useState<CatObjectType[]>([]);
  const { recommendLoading } = useSelector((state: any) => state.recommend);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("randomcat");
        setCatData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [recommendLoading]);

  console.log(catData);
  return (
    <MainLayout>
      <SocialLinkGroup page="top" />
      <Carousel
        data={CAROUSELIMAGES}
        visibleSlides={window.innerWidth / 344}
        spaceBetween={window.innerWidth < 640 ? 8 : 16}
        bgColor="bg-white"
      />
      <SearchBar list={regions} setList={setRegions} />
      <Container>
        <RankingBar />
        {regions.length > 0 && (
          <div className="flex">
            <span className="me-[22px] w-[72px]">エリア</span>
            <div className="flex grow flex-wrap">
              {regions.map((e) => (
                <div className="mx-1 my-1">
                  <PrefectureBtn value={e}></PrefectureBtn>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="mt-[12px]">
          <div className="flex justify-between flex-wrap ">
            {catData &&
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
                  isNew={isNew}
                />
              ))}
          </div>
        </div>
        <div className="bg-white text-center py-[65px] mb-[16px]">
          <h3 className="text-[16px]">キャンペーン / AD</h3>
        </div>
        <div>
          <div className="flex justify-between flex-wrap ">
            {catData &&
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
                  isNew={isNew}
                />
              ))}
          </div>
        </div>
        <div className="pt-[15px] pb-[35px] text-center border-b border-b-solid border-[#CCC]">
          <button className="w-[161px] h-[32px] rounded text-white bg-[#CBB279] shadow-inner text-[16px] py-[5px]">
            <p className="drop-shadow-[1px_1px_rgba(195,129,84,1)] translate-x-0.5">
              もっとみるニャン！
            </p>
          </button>
        </div>
      </Container>
      <Container>
        <div>
          <div className="pt-[48px] pb-[80px]">
            <div className="mb-[24px] hover:opacity-70">
              <a href="/nyanplace" className="relative">
                <img src="/assets/imgs/signboard.png" alt="signboard" />
                <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[32px] text-white font-bold tracking-widest">
                  『看板猫に会える場所』一覧
                </p>
              </a>
            </div>
            <div className="hover:opacity-70">
              <a href="/shopresister">
                <img src="/assets/imgs/member.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </Container>
      <Store />
      <Notices />
    </MainLayout>
  );
};

export default Top;
