import Carousel from "../../components/common/Carousel";
import MainLayout from "../../layouts/MainLayout";
import Container from "../../components/basic/Container";
import PageBar from "../../components/common/PageBar";
import SignboardRegisterForm from "../../components/common/SignboardRegisterForm";
import ApplicationForm from "../../components/common/ApplicationForm";

export default () => {
  return (
    <MainLayout>
      <Carousel />
      <Container>
        <div className="mt-4">
          <PageBar page="未登録看板猫情報募集" />
        </div>
        <div className="text-[32px] leading-[40px] mt-[24px] pb-[14px] border-b border-[#CBB279]">
        未登録看板猫情報
        </div>
        <div className="mt-[16px] text-[16px] leading-[21px]">
        以下のフォームに必要な項目を入力のうえ、確認をクリックしてくださいニャ
        </div>
        <div className="mt-4 text-[16px] text-[#DC0000]">
        ＊＝必須
        </div>
        <div className="mt-[8px] mb-[88px]">
          <ApplicationForm />
        </div>
      </Container>
    </MainLayout>
  );
};
