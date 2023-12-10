import { useState } from "react";
import Carousel from "../../components/common/Carousel";
import MainLayout from "../../layouts/MainLayout";

const ConceptIntro = () => {
  return (
    <>
      <MainLayout>
        <Carousel />
        <div className="mt-[40px]">
          <p className="text-[20px] leading-[27px]">
            「にゃんこ好きのみなさん、お待たせしました！
            <br />
            人生のワクワクが、ここでまた見つかります 『
            推し猫探し』をしてみませんか？
          </p>
          <p className="text-[28px] mt-[22px] leading-[37px]">
            推しニャンは『 お気に入りの看板猫が探せる！推せるサイト』 です
          </p>
          <p className="text-[16px] leading-[21px] mt-[24px]">
            当サイトでは、全国各地の素敵な店舗や宿に住む、個性豊かな「看板猫」を見つけることができます。美しい景色や素敵なお店を背景に、品のあるポーズを決めるトラ猫、優雅に風を受ける白猫、そしてちょっぴりシャイな三毛猫、そして颯爽とした黒猫
            さまざまな個性を持つ看板猫たちが全国で皆さんの訪れを待っています。
          </p>
        </div>
      </MainLayout>
    </>
  );
};

export default ConceptIntro;
