import { useEffect } from "react";
import { useSelector } from "react-redux";
import MainLayout from "../../../layouts/MainLayout";
import Container from "../../../components/basic/Container";
import SocialLinkGroup from "../../../components/common/SocialLinkGroup";
import PageBar from "../../../components/common/PageBar";
import Title from "../../../components/common/Typography/Title";
import LoginForm from "../../../components/common/LoginForm";
import { useNavigate } from "react-router-dom";

function Login() {
  const { isAuthenticated } = useSelector((state: any) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    isAuthenticated && navigate("/");
  }, [isAuthenticated, navigate]);
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
          <LoginForm />
        </div>
      </Container>
    </MainLayout>
  );
}

export default Login;
