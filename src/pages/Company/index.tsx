import React from "react";
import MainLayout from "../../layouts/MainLayout";
import Container from "../../components/basic/Container";
import PageBar from "../../components/common/PageBar";
import SocialLinkGroup from "../../components/common/SocialLinkGroup";
import Title from "../../components/common/Typography/Title";

const Company = () => {
  return (
    <MainLayout>
      <SocialLinkGroup />
      <Container>
        <PageBar page="運営会社" />
        <Title title="運営会社" />
        <div className="pt-[28px]">
          <div className="flex py-[28px] border-b border-[#B7B7B7]">
            <p className="w-[120px] md:w-[160px] whitespace-nowrap">社名</p>
            <p className="w-[calc(100%-120px)] break-words">
              ⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎
            </p>
          </div>
          <div className="w-full flex py-[28px] border-b border-[#B7B7B7]">
            <p className="w-[120px] md:w-[160px] whitespace-nowrap">所在地</p>
            <p className="w-[calc(100%-120px)] break-words">
              〒000-0000
              ⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎
            </p>
          </div>
          <div className="w-full flex py-[28px] border-b border-[#B7B7B7]">
            <p className="w-[120px] md:w-[160px] whitespace-nowrap">TEL</p>
            <p className="w-[calc(100%-120px)]">0000-00-0000（代表）</p>
          </div>
          <div className="w-full flex py-[28px] border-b border-[#B7B7B7]">
            <p className="w-[120px] md:w-[160px] whitespace-nowrap">設立</p>
            <p className="w-[calc(100%-120px)]">19xx年x月</p>
          </div>
          <div className="w-full flex py-[28px] border-b border-[#B7B7B7]">
            <p className="w-[120px] md:w-[160px]">代表者</p>
            <p className="w-[calc(100%-120px)]">
              代表取締役社長　⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎
            </p>
          </div>
          <div className="w-full flex py-[28px] border-b border-[#B7B7B7]">
            <p className="w-[120px] md:w-[160px] whitespace-nowrap">
              主な事業内容
            </p>
            <p className="w-[calc(100%-120px)] break-all break-words">
              ⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎
            </p>
          </div>
        </div>
      </Container>
    </MainLayout>
  );
};

export default Company;
