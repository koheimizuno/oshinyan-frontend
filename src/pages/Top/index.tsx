import React, { useState } from "react";
import Carousel from "../../components/common/Carousel";
import MainLayout from "../../layouts/MainLayout";
import SearchBar from "../../components/common/SearchBar";
import RankingBar from "../../components/common/RankingBar";
import BlogAD from "../../components/common/BlogAD";
import FindSignboard from "../../components/common/FindSignboard";
import Store from "../../components/common/Store";
import Notices from "../../components/common/Notices";
import CustomButton from "../../components/basic/BasicButton";
import Container from "../../components/basic/Container";
import SocialLinkGroup from "../../components/common/SocialLinkGroup";

const Top = () => {
  const [regions, setRegions] = useState<string[]>([]);

  return (
    <MainLayout>
      <SocialLinkGroup page="top" />
      <Carousel />
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
      </Container>
      <Store />
      <Notices />
    </MainLayout>
  );
};

export default Top;
