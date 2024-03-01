import React from "react";
import MainLayout from "../../layouts/MainLayout";
import Container from "../../components/basic/Container";
import PageBar from "../../components/common/PageBar";
import SocialLinkGroup from "../../components/common/SocialLinkGroup";
import Title from "../../components/common/Typography/Title";
import HelmetPage from "../../layouts/MainLayout/HelmetPage";

const Company = () => {
  return (
    <>
      <HelmetPage
        title="推しニャン｜推しニャンの運営会社"
        description="推しニャンサイトの運営会社"
        keywords="看板猫, 推しニャン, 猫のいる店"
      />
      <MainLayout>
        <SocialLinkGroup />
        <Container>
          <PageBar page="運営会社" />
          <Title title="運営会社" />
          <div className="pt-[28px] pb-[60px]">
            <div className="flex py-[28px] border-b border-[#B7B7B7]">
              <p className="w-[120px] md:w-[160px] whitespace-nowrap">社名</p>
              <p className="w-[calc(100%-120px)] break-words">
                株式会社シーピーユー
              </p>
            </div>
            <div className="w-full flex py-[28px] border-b border-[#B7B7B7]">
              <p className="w-[120px] md:w-[160px] whitespace-nowrap">所在地</p>
              <p className="w-[calc(100%-120px)] break-words">
                〒107-0051東京都港区元赤坂1-2-27
              </p>
            </div>
            <div className="w-full flex py-[28px] border-b border-[#B7B7B7]">
              <p className="w-[120px] md:w-[160px] whitespace-nowrap">TEL</p>
              <p className="w-[calc(100%-120px)]">info@oshinyan.love</p>
            </div>
            <div className="w-full flex py-[28px] border-b border-[#B7B7B7]">
              <p className="w-[120px] md:w-[160px] whitespace-nowrap">設立</p>
              <p className="w-[calc(100%-120px)]">2015年1月15日</p>
            </div>
            <div className="w-full flex py-[28px] border-b border-[#B7B7B7]">
              <p className="w-[120px] md:w-[160px]">代表者</p>
              <p className="w-[calc(100%-120px)]">代表取締役 米田哲郎</p>
            </div>
            <div className="w-full flex py-[28px] border-b border-[#B7B7B7]">
              <p className="w-[120px] md:w-[160px] whitespace-nowrap">
                主な事業内容
              </p>
              <p className="w-[calc(100%-120px)] break-all break-words">
                ヘルスケア支援サービス事業 コミュニティ生成事業
                ウェルビーイング事業 産学官連携事業
              </p>
            </div>
          </div>
        </Container>
      </MainLayout>
    </>
  );
};

export default Company;
