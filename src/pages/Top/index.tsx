import React, { useEffect, useState } from "react";
import Carousel from "../../components/common/Carousel";
import MainLayout from "../../layouts/MainLayout";
import SearchBar from "../../components/common/SearchBar";
import RankingBar from "../../components/common/RankingBar";
import Store from "../../components/common/Store";
import Notices from "../../components/common/Notices";
import CustomButton from "../../components/basic/BasicButton";
import Container from "../../components/basic/Container";
import SocialLinkGroup from "../../components/common/SocialLinkGroup";
import axios from "axios";
import BlogBox from "../../components/basic/blog/BlogBox";

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

const Cats = [
  {
    imgUrl: ["/assets/imgs/cats/cat1.png", "/assets/imgs/cats/cat1-2.png"],
    isNew: true,
    isChu: false,
  },
  {
    imgUrl: ["/assets/imgs/cats/cat2.png", "/assets/imgs/cats/cat2-2.png"],
    isNew: true,
    isChu: true,
  },
  {
    imgUrl: ["/assets/imgs/cats/cat3.png", "/assets/imgs/cats/cat3-2.png"],
    isNew: true,
    isChu: false,
  },
  {
    imgUrl: ["/assets/imgs/cats/cat4.png", "/assets/imgs/cats/cat4-2.png"],
    isNew: true,
    isChu: false,
  },
  {
    imgUrl: ["/assets/imgs/cats/cat5.png", "/assets/imgs/cats/cat5-2.png"],
    isNew: true,
    isChu: false,
  },
  {
    imgUrl: ["/assets/imgs/cats/cat6.png", "/assets/imgs/cats/cat6-2.png"],
    isNew: false,
    isChu: false,
  },
  {
    imgUrl: ["/assets/imgs/cats/cat7.png", "/assets/imgs/cats/cat7-2.png"],
    isNew: false,
    isChu: false,
  },
  {
    imgUrl: ["/assets/imgs/cats/cat8.png", "/assets/imgs/cats/cat8-2.png"],
    isNew: false,
    isChu: false,
  },
  {
    imgUrl: ["/assets/imgs/cats/cat9.png", "/assets/imgs/cats/cat9-2.png"],
    isNew: false,
    isChu: false,
  },
];

const Top = () => {
  const [regions, setRegions] = useState<string[]>([]);
  const [catData, setCatData] = useState<object[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("cat");
        console.log(res.data);
        setCatData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

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
                  <CustomButton value={e}></CustomButton>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="mt-[12px]">
          <div className="flex justify-between flex-wrap ">
            {Cats.map((e, i) => (
              <BlogBox
                key={i}
                imgUrl={e.imgUrl}
                isNew={e.isNew}
                isChu={e.isChu}
                name={"heracles"}
                cafe={"cafe"}
                vote={2}
                character={["fdsa", "reqw"]}
                description={"this is description"}
              />
            ))}
          </div>
        </div>
        <div className="bg-white text-center py-[65px] mb-[16px]">
          <h3 className="text-[16px]">キャンペーン / AD</h3>
        </div>
        <div>
          <div className="flex justify-between flex-wrap ">
            {Cats.map((e, i) => (
              <BlogBox
                key={i}
                imgUrl={e.imgUrl}
                isNew={e.isNew}
                isChu={e.isChu}
                name={"heracles"}
                cafe={"cafe"}
                vote={2}
                character={["fdsa", "reqw"]}
                description={"this is description"}
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
