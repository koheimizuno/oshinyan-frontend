import React, { useState } from "react";
import Carousel from "../../components/common/Carousel";
import MainLayout from "../../layouts/MainLayout";
import SearchBar from "../../components/common/SearchBar";
import RankingBar from "../../components/common/RankingBar";
import BlogAD from "../../components/common/BlogAD";
import FindSignboard from "../../components/common/FindSignboard";
import Store from "../../components/common/Store";
import Notices from "../../components/common/Notices";
import LargeCard from "../../components/basic/LargeCard";

const MonthRanking = () => {
  const [list, setList] = useState<string[]>([]);

  return (
    <>
      <MainLayout>
        <Carousel />
        <SearchBar list={list} setList={setList} />
        {/* <div className="bg-[#F5F4EC]">
          <div className="  w-[960px] m-auto ">
            <RankingBar page="ranking"/>
            <div className="text-[40px] leading-[53px]">
              <span>2023年11月</span>
            </div>
            <div className="ranking-1 mt-[24px] mb-[24px]">
              <div className="ranking-1-tle flex gap-[8px]">
                <img src="/assets/imgs/ranking-1-cap.svg" alt="cat" /> <span className="text-[24px] font-bold leading-[32px]">1位</span>
              </div>
            </div>
            <LargeCard />
            <div className="mt-[12px]">
              <BlogAD />
            </div>
            <div className="bg-white text-center py-[65px] mb-[16px]">
              <h3 className="text-[16px]">キャンペーン / AD</h3>
            </div>
            <BlogAD />
            <div className="pt-[15px] pb-[35px] text-center border-b border-b-solid border-[#CCC]">
              <button className="w-[161px] h-[32px] rounded text-white bg-[#CBB279] shadow-inner text-[16px] py-[5px]">
                <p className="drop-shadow-[1px_1px_rgba(195,129,84,1)] translate-x-0.5">
                  もっとみるニャン！
                </p>
              </button>
            </div>
            <FindSignboard />
          </div>
        </div> */}
        <Store />
        <Notices />
      </MainLayout>
    </>
  );
};

export default MonthRanking;
