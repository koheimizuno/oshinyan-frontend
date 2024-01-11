import React, { useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import SearchBar from "../../components/common/SearchBar";
import RankingBar from "../../components/common/RankingBar";
import Store from "../../components/common/Store";
import Notices from "../../components/common/Notices";
import LargeCard from "../../components/basic/LargeCard";
import BlogBox from "../../components/basic/blog/BlogBox";
import { CapSecond } from "../../components/basic/icons/CapSecond";
import { CapThird } from "../../components/basic/icons/CapThird";
import SmallCard from "../../components/basic/SmallCard";
import SocialLinkGroup from "../../components/common/SocialLinkGroup";
import axios from "axios";

const Cats = [
  {
    imgUrl: [
      "/assets/imgs/cats/top_cat.png",
      "/assets/imgs/cats/top_cat-2.png",
    ],
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
    isNew: true,
    isChu: false,
  },
  {
    imgUrl: ["/assets/imgs/cats/cat7.png", "/assets/imgs/cats/cat7-2.png"],
    isNew: true,
    isChu: false,
  },
  {
    imgUrl: ["/assets/imgs/cats/cat8.png", "/assets/imgs/cats/cat8-2.png"],
    isNew: true,
    isChu: false,
  },
  {
    imgUrl: ["/assets/imgs/cats/cat9.png", "/assets/imgs/cats/cat9-2.png"],
    isNew: true,
    isChu: false,
  },
  {
    imgUrl: ["/assets/imgs/cats/cat9.png", "/assets/imgs/cats/cat9-2.png"],
    isNew: true,
    isChu: false,
  },
];

interface CatObjectType {
  cat_name: string;
  shop_name: string;
  prefecture: string;
  cat_images: any[];
  character: string[];
  favorite_things: string[];
  description: string;
  like_num: number;
}

const isChu = true;
const isNew = false;

const MonthRanking = () => {
  const [list, setList] = useState<string[]>([]);
  const [catData, setCatData] = useState<CatObjectType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("cat");
        setCatData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  catData && console.log(catData[0]?.cat_images[0]?.imgs);

  return (
    <MainLayout>
      <SocialLinkGroup />
      <SearchBar list={list} setList={setList} />
      <div className="bg-[#F5F4EC]">
        <div className="  w-[960px] m-auto ">
          <RankingBar page="ranking" />
          <div className="text-[40px] leading-[53px]">
            <span>2023年11月</span>
          </div>
          <div className="ranking-1 mt-[24px] mb-[24px]">
            <div className="ranking-1-tle flex gap-[8px]">
              <img src="/assets/imgs/ranking-1-cap.svg" alt="cat" />{" "}
              <span className="text-[24px] font-bold leading-[32px]">1位</span>
            </div>
          </div>
          <LargeCard imgUrl={catData[0]?.cat_images[0]?.imgs} />
          <div className="mt-[24px]">
            <div className="flex justify-between flex-wrap ">
              {catData &&
                catData.slice(1, 4).map((e, i) => (
                  <div className="flex flex-col">
                    <div className="flex leading-[27px] mb-[7px]">
                      {i === 0 && (
                        <div className="w-[36px] h-[26px] me-[12px]">
                          <CapSecond />
                        </div>
                      )}
                      {i === 1 && (
                        <div className="w-[36px] h-[26px] me-[12px]">
                          <CapThird />
                        </div>
                      )}
                      {i + 2}位
                    </div>
                    <BlogBox
                      key={i}
                      cat_name={e.cat_name}
                      shop_name={e.shop_name}
                      prefecture={e.prefecture}
                      cat_images={e.cat_images}
                      character={e.character}
                      favorite_things={e.favorite_things}
                      description={e.description}
                      like_num={e.like_num}
                      isNew={isNew}
                      isChu={isChu}
                    />
                  </div>
                ))}
            </div>
          </div>
          <div className="flex-wrap mt-[16px] grid grid-cols-2 gap-x-[24px] gap-y-[16px]">
            {Cats.slice(4, 11).map((e, i) => (
              <div className="flex flex-col">
                <div className="flex leading-[27px] mb-[7px]">{i + 5}位</div>
                <SmallCard
                  key={i}
                  imgUrl={"/assets/imgs/cats/small_card.png"}
                  isChu={e.isChu}
                  name={"heracles"}
                  cafe={"cafe"}
                  vote={2}
                  character={["fdsa", "reqw"]}
                  description={"this is description"}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-between pb-[8px] border-b border-[#CBB279] mb-[24px]">
            <div className="flex mt-[32px] items-center">
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
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  opacity="0.75"
                />
              </svg>
              次月
            </div>
            <div className="flex mt-[32px] items-center">
              前月
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
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  opacity="0.75"
                />
              </svg>
            </div>
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
        </div>
      </div>
      <Store />
      <Notices />
    </MainLayout>
  );
};

export default MonthRanking;
