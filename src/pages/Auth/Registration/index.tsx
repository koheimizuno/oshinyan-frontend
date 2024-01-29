import MainLayout from "../../../layouts/MainLayout";
import Container from "../../../components/basic/Container";
import PageBar from "../../../components/common/PageBar";
import SignupForm from "../../../components/common/SignupForm";
import SocialLinkGroup from "../../../components/common/SocialLinkGroup";
import Title from "../../../components/common/Typography/Title";

const Registration = () => {
  return (
    <MainLayout>
      <SocialLinkGroup />
      <Container>
        <PageBar page="会員登録ニャ！" />
        <Title title="会員登録ニャ！" />
        <div className="mt-[16px] text-[16px] leading-[21px]">
          会員登録して、推しニャンを見つけて楽しむニャー
        </div>
        <div className="mt-[32px] mb-[56px]">
          <SignupForm />
        </div>
      </Container>
    </MainLayout>
  );
};

export default Registration;
