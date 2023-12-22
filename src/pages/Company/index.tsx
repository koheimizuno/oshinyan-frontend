import React from "react";
import MainLayout from "../../layouts/MainLayout";
import Container from "../../components/basic/Container";
import PageBar from "../../components/common/PageBar";
import SocialLinkGroup from "../../components/common/SocialLinkGroup";
import Title from "../../components/common/Typography/Title";

const CompanyPage = () => {
  return (
    <MainLayout>
      <SocialLinkGroup />
      <Container>
        <PageBar page="プライバシーポリシー" />
        <Title title="運営会社" />
        <div className="w-full text-[16px] pt-[28px]">
          <div className="w-full flex py-[28px] border-b border-[#B7B7B7]">
            <div className="w-[160px]">社名</div>
            <div className="">
              ⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎
            </div>
          </div>
          <div className="w-full flex py-[28px] border-b border-[#B7B7B7]">
            <div className="w-[160px]">所在地</div>
            <div className="">
              〒000-0000
              ⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎
            </div>
          </div>
          <div className="w-full flex py-[28px] border-b border-[#B7B7B7]">
            <div className="w-[160px]">TEL</div>
            <div className="">0000-00-0000（代表）</div>
          </div>
          <div className="w-full flex py-[28px] border-b border-[#B7B7B7]">
            <div className="w-[160px]">設立</div>
            <div className="">19xx年x月</div>
          </div>
          <div className="w-full flex py-[28px] border-b border-[#B7B7B7]">
            <div className="w-[160px]">代表者</div>
            <div className="">
              代表取締役社長　⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎
            </div>
          </div>
          <div className="w-full flex py-[28px] border-b border-[#B7B7B7]">
            <div className="w-[160px]">主な事業内容</div>
            <div className="break-all w-fit max-w-[792px]">
              ⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎⬜︎
            </div>
          </div>
        </div>
      </Container>
    </MainLayout>
  );
};

export default CompanyPage;
