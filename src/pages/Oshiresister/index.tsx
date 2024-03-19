import { lazy } from "react";
import MainLayout from "../../layouts/MainLayout";
import Container from "../../components/basic/Container";
import HelmetPage from "../../layouts/MainLayout/HelmetPage";
import PageBar from "../../components/common/PageBar";
import Title from "../../components/common/Typography/Title";
const OshiresisterForm = lazy(
  () => import("../../components/common/OshiResisterForm")
);

const Oshiresister = () => {
  return (
    <>
      <HelmetPage
        title="推しニャン｜看板猫の登録申請をするページ"
        description="看板猫がいるお店の方が、お店で飼っている看板猫を登録できるページです。事務局の審査後にサイトに掲載をさせていただきます。"
        keywords="看板猫, 推しニャン, 猫のいる店"
      />
      <MainLayout>
        <Container>
          <div className="mt-4">
            <PageBar page="推しニャン申請" />
          </div>
          <Title title="推しニャン申請" />
          <div className="mt-[16px] text-[16px] leading-[21px]">
            以下のフォームに必要な項目を入力のうえ、確認をクリックしてくださいニャ
          </div>
          <div className="mt-4 text-[16px] text-[#DC0000]">＊＝必須</div>
          <div className="mt-[8px] mb-[88px]">
            <OshiresisterForm />
          </div>
        </Container>
      </MainLayout>
    </>
  );
};

export default Oshiresister;
