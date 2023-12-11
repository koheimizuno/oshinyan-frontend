import { useState } from "react";
import Carousel from "../../components/common/Carousel";
import MainLayout from "../../layouts/MainLayout";
import Container from "../../components/basic/Container";
import PageBar from "../../components/common/PageBar";
import LoginForm from "../../components/common/LoginForm";

const Register = () => {
  const [regions, setRegions] = useState<string[]>([]);

  return (
    <>
      <MainLayout>
        <Carousel />
        <Container>
          <div className="mt-4">
            <PageBar page="会員登録"/>
          </div>
          <div className="text-[24px] leading-[40px] mt-4 pb-4 border-b border-[#CBB279]">会員登録ニャ！</div>
          <div className="mt-[16px] text-[16px] leading-[21px]">会員登録して、推しニャンを見つけて楽しむニャー</div>
          <div className="mt-[32px] mb-[56px]">
            <LoginForm/>
          </div>
        </Container>
      </MainLayout>
    </>
  );
};

export default Register;
