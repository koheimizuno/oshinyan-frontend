import React from "react";
import MainLayout from "../../layouts/MainLayout";
import SocialLinkGroup from "../../components/common/SocialLinkGroup";
import Container from "../../components/basic/Container";
import PageBar from "../../components/common/PageBar";
import Title from "../../components/common/Typography/Title";
import BlogColumnBox from "../../components/basic/blog/BlogColumnBox";

const CatsInSamePlace = [
  {
    imgUrl: "/assets/imgs/cats/col_cat1.png",
    isChu: false,
  },
  {
    imgUrl: "/assets/imgs/cats/col_cat2.png",
    isChu: false,
  },
  {
    imgUrl: "/assets/imgs/cats/col_cat3.png",
    isChu: false,
  },
  {
    imgUrl: "/assets/imgs/cats/col_cat4.png",
    isChu: false,
  },
  {
    imgUrl: "/assets/imgs/cats/col_cat5.png",
    isChu: false,
  },
  {
    imgUrl: "/assets/imgs/cats/col_cat6.png",
    isChu: false,
  },
];

function Column() {
  return (
    <MainLayout>
      <SocialLinkGroup />
      <Container>
        <PageBar page="コラムページ" />
        <Title title="推しニャンコラム" />
        <p className="text-xl py-4">
          推しニャン編集部おススメの看板猫の紹介記事です。是非、お店に会いに行ってください。
        </p>
        <div className="pt-10">
          <p className="text-xl pb-4 text-[#808080]">2022.00.00</p>
          <h2 className="text-[32px] text-[#515151]">
            コラムタイトルコラムタイトルコラムタイトルコラムタイトルコラムタイトルコラムタイトルコラムタイトル
          </h2>
        </div>
        <div className="py-12">
          <img src="assets/imgs/column-1.png" alt="column-1" />
        </div>
        <p className="text-2xl mb-[70px] text-[#515151]">
          H3小見出しH3小見出しH3小見出しH3小見出しH3小見出しH3小見出しH3小見出しH3小見出しH3小見出しH3小見出しH3小見出しH3小見出しH3小見出し
        </p>
        <p className="text-[#515151] mb-16">
          画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文
        </p>
        <div className="grid grid-cols-12 mb-[60px]">
          <div className="col-span-5">
            <img
              src="assets/imgs/cats/column-hero-cat-1.png"
              alt="column-cat"
            />
            <p className="text-sm mt-4 tracking-[-.2em]">
              画像に対するキャプションが入ります画像に対するキャプションが入ります画像に対するキャプションが入ります画像に対するキャプションが入ります
            </p>
          </div>
          <p className="h-[360px] overflow-hidden col-span-7 pl-[47px]">
            画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文
          </p>
        </div>
        <div className="grid grid-cols-12 mb-[72px]">
          <p className="h-[360px] overflow-hidden col-span-7 pr-[47px]">
            画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文画像本文
          </p>
          <div className=" col-span-5">
            <img
              src="assets/imgs/cats/column-hero-cat-2.png"
              alt="column-cat"
            />
            <p className="text-sm mt-4 tracking-[-.2em]">
              画像に対するキャプションが入ります画像に対するキャプションが入ります画像に対するキャプションが入ります画像に対するキャプションが入ります
            </p>
          </div>
        </div>
        <div className="mt-6 mb-10 flex flex-wrap justify-between">
          {CatsInSamePlace.map((e, i) => (
            <BlogColumnBox
              key={i}
              imgUrl={e.imgUrl}
              isChu={true}
              name={"heracles"}
              cafe={"cafe"}
              vote={2}
              character={["a", "a"]}
              description={"this is description"}
            />
          ))}
        </div>
      </Container>
    </MainLayout>
  );
}

export default Column;
