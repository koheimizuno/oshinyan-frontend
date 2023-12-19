import React, { useState } from "react";
import Carousel from "../../components/common/Carousel";
import MainLayout from "../../layouts/MainLayout";
import SearchBar from "../../components/common/SearchBar";
import RankingBar from "../../components/common/RankingBar";
import FindSignboard from "../../components/common/FindSignboard";
import Store from "../../components/common/Store";
import Notices from "../../components/common/Notices";
import LargeCard from "../../components/basic/LargeCard";
import BlogBox from "../../components/basic/blog/BlogBox";
import { CapSecond } from "../../components/basic/icons/CapSecond";
import { CapThird } from "../../components/basic/icons/CapThird";
import SmallCard from "../../components/basic/SmallCard";

const Cats = [
  {
    imgUrl: "/assets/imgs/cats/top_cat.png",
    isNew: true,
    isChu: false,
  },
  {
    imgUrl: "/assets/imgs/cats/cat2.png",
    isNew: true,
    isChu: true,
  },
  {
    imgUrl: "/assets/imgs/cats/cat3.png",
    isNew: true,
    isChu: false,
  },
  {
    imgUrl: "/assets/imgs/cats/cat4.png",
    isNew: true,
    isChu: false,
  },
  {
    imgUrl: "/assets/imgs/cats/cat5.png",
    isNew: true,
    isChu: false,
  },
  {
    imgUrl: "/assets/imgs/cats/cat6.png",
    isNew: true,
    isChu: false,
  },
  {
    imgUrl: "/assets/imgs/cats/cat7.png",
    isNew: true,
    isChu: false,
  },
  {
    imgUrl: "/assets/imgs/cats/cat8.png",
    isNew: true,
    isChu: false,
  },
  {
    imgUrl: "/assets/imgs/cats/cat9.png",
    isNew: true,
    isChu: false,
  },
  {
    imgUrl: "/assets/imgs/cats/cat9.png",
    isNew: true,
    isChu: false,
  },
];

const MonthRanking = () => {
  const [list, setList] = useState<string[]>([]);

  return (
    <>
      <MainLayout>
        <Carousel />
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
                <span className="text-[24px] font-bold leading-[32px]">
                  1位
                </span>
              </div>
            </div>
            <LargeCard imgUrl={Cats[0].imgUrl} />
            <div className="mt-[24px]">
              <div className="flex justify-between flex-wrap ">
                {Cats.slice(1, 4).map((e, i) => (
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
                      imgUrl={e.imgUrl}
                      isNew={e.isNew}
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
            <FindSignboard />
          </div>
        </div>
        <Store />
        <Notices />
      </MainLayout>
    </>
  );
};

export default MonthRanking;
