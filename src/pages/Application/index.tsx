import MainLayout from "../../layouts/MainLayout";
import Container from "../../components/basic/Container";
import PageBar from "../../components/common/PageBar";
import ApplicationForm from "../../components/common/ApplicationForm";
import SocialLinkGroup from "../../components/common/SocialLinkGroup";
import Title from "../../components/common/Typography/Title";

const ApplicationPage = () => {
  return (
    <MainLayout>
      <SocialLinkGroup />
      <Container>
        <PageBar page="未登録看板猫情報募集" />
        <Title title="未登録看板猫情報" />
        <div className="mt-[16px] text-[16px] leading-[21px]">
          以下のフォームに必要な項目を入力のうえ、確認をクリックしてくださいニャ
        </div>
        <div className="mt-4 text-[16px] text-[#DC0000]">＊＝必須</div>
        <div className="mt-[8px] mb-[88px]">
          <ApplicationForm />
        </div>
      </Container>
    </MainLayout>
  );
};

export default ApplicationPage;
